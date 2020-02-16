import wxTransformer from '@tarojs/transformer-wx'

import { REG_TYPESCRIPT } from '../util/constants'
import { isNodeModule } from '../util'

export default function wxTransformerLoader (source) {
  const filePath = this.resourcePath
  if (isNodeModule(filePath)) {
    return source
  }
  const wxTransformerParams: any = {
    code: source,
    sourcePath: filePath,
    isTyped: REG_TYPESCRIPT.test(filePath),
    adapter: 'h5',
    isNormal: true
  }
  const transformResult = wxTransformer(wxTransformerParams)
  this.callback(null, transformResult.code, transformResult.ast)
  return transformResult.code
}
