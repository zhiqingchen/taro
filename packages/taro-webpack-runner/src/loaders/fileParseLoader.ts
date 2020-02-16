import { getOptions } from 'loader-utils'
import { transform, transformFromAst } from 'babel-core'
import * as t from 'babel-types'
import generate from 'better-babel-generator'
import traverse, { NodePath, TraverseOptions } from 'babel-traverse'
import * as resolve from 'resolve'
import * as _ from 'lodash'
import { partial, pipe } from 'lodash/fp'
import { PageConfig } from '@tarojs/taro'
import { IH5RouterConfig } from '@tarojs/taro/types/compile'

import {
  getAppPages,
  isTaroClass,
  resetTSClassProperty,
  stripTrailingSlash,
  addLeadingSlash,
  createRoute,
  classifyFiles
} from '../util/helper'
import {
  tabBarPanelComponentName,
  tabBarComponentName,
  tabBarConfigName,
  tabBarContainerComponentName,
  providerComponentName,
  nervJsImportDefaultName,
  setStoreFuncName,
  PARSE_AST_TYPE,
  MAP_FROM_COMPONENTNAME_TO_ID,
  APIS_NEED_TO_APPEND_THIS
} from '../util/constants'
import {
  convertAstExpressionToVariable as toVar,
  convertObjectToAstExpression as objToAst,
  convertSourceStringToAstExpression as toAst
} from '../util/astConvert'
import {
  isAliasPath,
  replaceAliasPath,
  isNpmPkg,
  mergeVisitors,
  isNodeModule
} from '../util'

const BLOCK_TAG_NAME = 'Block'

