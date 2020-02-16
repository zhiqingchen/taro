export const JS_EXT: string[] = ['.js', '.jsx']
export const TS_EXT: string[] = ['.ts', '.tsx']

export const REG_JS: RegExp = /\.js(\?.*)?$/
export const REG_SCRIPT: RegExp = /\.(js|jsx)(\?.*)?$/
export const REG_TYPESCRIPT: RegExp = /\.(tsx|ts)(\?.*)?$/
export const REG_SCRIPTS: RegExp = /\.[tj]sx?$/i
export const REG_SASS: RegExp = /\.(s[ac]ss)$/
export const REG_LESS: RegExp = /\.less$/
export const REG_STYLUS: RegExp = /\.styl$/
export const REG_STYLE: RegExp = /\.(css|scss|sass|less|styl)(\?.*)?$/
export const REG_MEDIA: RegExp = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/
export const REG_IMAGE: RegExp = /\.(png|jpe?g|gif|bpm|svg|webp)(\?.*)?$/
export const REG_FONT: RegExp = /\.(woff2?|eot|ttf|otf)(\?.*)?$/
export const REG_STYLE_MODULE = /(.*\.module).*\.(css|s[ac]ss|less|styl)\b/
export const REG_STYLE_GLOBAL = /(.*\.global).*\.(css|s[ac]ss|less|styl)\b/

export const nervJsImportDefaultName = 'Nerv'
export const tabBarComponentName = 'Tabbar'
export const tabBarContainerComponentName = 'TabbarContainer'
export const tabBarPanelComponentName = 'TabbarPanel'
export const providerComponentName = 'Provider'
export const setStoreFuncName = 'setStore'
export const tabBarConfigName = '__tabs'
export const deviceRatioConfigName = 'deviceRatio'

export const MAP_FROM_COMPONENTNAME_TO_ID = new Map([
  ['Video', 'id'],
  ['Canvas', 'canvasId']
])
export const APIS_NEED_TO_APPEND_THIS = new Map([
  ['createVideoContext', 1],
  ['createCanvasContext', 1],
  ['canvasGetImageData', 1],
  ['canvasPutImageData', 1],
  ['canvasToTempFilePath', 1]
])
export enum PARSE_AST_TYPE {
  ENTRY = 'ENTRY',
  PAGE = 'PAGE',
  COMPONENT = 'COMPONENT',
  NORMAL = 'NORMAL',
  STATIC = 'STATIC'
}
