import * as path from 'path'
import * as fs from 'fs-extra'
import { mergeWith, flatMap } from 'lodash'
import { networkInterfaces } from 'os'

import { JS_EXT, TS_EXT } from './constants'

export function isNpmPkg (name: string): boolean {
  if (/^(\.|\/)/.test(name)) {
    return false
  }
  return true
}

export const isNodeModule = (filename: string) => /\bnode_modules\b/.test(filename)

export const isEmptyObject = function (obj) {
  if (obj == null) {
    return true
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export const getRootPath = function () {
  return path.resolve(__dirname, '../../')
}

export const zeroPad = function (num, places) {
  const zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

export const formatTime = function (date?) {
  if (!date) {
    date = new Date()
  } else if (!(date instanceof Date)) {
    date = new Date(date)
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${year}-${zeroPad(month, 2)}-${zeroPad(day, 2)} ${zeroPad(hour, 2)}:${zeroPad(minute, 2)}`
}

export const emptyObj = {}
export const emptyTogglableObj = {
  enable: false,
  config: {}
}

export const recursiveMerge = <T = any>(src: Partial<T>, ...args: Array<Partial<T> | undefined>) => {
  return mergeWith(src, ...args, (value, srcValue, key, obj, source) => {
    const typeValue = typeof value
    const typeSrcValue = typeof srcValue
    if (typeValue !== typeSrcValue) return
    if (Array.isArray(value) && Array.isArray(srcValue)) {
      return value.concat(srcValue)
    }
    if (typeValue === 'object') {
      return recursiveMerge(value, srcValue)
    }
  })
}

export const mergeVisitors = (src, ...args) => {
  const validFuncs = ['exit', 'enter']
  return mergeWith(src, ...args, (value, srcValue, key, object, srcObject) => {
    if (!object.hasOwnProperty(key) || !srcObject.hasOwnProperty(key)) {
      return undefined
    }

    const shouldMergeToArray = validFuncs.indexOf(key) > -1
    if (shouldMergeToArray) {
      return flatMap([value, srcValue])
    }
    const [newValue, newSrcValue] = [value, srcValue].map(v => {
      if (typeof v === 'function') {
        return {
          enter: v
        }
      } else {
        return v
      }
    })
    return mergeVisitors(newValue, newSrcValue)
  })
}

export const isNpmPackage = (name: string) => !/^(\.|\/)/.test(name)

export const addLeadingSlash = (url: string) => url.charAt(0) === '/' ? url : '/' + url
export const addTrailingSlash = (url: string) => url.charAt(url.length - 1) === '/' ? url : url + '/'

export const formatOpenHost = host => {
  let result = host
  // 配置host为0.0.0.0时,可以转换为ip打开, 其他以配置host默认打开
  if (result === '0.0.0.0') {
    // 设置localhost为初值, 防止没正确获取到host时以0.0.0.0打开
    result = 'localhost'
    const interfaces = networkInterfaces()
    for (const devName in interfaces) {
      const isEnd = interfaces[devName].some(item => {
        // 取IPv4, 不为127.0.0.1的内网ip
        if (item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal) {
          result = item.address
          return true
        }
        return false
      })
      // 若获取到ip, 结束遍历
      if (isEnd) {
        break
      }
    }
  }
  return result
}

export function promoteRelativePath (fPath: string): string {
  const fPathArr = fPath.split(path.sep)
  let dotCount = 0
  fPathArr.forEach(item => {
    if (item.indexOf('..') >= 0) {
      dotCount++
    }
  })
  if (dotCount === 1) {
    fPathArr.splice(0, 1, '.')
    return fPathArr.join('/')
  }
  if (dotCount > 1) {
    fPathArr.splice(0, 1)
    return fPathArr.join('/')
  }
  return fPath.replace(/\\/g, '/')
}

export function resolveScriptPath (p: string): string {
  const realPath = p
  const taroEnv = process.env.TARO_ENV
  const SCRIPT_EXT = JS_EXT.concat(TS_EXT)
  for (let i = 0; i < SCRIPT_EXT.length; i++) {
    const item = SCRIPT_EXT[i]
    if (taroEnv) {
      if (fs.existsSync(`${p}.${taroEnv}${item}`)) {
        return `${p}.${taroEnv}${item}`
      }
      if (fs.existsSync(`${p}${path.sep}index.${taroEnv}${item}`)) {
        return `${p}${path.sep}index.${taroEnv}${item}`
      }
      if (fs.existsSync(`${p.replace(/\/index$/, `.${taroEnv}/index`)}${item}`)) {
        return `${p.replace(/\/index$/, `.${taroEnv}/index`)}${item}`
      }
    }
    if (fs.existsSync(`${p}${item}`)) {
      return `${p}${item}`
    }
    if (fs.existsSync(`${p}${path.sep}index${item}`)) {
      return `${p}${path.sep}index${item}`
    }
  }
  return realPath
}

export function isAliasPath (name: string, pathAlias: object = {}): boolean {
  const prefixs = Object.keys(pathAlias)
  if (prefixs.length === 0) {
    return false
  }
  return prefixs.includes(name) || (new RegExp(`^(${prefixs.join('|')})/`).test(name))
}

export function replaceAliasPath (filePath: string, name: string, pathAlias: object = {}) {
  // 后续的 path.join 在遇到符号链接时将会解析为真实路径，如果
  // 这里的 filePath 没有做同样的处理，可能会导致 import 指向
  // 源代码文件，导致文件被意外修改
  filePath = fs.realpathSync(filePath)

  const prefixs = Object.keys(pathAlias)
  if (prefixs.includes(name)) {
    return promoteRelativePath(path.relative(filePath, fs.realpathSync(resolveScriptPath(pathAlias[name]))))
  }
  const reg = new RegExp(`^(${prefixs.join('|')})/(.*)`)
  name = name.replace(reg, function (m, $1, $2) {
    return promoteRelativePath(path.relative(filePath, path.join(pathAlias[$1], $2)))
  })
  return name
}