function processEntry ({
  ast,
  filePath,
  pages,
  router,
  publicPath,
  alias,
  designWidth,
  deviceRatio
}: {
  ast: t.File,
  filePath: string,
  router: IH5RouterConfig,
  pages: [string, string][],
  publicPath: string,
  alias: object,
  designWidth: number,
  deviceRatio: object
}) {
  const routerMode = router.mode
  const isMultiRouterMode = routerMode === 'multi'
  const routerLazyload = 'lazyload' in router
    ? router.lazyload
    : !isMultiRouterMode
  const customRoutes: Record<string, string> | void = isMultiRouterMode
    ? {}
    : _.get(router, 'customRoutes', {})
  const routerBasename = isMultiRouterMode
    ? (publicPath || '/')
    : addLeadingSlash(stripTrailingSlash(router.basename || ''))

  const pxTransformConfig = { designWidth: designWidth || 750 }
  if (deviceRatio) {
    pxTransformConfig['deviceRatio'] = deviceRatio
  }
  let taroImportDefaultName: string
  let providerImportName: string
  let storeName: string
  let renderCallCode: string

  let tabBar
  let tabbarPos
  let hasConstructor = false
  let hasComponentWillMount = false
  let hasComponentDidMount = false
  let hasComponentDidShow = false
  let hasComponentDidHide = false
  let hasComponentWillUnmount = false
  let hasNerv = false
  let stateNode: t.ClassProperty

  const additionalConstructorNode = toAst(`Taro._$app = this`)
  const callComponentDidShowNode = toAst(`this.componentDidShow()`)
  const callComponentDidHideNode = toAst(`this.componentDidHide()`)
  const initTabbarApiNode = toAst(`Taro.initTabBarApis(this, Taro)`)

  const ClassDeclarationOrExpression = {
    enter (astPath: NodePath<t.ClassDeclaration> | NodePath<t.ClassExpression>) {
      const node = astPath.node
      if (!node.superClass) return
      if (isTaroClass(astPath)) {
        resetTSClassProperty(node.body.body)
      }
    }
  }

  const wrapWithTabbar = (currentPagename: string, funcBody: string) => {
    const firstPage = _.first(pages)
    const homePage = firstPage ? firstPage[0] : ''

    const panel = `
      <${tabBarPanelComponentName}>
        ${funcBody}
      </${tabBarPanelComponentName}>`

    const comp = `
      <${tabBarComponentName}
        conf={this.state.${tabBarConfigName}}
        homePage="${homePage}"
        ${currentPagename ? `currentPagename={'${currentPagename}'}` : ''}
        ${tabbarPos === 'top' ? `tabbarPos={'top'}` : ''} />`

    return `
      <${tabBarContainerComponentName}>
        ${tabbarPos === 'top' ? `${comp}${panel}` : `${panel}${comp}`}
      </${tabBarContainerComponentName}>`
  }

  const wrapWithProvider = (funcBody: string) => {
    return `
      <${providerImportName} store={${storeName}}>
        ${funcBody}
      </${providerImportName}>
    `
  }

  const wrapWithFuncBody = (funcBody: string) => {
    return `{return (${funcBody});}`
  }

  /**
   * ProgramExit使用的visitor
   * 负责修改render函数的内容，在componentDidMount中增加componentDidShow调用，在componentWillUnmount中增加componentDidHide调用。
   */
  const programExitVisitor = {
    ClassMethod: {
      exit (astPath: NodePath<t.ClassMethod>) {
        if (isMultiRouterMode) return

        const node = astPath.node
        const key = node.key
        const keyName = toVar(key)

        const isRender = keyName === 'render'
        const isComponentWillMount = keyName === 'componentWillMount'
        const isComponentDidMount = keyName === 'componentDidMount'
        const isComponentWillUnmount = keyName === 'componentWillUnmount'
        const isConstructor = keyName === 'constructor'

        if (isRender) {
          const createFuncBody = (pages: [string, string][]) => {
            const routes = pages.map(([pageName, filePath], k) => {
              const shouldLazyloadPage = typeof routerLazyload === 'function'
                ? routerLazyload(pageName)
                : routerLazyload
              return createRoute({
                pageName,
                lazyload: shouldLazyloadPage,
                isIndex: k === 0
              })
            })
            return `
              <Router
                mode={${JSON.stringify(routerMode)}}
                history={_taroHistory}
                routes={[${routes.join(',')}]}
                customRoutes={${JSON.stringify(customRoutes)}} />
              `
          }

          const buildFuncBody = pipe(
            ..._.compact([
              createFuncBody,
              tabBar && partial(wrapWithTabbar, ['']),
              providerComponentName && storeName && wrapWithProvider,
              wrapWithFuncBody
            ])
          )

          node.body = toAst(buildFuncBody(pages), { preserveComments: true })

          node.body.body = _.compact([
            hasComponentDidHide && isComponentWillUnmount && callComponentDidHideNode,
            ...node.body.body,
            tabBar && isComponentWillMount && initTabbarApiNode,
            hasConstructor && isConstructor && additionalConstructorNode,
            hasComponentDidShow && isComponentDidMount && callComponentDidShowNode
          ])
        }
      }
    },
    ClassBody: {
      exit (astPath: NodePath<t.ClassBody>) {
        const node = astPath.node
        if (hasComponentDidShow && !hasComponentDidMount) {
          node.body.push(t.classMethod(
            'method', t.identifier('componentDidMount'), [],
            t.blockStatement([callComponentDidShowNode]), false, false))
        }
        if (hasComponentDidHide && !hasComponentWillUnmount) {
          node.body.push(t.classMethod(
            'method', t.identifier('componentWillUnmount'), [],
            t.blockStatement([callComponentDidHideNode]), false, false))
        }
        if (!hasConstructor) {
          node.body.push(t.classMethod(
            'method', t.identifier('constructor'), [t.identifier('props'), t.identifier('context')],
            t.blockStatement([toAst('super(props, context)'), additionalConstructorNode] as t.Statement[]), false, false))
        }
        if (tabBar) {
          if (!hasComponentWillMount) {
            node.body.push(t.classMethod(
              'method', t.identifier('componentWillMount'), [],
              t.blockStatement([initTabbarApiNode]), false, false))
          }
          if (!stateNode) {
            stateNode = t.classProperty(
              t.identifier('state'),
              t.objectExpression([])
            )
            node.body.unshift(stateNode)
          }
          if (t.isObjectExpression(stateNode.value)) {
            stateNode.value.properties.push(t.objectProperty(
              t.identifier(tabBarConfigName),
              tabBar
            ))
          }
        }
      }
    }
  }

  /**
   * ClassProperty使用的visitor
   * 负责收集config中的pages，收集tabbar的position，替换icon。
   */
  const classPropertyVisitor = {
    ObjectProperty (astPath: NodePath<t.ObjectProperty>) {
      const node = astPath.node
      const key = node.key
      const value = node.value
      const keyName = toVar(key)
      if (keyName === 'tabBar' && t.isObjectExpression(value)) {
        // tabBar相关处理
        tabBar = value
        value.properties.forEach((node) => {
          if (t.isSpreadProperty(node)) return
          switch (toVar(node.key)) {
            case 'position':
              tabbarPos = toVar(node.value)
              break
            case 'list':
              t.isArrayExpression(node.value) && node.value.elements.forEach(v => {
                if (!v) return
                if (!t.isObjectExpression(v)) return
                v.properties.forEach(property => {
                  if (!t.isObjectProperty(property)) return
                  switch (toVar(property.key)) {
                    case 'iconPath':
                    case 'selectedIconPath':
                      if (t.isStringLiteral(property.value)) {
                        property.value = t.callExpression(
                          t.identifier('require'),
                          [t.stringLiteral(`./${property.value.value}`)]
                        )
                      }
                      break
                    case 'pagePath':
                      property.value = t.stringLiteral(addLeadingSlash(toVar(property.value)))
                      break
                  }
                })
              })
          }
        })
        value.properties.push(t.objectProperty(
          t.identifier('mode'),
          t.stringLiteral(routerMode)
        ))
        value.properties.push(t.objectProperty(
          t.identifier('basename'),
          t.stringLiteral(routerBasename)
        ))
        value.properties.push(t.objectProperty(
          t.identifier('customRoutes'),
          t.objectExpression(objToAst(customRoutes))
        ))
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

        if (keyName === 'state') {
          stateNode = node
        } else if (keyName === 'config') {
          astPath.traverse(classPropertyVisitor)
          if (isMultiRouterMode) {
            _.merge(customRoutes, transform(pages, (res, [pageName, filePath], key) => {
              res[addLeadingSlash(pageName)] = addLeadingSlash(filePath)
            }, {}))
          }
        }
      }
    },
    ImportDeclaration: {
      enter: (astPath: NodePath<t.ImportDeclaration>) => {
        const node = astPath.node
        const source = node.source
        const specifiers = node.specifiers

        if (source.value === '@tarojs/taro') {
          const specifier = specifiers.find(item => t.isImportDefaultSpecifier(item))
          if (specifier) {
            taroImportDefaultName = toVar(specifier.local)
          }
          source.value = '@tarojs/taro-h5'
        } else if (source.value === '@tarojs/redux') {
          const specifier = specifiers.find(item => {
            return t.isImportSpecifier(item) && item.imported.name === providerComponentName
          })
          if (specifier) {
            providerImportName = specifier.local.name
          } else {
            providerImportName = providerComponentName
            specifiers.push(t.importSpecifier(t.identifier(providerComponentName), t.identifier(providerComponentName)))
          }
          source.value = '@tarojs/redux-h5'
        } else if (source.value === '@tarojs/mobx') {
          const specifier = specifiers.find(item => {
            return t.isImportSpecifier(item) && item.imported.name === providerComponentName
          })
          if (specifier) {
            providerImportName = specifier.local.name
          } else {
            providerImportName = providerComponentName
            specifiers.push(t.importSpecifier(t.identifier(providerComponentName), t.identifier(providerComponentName)))
          }
          source.value = '@tarojs/mobx-h5'
        } else if (source.value === 'nervjs') {
          hasNerv = true
          const defaultSpecifier = specifiers.find(item => t.isImportDefaultSpecifier(item))
          if (!defaultSpecifier) {
            specifiers.unshift(
              t.importDefaultSpecifier(t.identifier(nervJsImportDefaultName))
            )
          }
        }

        if (isAliasPath(source.value, alias)) {
          source.value = replaceAliasPath(filePath, source.value, alias)
        }

        if (!isNpmPkg(source.value)) {
          if (source.value.indexOf('.') === 0) {
            const pathArr = source.value.split('/')

            /* FIXME: 会导致误删除 */
            if (pathArr.indexOf('pages') >= 0) {
              astPath.remove()
            }
          }
        }
      }
    },
    CallExpression: {
      enter (astPath: NodePath<t.CallExpression>) {
        const node = astPath.node
        const callee = node.callee
        const calleeName = toVar(callee)
        const parentPath = astPath.parentPath
        const arg0 = node.arguments[0]

        if (calleeName === 'require' && t.isStringLiteral(arg0)) {
          const required = arg0.value
          if (required === '@tarojs/taro-h5') {
            arg0.value = `@tarojs/taro-h5/dist/index.cjs.js`
          }
        } else if (t.isMemberExpression(callee)) {
          const object = callee.object as t.Identifier
          const property = callee.property as t.Identifier
          if (object.name === taroImportDefaultName && property.name === 'render') {
            object.name = nervJsImportDefaultName
            renderCallCode = generate(astPath.node).code
            astPath.remove()
          }
        } else {
          if (calleeName === setStoreFuncName) {
            if (parentPath.isAssignmentExpression() ||
              parentPath.isExpressionStatement() ||
              parentPath.isVariableDeclarator()) {
              parentPath.remove()
            }
          }
        }
      }
    },
    ClassMethod: {
      exit (astPath: NodePath<t.ClassMethod>) {
        const node = astPath.node
        const key = node.key
        const keyName = toVar(key)
        if (keyName === 'constructor') {
          hasConstructor = true
        } else if (keyName === 'componentWillMount') {
          hasComponentWillMount = true
        } else if (keyName === 'componentDidMount') {
          hasComponentDidMount = true
        } else if (keyName === 'componentDidShow') {
          hasComponentDidShow = true
        } else if (keyName === 'componentDidHide') {
          hasComponentDidHide = true
        } else if (keyName === 'componentWillUnmount') {
          hasComponentWillUnmount = true
        }
      }
    },
    JSXOpeningElement: {
      enter (astPath: NodePath<t.JSXOpeningElement>) {
        const node = astPath.node
        if (toVar(node.name) === 'Provider') {
          for (const v of node.attributes) {
            if (v.name.name !== 'store') continue
            if (!v.value || !t.isJSXExpressionContainer(v.value)) return
            storeName = toVar(v.value.expression)
            break
          }
        }
      }
    },
    Program: {
      exit (astPath: NodePath<t.Program>) {
        const node = astPath.node
        const lastImportIndex = _.findLastIndex(astPath.node.body, t.isImportDeclaration)
        const lastImportNode = astPath.get(`body.${lastImportIndex > -1 ? lastImportIndex : 0}`) as NodePath<t.ImportDeclaration>
        const firstPage = _.first(pages)
        const routerConfigs = JSON.stringify({
          basename: routerBasename,
          customRoutes
        })

        const extraNodes: (t.Node | false)[] = [
          !hasNerv && toAst(`import ${nervJsImportDefaultName} from 'nervjs'`),
          tabBar && toAst(`import { View, ${tabBarComponentName}, ${tabBarContainerComponentName}, ${tabBarPanelComponentName}} from '@tarojs/components'`),
          toAst(`import { Router, createHistory, mountApis } from '@tarojs/router'`),
          toAst(`Taro.initPxTransform(${JSON.stringify(pxTransformConfig)})`),
          toAst(`
            const _taroHistory = createHistory({
              mode: "${routerMode}",
              basename: "${routerBasename}",
              customRoutes: ${JSON.stringify(customRoutes)},
              firstPagePath: "${addLeadingSlash(firstPage ? firstPage[0] : '')}"
            });
          `),
          isMultiRouterMode ? toAst(`mountApis(${routerConfigs});`) : toAst(`mountApis(${routerConfigs}, _taroHistory);`)
        ]
        astPath.traverse(programExitVisitor)
        lastImportNode.insertAfter(_.compact(extraNodes))
        if (renderCallCode) {
          const renderCallNode = toAst(renderCallCode)
          node.body.push(renderCallNode)
        }
      }
    }
  })

  if (isMultiRouterMode) {
    return pages.map(([pageName, filePath], k) => {
      const createFuncBody = () => {
        const shouldLazyloadPage = typeof routerLazyload === 'function'
          ? routerLazyload(pageName)
          : routerLazyload
        const route = createRoute({
          pageName,
          lazyload: shouldLazyloadPage,
          isIndex: k === 0
        })
        return `
          <Router
            mode={${JSON.stringify(routerMode)}}
            history={_taroHistory}
            routes={[${route}]}
            customRoutes={${JSON.stringify(customRoutes)}} />
          `
      }
      const replaceMultiRouterVisitor: TraverseOptions<t.Node> = {
        ClassMethod: {
          exit (astPath: NodePath<t.ClassMethod>) {
            const node = astPath.node
            const key = node.key
            const keyName = toVar(key)

            const isRender = keyName === 'render'
            const isComponentWillMount = keyName === 'componentWillMount'
            const isComponentDidMount = keyName === 'componentDidMount'
            const isComponentWillUnmount = keyName === 'componentWillUnmount'
            const isConstructor = keyName === 'constructor'

            if (isRender) {
              const buildFuncBody = pipe(
                ..._.compact([
                  createFuncBody,
                  tabBar && partial(wrapWithTabbar, [addLeadingSlash(pageName)]),
                  providerComponentName && storeName && wrapWithProvider,
                  wrapWithFuncBody
                ])
              )

              node.body = toAst(buildFuncBody(pages), { preserveComments: true })

              node.body.body = _.compact([
                hasComponentDidHide && isComponentWillUnmount && callComponentDidHideNode,
                ...node.body.body,
                tabBar && isComponentWillMount && initTabbarApiNode,
                hasConstructor && isConstructor && additionalConstructorNode,
                hasComponentDidShow && isComponentDidMount && callComponentDidShowNode
              ])
            }
          }
        },
        Program: {
          exit (astPath: NodePath<t.Program>) {
            const node = astPath.node
            node.body.forEach((bodyNode) => {
              if (t.isExpressionStatement(bodyNode)
                && t.isCallExpression(bodyNode.expression)
                && t.isIdentifier(bodyNode.expression.callee)
                && bodyNode.expression.callee.name === 'mountApis') {
                const mountApisOptNode = bodyNode.expression.arguments[0]
                if (t.isObjectExpression(mountApisOptNode)) {
                  const valueNode = t.stringLiteral(addLeadingSlash(pageName))
                  let basenameNode = mountApisOptNode.properties.find((property: t.ObjectProperty) => {
                    return toVar<string>(property.key) === 'currentPagename'
                  }) as t.ObjectProperty | undefined
                  if (basenameNode) {
                    basenameNode.value = valueNode
                  } else {
                    basenameNode = t.objectProperty(t.stringLiteral('currentPagename'), valueNode)
                    mountApisOptNode.properties.push(basenameNode)
                  }
                }
              }
            })
          }
        }
      }
      traverse(ast, replaceMultiRouterVisitor)
      return [filePath, ast]
    })
  }
  return ast
}

