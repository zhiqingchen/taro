import * as path from 'path'
import wxTransformer from '@tarojs/transformer-wx'
import * as babel from 'babel-core'
import * as t from 'babel-types'
import traverse, { NodePath } from 'babel-traverse'
import { get, cloneDeep, remove, identity, merge, transform } from 'lodash'

import { REG_TYPESCRIPT, PARSE_AST_TYPE } from './constants'
import {
  convertAstExpressionToVariable as toVar
} from './astConvert'

/**
 * 判断是否为子页面
 * @param parentPath
 */
export const isUnderSubPackages = (parentPath: NodePath<t.Node>) => (parentPath.isObjectProperty() && /subpackages/i.test(toVar(parentPath.node.key)))

export function createRoute ({ pageName, isIndex, lazyload = true }) {
  const absPagename = addLeadingSlash(pageName)
  const relPagename = `.${absPagename}`
  const chunkName = relPagename.split('/').filter(v => !/^(pages|\.)$/i.test(v)).join('_')
  if (lazyload) {
    const chunkNameComment = chunkName ? `/* webpackChunkName: "${chunkName}" */` : ''
    return `{
      path: '${absPagename}',
      componentLoader: () => import(${chunkNameComment}'${relPagename}'),
      isIndex: ${isIndex}
    }`
  } else {
    return `{
      path: '${absPagename}',
      componentLoader: () => Promise.resolve(require('${relPagename}')),
      isIndex: ${isIndex}
    }`
  }
}

/**
 * TS 编译器会把 class property 移到构造器，
 * 而小程序要求 `config` 和所有函数在初始化(after new Class)之后就收集到所有的函数和 config 信息，
 * 所以当如构造器里有 this.func = () => {...} 的形式，就给他转换成普通的 classProperty function
 * 如果有 config 就给他还原
 */
export function resetTSClassProperty (body) {
  for (const method of body) {
    if (t.isClassMethod(method) && method.kind === 'constructor') {
      for (const statement of cloneDeep(method.body.body)) {
        if (t.isExpressionStatement(statement) && t.isAssignmentExpression(statement.expression)) {
          const expr = statement.expression
          const { left, right } = expr
          if (
            t.isMemberExpression(left) &&
              t.isThisExpression(left.object) &&
              t.isIdentifier(left.property)
          ) {
            if (
              (t.isArrowFunctionExpression(right) || t.isFunctionExpression(right)) ||
                (left.property.name === 'config' && t.isObjectExpression(right))
            ) {
              body.push(
                t.classProperty(left.property, right)
              )
              remove(method.body.body, statement)
            }
          }
        }
      }
    }
  }
}

export const addLeadingSlash = (url: string) => url.charAt(0) === '/' ? url : '/' + url

export const removeLeadingSlash = (url: string) => url.replace(/^\.?\//, '')

export const stripTrailingSlash = (url: string) => url.charAt(url.length - 1) === '/' ? url.slice(0, -1) : url

export const isTaroClass = (astPath: NodePath<t.ClassDeclaration> | NodePath<t.ClassExpression>) => {
  let isTaroClass = false
  astPath.traverse({
    ClassMethod (astPath: NodePath<t.ClassMethod>) {
      const key = astPath.get('key')
      if (t.isIdentifier(key.node) && key.node.name === 'render') {
        astPath.traverse({
          ReturnStatement (astPath) {
            const argument = astPath.get('argument')
            if (argument) {
              isTaroClass = true
            }
          }
        })
      }
    }
  })
  return isTaroClass
}

export function generateAppPages (appPath, code, routerConfig) {
  const pages: [string, string][] = []
  const renamePagename = get(routerConfig, 'renamePagename', identity)
  const isMultiRouterMode = get(routerConfig, 'mode') === 'multi'
  const customRoutes: Record<string, string> = isMultiRouterMode
    ? {}
    : get(routerConfig, 'customRoutes', {})
  let ast = wxTransformer({
    code,
    sourcePath: appPath,
    isNormal: true,
    isTyped: REG_TYPESCRIPT.test(appPath),
    adapter: 'h5'
  }).ast

  ast = babel.transformFromAst(ast, '', {
    plugins: [
      [require('babel-plugin-preval')]
    ]
  }).ast

  const ClassDeclarationOrExpression = {
    enter (astPath: NodePath<t.ClassDeclaration> | NodePath<t.ClassExpression>) {
      const node = astPath.node
      if (!node.superClass) return
      if (isTaroClass(astPath)) {
        resetTSClassProperty(node.body.body)
      }
    }
  }
  const classPropertyVisitor = {
    ObjectProperty (astPath: NodePath<t.ObjectProperty>) {
      const node = astPath.node
      const key = node.key
      const value = node.value
      const keyName = toVar(key)
      if (keyName === 'pages' && t.isArrayExpression(value)) {
        const subPackageParent = astPath.findParent(isUnderSubPackages)
        if (subPackageParent) {
          /* 在subPackages属性下，说明是分包页面，需要处理root属性 */
          const parent = astPath.parent as t.ObjectExpression
          const rootNode = parent.properties.find(v => {
            if (t.isSpreadProperty(v)) return false
            return toVar(v.key) === 'root'
          }) as t.ObjectProperty
          const root = rootNode ? toVar(rootNode.value) : '';
          value.elements.forEach((v: t.StringLiteral) => {
            const pagePath = `${root}/${v.value}`.replace(/\/{2,}/g, '/')
            const pageName = removeLeadingSlash(pagePath)
            pages.push([pageName, renamePagename(pageName).replace(/\//g, '')])
          })
        } else {
          value.elements.forEach((v: t.StringLiteral) => {
            const pagePath = v.value.replace(/\/{2,}/g, '/')
            const pageName = removeLeadingSlash(pagePath)
            pages.push([pageName, renamePagename(pageName).replace(/\//g, '')])
          })
        }
      }
    }
  }
  traverse(ast, {
    ClassExpression: ClassDeclarationOrExpression,
    ClassDeclaration: ClassDeclarationOrExpression,
    ClassProperty: {
      enter (astPath: NodePath<t.ClassProperty>) {
        const node = astPath.node
        const key = node.key
        const keyName = toVar(key)

        if (keyName === 'config') {
          astPath.traverse(classPropertyVisitor)
          if (isMultiRouterMode) {
            merge(customRoutes, transform(pages, (res, [pageName, filePath], key) => {
              res[addLeadingSlash(pageName)] = addLeadingSlash(filePath)
            }, {}))
          }
        }
      }
    }
  })

  return pages
}

let pages: [string, string][] = []

export function setAppPages (newPages) {
  pages = newPages
}

export function getAppPages () {
  return pages
}


export function classifyFiles (sourceDir, entryFilePath, pages, filename) {
  if (path.relative(filename, entryFilePath) === '') return PARSE_AST_TYPE.ENTRY
  let relPath = path.normalize(
    path.relative(sourceDir, filename)
  )
  relPath = path.format({
    dir: path.dirname(relPath),
    base: path.basename(relPath, path.extname(relPath))
  })

  const isPage = pages.some(([pageName, filePath]) => {
    const relPage = path.normalize(pageName)
    if (path.relative(relPage, relPath) === '') return true
    return false
  })

  if (isPage) {
    return PARSE_AST_TYPE.PAGE
  } else {
    return PARSE_AST_TYPE.NORMAL
  }
}