function processOthers ({
  ast,
  filePath,
  fileType,
  alias
}: {
  ast: t.File,
  filePath: string,
  fileType: PARSE_AST_TYPE,
  alias: object
}) {
  const isPage = fileType === PARSE_AST_TYPE.PAGE
  const componentnameMap = new Map()
  const taroapiMap = new Map()
  let taroImportDefaultName
  let hasJSX = false
  let hasOnPageScroll = false
  let hasOnReachBottom = false
  let hasOnPullDownRefresh = false
  let pageConfig: PageConfig = {}
  let componentDidMountNode: t.ClassMethod
  let componentDidShowNode: t.ClassMethod
  let componentDidHideNode: t.ClassMethod
  let importTaroComponentNode: t.ImportDeclaration
  let importNervNode: t.ImportDeclaration
  let importTaroNode: t.ImportDeclaration
  let renderClassMethodNode: t.ClassMethod
  let exportDefaultDeclarationNode: t.ExportDefaultDeclaration
  let exportNamedDeclarationPath: NodePath<t.ExportNamedDeclaration>
  let componentClassName
  let needSetConfigFromHooks
  let configFromHooks

  const renderReturnStatementPaths: NodePath<t.ReturnStatement>[] = []

  const ClassDeclarationOrExpression = {
    enter (astPath: NodePath<t.ClassDeclaration> | NodePath<t.ClassExpression>) {
      const node = astPath.node
      if (!node.superClass) return
      if (isTaroClass(astPath)) {
        resetTSClassProperty(node.body.body)
        if (t.isClassDeclaration(astPath)) {
          if (node.id === null) {
            componentClassName = '_TaroComponentClass'
            astPath.replaceWith(
              t.classDeclaration(
                t.identifier(componentClassName),
                node.superClass as t.Expression,
                node.body as t.ClassBody,
                node.decorators as t.Decorator[] || []
              )
            )
          } else {
            componentClassName = node.id.name
          }
        } else {
          if (node.id === null) {
            const parentNode = astPath.parentPath.node as any
            if (t.isVariableDeclarator(astPath.parentPath)) {
              componentClassName = parentNode.id.name
            } else {
              componentClassName = '_TaroComponentClass'
            }
            astPath.replaceWith(
              t.classExpression(
                t.identifier(componentClassName),
                node.superClass as t.Expression,
                node.body as t.ClassBody,
                node.decorators as t.Decorator[] || []
              )
            )
          } else {
            componentClassName = node.id.name
          }
        }
      }
    }
  }

  const getComponentId = (componentName: string, node: t.JSXOpeningElement) => {
    const idAttrName = MAP_FROM_COMPONENTNAME_TO_ID.get(componentName)
    return node.attributes.reduce((prev, attribute) => {
      if (prev) return prev
      const attrName = toVar(attribute.name)
      if (attrName === idAttrName) return toVar(attribute.value)
      else return false
    }, false as string | false)
  }
  const getComponentRef = (node: t.JSXOpeningElement) => {
    return node.attributes.find(attribute => {
      return toVar(attribute.name) === 'ref'
    })
  }
  const createRefFunc = (componentId: string) => {
    return t.arrowFunctionExpression(
      [t.identifier('ref')],
      t.blockStatement([
        toAst(`this['__taroref_${componentId}'] = ref`) as t.Statement
      ])
    )
  }

  /**
   * 把namedExport换成defaultExport。应对情况：
   *
   *  - export function example () {}
   *  - export class example {}
   *  - export const example
   *  - export { example }
   */
  const replaceExportNamedToDefault = (astPath: NodePath<t.ExportNamedDeclaration>) => {
    if (!astPath) return

    const node = astPath.node
    if (t.isFunctionDeclaration(node.declaration)) {

      astPath.replaceWithMultiple([
        node.declaration,
        t.exportDefaultDeclaration(node.declaration.id)
      ])
    } else if (t.isClassDeclaration(node.declaration)) {
      astPath.replaceWithMultiple([
        node.declaration,
        t.exportDefaultDeclaration(node.declaration.id)
      ])
    } else if (t.isVariableDeclaration(node.declaration)) {
      const declarationId = node.declaration.declarations[0].id
      if (t.isIdentifier(declarationId)) {
        astPath.replaceWithMultiple([
          node.declaration,
          t.exportDefaultDeclaration(declarationId)
        ])
      }
    } else if (node.specifiers && node.specifiers.length) {
      astPath.replaceWithMultiple([
        t.exportDefaultDeclaration(node.specifiers[0].local)
      ])
    }
  }

  const defaultVisitor: TraverseOptions = {
    ClassExpression: ClassDeclarationOrExpression,
    ClassDeclaration: ClassDeclarationOrExpression,
    ImportDeclaration: {
      enter: (astPath: NodePath<t.ImportDeclaration>) => {
        const node = astPath.node
        const source = node.source
        const specifiers = node.specifiers

        if (source.value === '@tarojs/taro') {
          importTaroNode = node
          specifiers.forEach(specifier => {
            if (t.isImportDefaultSpecifier(specifier)) {
              taroImportDefaultName = toVar(specifier.local)
            } else if (t.isImportSpecifier(specifier)) {
              taroapiMap.set(toVar(specifier.local), toVar(specifier.imported))
            }
          })
          source.value = '@tarojs/taro-h5'
        } else if (source.value === '@tarojs/redux') {
          source.value = '@tarojs/redux-h5'
        } else if (source.value === '@tarojs/mobx') {
          source.value = '@tarojs/mobx-h5'
        } else if (source.value === '@tarojs/components') {
          importTaroComponentNode = node
          node.specifiers.forEach((specifier) => {
            if (!t.isImportSpecifier(specifier)) return
            componentnameMap.set(toVar(specifier.local), toVar(specifier.imported))
          })
        } else if (source.value === 'nervjs') {
          importNervNode = node
        }

        if (isAliasPath(source.value, alias)) {
          source.value = replaceAliasPath(filePath, source.value, alias)
        }
      }
    },
    JSXElement: {
      exit (astPath: NodePath<t.JSXElement>) {
        hasJSX = true
      }
    },
    JSXOpeningElement: {
      exit (astPath: NodePath<t.JSXOpeningElement>) {
        const node = astPath.node
        const tagName = toVar(node.name)
        const componentName = componentnameMap.get(tagName)
        const componentId = getComponentId(componentName, node)
        const componentRef = getComponentRef(node)

        if (tagName === BLOCK_TAG_NAME) {
          node.name = t.jSXMemberExpression(
            t.jSXIdentifier('Nerv'),
            t.jSXIdentifier('Fragment')
          )
        }

        if (!componentId) return
        const refFunc = createRefFunc(componentId)

        if (componentRef) {
          const expression = (componentRef.value as t.JSXExpressionContainer).expression;
          (refFunc.body as t.BlockStatement).body.unshift(
            t.expressionStatement(
              t.callExpression(expression, [t.identifier('ref')])
            )
          );
          (componentRef.value as t.JSXExpressionContainer).expression = refFunc
        } else {
          node.attributes.push(
            t.jSXAttribute(
              t.jSXIdentifier('ref'),
              t.jSXExpressionContainer(refFunc)
            )
          )
        }
      }
    },
    JSXClosingElement: {
      exit (astPath: NodePath<t.JSXClosingElement>) {
        const node = astPath.node
        const tagName = toVar(node.name)
        if (tagName === BLOCK_TAG_NAME) {
          node.name = t.jSXMemberExpression(
            t.jSXIdentifier('Nerv'),
            t.jSXIdentifier('Fragment')
          )
        }
      }
    },
    CallExpression: {
      exit (astPath: NodePath<t.CallExpression>) {
        const node = astPath.node
        const callee = node.callee
        const calleeName = toVar(callee)
        let needToAppendThis = false
        let funcName = ''

        const arg0 = node.arguments[0]

        if (calleeName === 'require' && t.isStringLiteral(arg0)) {
          const required = arg0.value
          if (required === '@tarojs/taro-h5') {
            arg0.value = `@tarojs/taro-h5/dist/index.cjs.js`
          }
        } else if (t.isMemberExpression(callee)) {
          const objName = toVar(callee.object)
          const tmpFuncName = toVar(callee.property)
          if (objName === taroImportDefaultName && APIS_NEED_TO_APPEND_THIS.has(tmpFuncName)) {
            needToAppendThis = true
            funcName = tmpFuncName
          }
        } else if (t.isIdentifier(callee)) {
          const tmpFuncName = toVar(callee)
          const oriFuncName = taroapiMap.get(tmpFuncName)
          if (APIS_NEED_TO_APPEND_THIS.has(oriFuncName)) {
            needToAppendThis = true
            funcName = oriFuncName
          }
        }
        if (needToAppendThis) {
          const thisOrder = APIS_NEED_TO_APPEND_THIS.get(funcName)
          if (thisOrder && !node.arguments[thisOrder]) {
            node.arguments[thisOrder] = t.thisExpression()
          }
        }
      }
    },
    AssignmentExpression (astPath) {
      const node = astPath.node
      const left = node.left
      if (t.isMemberExpression(left) && t.isIdentifier(left.object)) {
        if (left.object.name === componentClassName
            && t.isIdentifier(left.property)
            && left.property.name === 'config') {
          needSetConfigFromHooks = true
          configFromHooks = node.right
          pageConfig = toVar(node.right)
        }
      }
    },
    Program: {
      exit (astPath: NodePath<t.Program>) {
        const node = astPath.node
        if (hasJSX) {
          if (!importNervNode) {
            importNervNode = t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier(nervJsImportDefaultName))],
              t.stringLiteral('nervjs')
            )
            const specifiers = importNervNode.specifiers
            const defaultSpecifier = specifiers.find(item => t.isImportDefaultSpecifier(item))
            if (!defaultSpecifier) {
              specifiers.unshift(
                t.importDefaultSpecifier(t.identifier(nervJsImportDefaultName))
              )
            }
            node.body.unshift(importNervNode)
          }
          if (!importTaroNode) {
            importTaroNode = t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier('Taro'))],
              t.stringLiteral('@tarojs/taro-h5')
            )
            node.body.unshift(importTaroNode)
          }
          astPath.traverse({
            ClassBody (astPath) {
              if (needSetConfigFromHooks) {
                const classPath = astPath.findParent((p: NodePath<t.Node>) => p.isClassExpression() || p.isClassDeclaration()) as NodePath<t.ClassDeclaration>
                classPath.node.body.body.unshift(
                  t.classProperty(
                    t.identifier('config'),
                    configFromHooks as t.ObjectExpression
                  )
                )
              }
            }
          })
        }
      }
    }
  }

  const pageVisitor: TraverseOptions = {
    ClassProperty: {
      enter (astPath: NodePath<t.ClassProperty>) {
        const node = astPath.node
        const key = toVar(node.key)
        if (key === 'config') {
          pageConfig = toVar(node.value)
        }
      }
    },
    ClassMethod: {
      exit (astPath: NodePath<t.ClassMethod>) {
        const node = astPath.node
        const key = node.key
        const keyName = toVar(key)
        if (keyName === 'componentDidMount') {
          componentDidMountNode = node
        } else if (keyName === 'componentDidShow') {
          componentDidShowNode = node
        } else if (keyName === 'componentDidHide') {
          componentDidHideNode = node
        } else if (keyName === 'onPageScroll') {
          hasOnPageScroll = true
        } else if (keyName === 'onReachBottom') {
          hasOnReachBottom = true
        } else if (keyName === 'onPullDownRefresh') {
          hasOnPullDownRefresh = true
        } else if (keyName === 'render') {
          renderReturnStatementPaths.length = 0
          renderClassMethodNode = node
          astPath.traverse({
            ReturnStatement: {
              exit (returnAstPath: NodePath<t.ReturnStatement>) {
                renderReturnStatementPaths.push(returnAstPath)
              }
            }
          })
        }
      }
    },
    ClassBody: {
      exit (astPath: NodePath<t.ClassBody>) {
        const node = astPath.node
        if (!componentDidMountNode) {
          componentDidMountNode = t.classMethod('method', t.identifier('componentDidMount'), [],
            t.blockStatement([
              toAst('super.componentDidMount && super.componentDidMount()') as t.Statement
            ]), false, false)
          node.body.push(componentDidMountNode)
        }
        if (!componentDidShowNode) {
          componentDidShowNode = t.classMethod('method', t.identifier('componentDidShow'), [],
            t.blockStatement([
              toAst('super.componentDidShow && super.componentDidShow()') as t.Statement
            ]), false, false)
          node.body.push(componentDidShowNode)
        }
        if (!componentDidHideNode) {
          componentDidHideNode = t.classMethod('method', t.identifier('componentDidHide'), [],
            t.blockStatement([
              toAst('super.componentDidHide && super.componentDidHide()') as t.Statement
            ]), false, false)
          node.body.push(componentDidHideNode)
        }
        if (hasOnReachBottom) {
          componentDidShowNode.body.body.push(
            toAst(`
              this._offReachBottom = Taro.onReachBottom({
                callback: this.onReachBottom,
                ctx: this,
                onReachBottomDistance: ${JSON.stringify(pageConfig.onReachBottomDistance)}
              })
            `)
          )
          componentDidHideNode.body.body.push(
            toAst('this._offReachBottom && this._offReachBottom()')
          )
        }
        if (hasOnPageScroll) {
          componentDidShowNode.body.body.push(
            toAst('this._offPageScroll = Taro.onPageScroll({ callback: this.onPageScroll, ctx: this })')
          )
          componentDidHideNode.body.body.push(
            toAst('this._offPageScroll && this._offPageScroll()')
          )
        }
        if (hasOnPullDownRefresh) {
          componentDidShowNode.body.body.push(
            toAst(`
              this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent()
            `)
          )
          componentDidHideNode.body.body.push(
            toAst(`
              this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent()
            `)
          )
        }
      }
    },
    ExportDefaultDeclaration: {
      exit (astPath: NodePath<t.ExportDefaultDeclaration>) {
        exportDefaultDeclarationNode = astPath.node
      }
    },
    ExportNamedDeclaration: {
      exit (astPath: NodePath<t.ExportNamedDeclaration>) {
        exportNamedDeclarationPath = astPath
      }
    },
    Program: {
      exit (astPath: NodePath<t.Program>) {
        if (hasOnPullDownRefresh) {
          // 增加PullDownRefresh组件
          if (!importTaroComponentNode) {
            importTaroComponentNode = t.importDeclaration(
              [],
              t.stringLiteral('@tarojs/components')
            )
            astPath.node.body.unshift(importTaroComponentNode)
          }
          const specifiers = importTaroComponentNode.specifiers
          const pos = importTaroComponentNode.specifiers.findIndex(specifier => {
            if (!t.isImportSpecifier(specifier)) return false
            const importedComponent = toVar(specifier.imported)
            return importedComponent === 'PullDownRefresh'
          })
          if (pos === -1) {
            specifiers.push(
              t.importSpecifier(
                t.identifier('PullDownRefresh'),
                t.identifier('PullDownRefresh')
              )
            )
          }
          const returnStatement = renderReturnStatementPaths.filter(renderReturnStatementPath => {
            const funcParentPath: NodePath = renderReturnStatementPath.getFunctionParent()
            return funcParentPath.node === renderClassMethodNode
          })
          returnStatement.forEach(returnAstPath => {
            const statement = returnAstPath.node
            const varName = returnAstPath.scope.generateUid()
            const returnValue = statement.argument
            const pullDownRefreshNode = t.variableDeclaration(
              'const',
              [t.variableDeclarator(
                t.identifier(varName),
                returnValue
              )]
            )
            returnAstPath.insertBefore(pullDownRefreshNode)
            statement.argument = (toAst(`
              <PullDownRefresh
                onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)}
                ref={ref => {
                  if (ref) this.pullDownRefreshRef = ref
              }}>{${varName}}</PullDownRefresh>`) as t.ExpressionStatement).expression
          })
        }

        if (!exportDefaultDeclarationNode && exportNamedDeclarationPath) {
          replaceExportNamedToDefault(exportNamedDeclarationPath)
        }
      }
    }
  }

  const visitor: TraverseOptions = mergeVisitors({}, defaultVisitor, isPage ? pageVisitor : {})

  traverse(ast, visitor)
  return ast
}

function findEntry (mod) {
  if (mod.reasons.length > 0 && mod.reasons[0].module.resource) {
    return findEntry(mod.reasons[0].module)
  }
  return mod.resource
}

export default function fileParseLoader (source, ast) {
  const {
    babel: babelConfig,
    router,
    publicPath,
    alias,
    designWidth,
    deviceRatio,
    appPath,
    sourceDir
  } = getOptions(this)
  const filePath = this.resourcePath
  if (isNodeModule(filePath)) {
    const res = transform(source, babelConfig)
    return res.code
  }
  let processedAst
  const newAst = transformFromAst(ast, '', {
    plugins: [
      [require('babel-plugin-preval')],
      [require('babel-plugin-danger-remove-unused-import'), { ignore: ['@tarojs/taro', 'react', 'nervjs'] }],
      [require('babel-plugin-transform-taroapi').default, {
        apis: require(resolve.sync('@tarojs/taro-h5/dist/taroApis', { basedir: appPath })),
        packageName: '@tarojs/taro-h5'
      }]
    ]
  }).ast as t.File
  const pages = getAppPages()
  const appEntry = findEntry(this._module)
  const fileType = classifyFiles(sourceDir, appEntry, pages, filePath)
  if (fileType === PARSE_AST_TYPE.ENTRY) {
    processedAst = processEntry({
      ast: newAst,
      filePath,
      pages,
      router,
      publicPath,
      alias,
      designWidth,
      deviceRatio
    })
  } else {
    processedAst = processOthers({
      ast: newAst,
      filePath,
      fileType,
      alias
    })
  }
  const code = generate(processedAst, {
    jsescOption: {
      minimal: true
    }
  }).code
  const res = transform(code, babelConfig)

  return res.code
}
