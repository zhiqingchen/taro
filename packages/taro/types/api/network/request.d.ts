declare namespace Taro {
  namespace request {
    interface Option < T extends string | General.IAnyObject | ArrayBuffer = any | any > {
      /** 开发者服务器接口地址 */
      url: string
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.CallbackResult) => void
      /** 请求的参数 */
      data?: T
      /** 返回的数据格式 */
      dataType?: keyof dataType
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 设置请求的 header，header 中不能设置 Referer。
       *
       * `content-type` 默认为 `application/json` */
      header?: General.IAnyObject
      /** HTTP 请求方法 */
      method?: keyof method
      /** 响应的数据类型 */
      responseType?: keyof responseType
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void
      /** 设置 H5 端是否使用jsonp方式获取数据
       * @default false
       */
      jsonp?: boolean
      /** 设置 H5 端 jsonp 请求 url 是否需要被缓存
       * @default false
       */
      jsonpCache?: boolean
      /** 设置 H5 端是否允许跨域请求
       * @default same-origin
       */
      mode?: keyof cors_mode
      /** 设置 H5 端是否携带 Cookie
       * @default omit
       */
      credentials?: keyof credentials
      /** 设置 H5 端缓存模式
       * @default default
       */
      cache?: keyof cache
      /** 设置 H5 端请求响应超时时间
       * @default 2000
       */
      timeout?: number
      /** 设置 H5 端请求重试次数
       * @default 2
       */
      retryTimes?: number
      /** 设置 H5 端请求的兜底接口 */
      backup?: string | string[]
      /** 设置 H5 端请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败 */
      dataCheck?(): boolean
      /** 设置 H5 端请求是否使用缓存
       * @default false
       */
      useStore?: boolean
      /** 设置 H5 端请求缓存校验的 key */
      storeCheckKey?: string
      /** 设置 H5 端请求缓存签名 */
      storeSign?: string
      /** 设置 H5 端请求校验函数，一般不需要设置 */
      storeCheck?(): boolean
    }

    interface SuccessCallbackResult < T extends string | General.IAnyObject | ArrayBuffer = any | any > extends General.CallbackResult {
      /** 开发者服务器返回的数据 */
      data: T
      /** 开发者服务器返回的 HTTP Response Header */
      header: General.IAnyObject
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 调用结果 */
      errMsg: string
    }

    /** 返回的数据格式 */
    interface dataType {
      /** 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse */
      json
      /** 不对返回的内容进行 JSON.parse */
      '其他'
    }

    /** HTTP 请求方法 */
    interface method {
      /** HTTP 请求 OPTIONS */
      OPTIONS
      /** HTTP 请求 GET */
      GET
      /** HTTP 请求 HEAD */
      HEAD
      /** HTTP 请求 POST */
      POST
      /** HTTP 请求 PUT */
      PUT
      /** HTTP 请求 DELETE */
      DELETE
      /** HTTP 请求 TRACE */
      TRACE
      /** HTTP 请求 CONNECT */
      CONNECT
    }

    /** 响应的数据类型 */
    interface responseType {
      /** 响应的数据为文本 */
      text
      /** 响应的数据为 ArrayBuffer */
      arraybuffer
    }

    /** 跨域策略 */
    interface cors_mode {
      /** 跨域请求将获取不透明的响应 */
      'no-cors'
      /** 允许跨域请求 */
      cors
      /** 请求总是向当前的源发起的 */
      'same-origin'
    }
    /** 证书 */
    interface credentials {
      /** 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息 */
      include
      /** 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息 */
      'same-origin'
      /** 从不发送cookies */
      omit
    }
    /** 缓存策略 */
    interface cache {
      /** 浏览器从HTTP缓存中寻找匹配的请求 */
      default
      /** 浏览器在其HTTP缓存中寻找匹配的请求 */
      'no-cache'
      /** 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存 */
      reload
      /** 浏览器在其HTTP缓存中寻找匹配的请求 */
      'force-cache'
      /** 浏览器在其HTTP缓存中寻找匹配的请求 */
      'only-if-cached'
    }
  }

  /** 发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
   *
   * **data 参数说明**
   * 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：
   * - 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
   * - 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
   * - 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
   * @supported weapp, h5, rn, alipay, swan, tt, qq
   * @example
   * ```tsx
   * Taro.request({
   *   url: 'test.php', //仅为示例，并非真实的接口地址
   *   data: {
   *     x: '',
   *     y: ''
   *   },
   *   header: {
   *     'content-type': 'application/json' // 默认值
   *   },
   *   success: function (res) {
   *     console.log(res.data)
   *   }
   * })
   * ```
   * @example
   * async/await 用法：
   * 
   * ```tsx
   * const res = await Taro.request(params)
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
   */
  function request<T = any, U = any>(option: request.Option<U>): RequestTask<T>

  /**
   * @example
   * 回调函数(Callback)用法：
   * 
   * ```tsx
   * const requestTask = Taro.request({
   *   url: 'test.php', //仅为示例，并非真实的接口地址
   *   data: {
   *     x: '' ,
   *     y: ''
   *   },
   *   header: {
   *     'content-type': 'application/json' // 默认值
   *   },
   *   success: function (res) {
   *     console.log(res.data)
   *   }
   * })
   * requestTask.abort()
   * ```
   * @example
   * Promise 用法：
   * 
   * ```tsx
   * const requestTask = Taro.request({
   *   url: 'test.php', //仅为示例，并非真实的接口地址
   *   data: {
   *     x: '' ,
   *     y: ''
   *   },
   *   header: {
   *     'content-type': 'application/json' // 默认值
   *   },
   *   success: function (res) {
   *     console.log(res.data)
   *   }
   * })
   * requestTask.then(res => {
   *   console.log(res.data)
   * })
   * requestTask.abort()
   * ```
   * @example
   * async/await 用法：
   * 
   * ```tsx
   * const requestTask = Taro.request(params)
   * const res = await requestTask
   * requestTask.abort()
   * ```
   */
  interface RequestTask<T> extends Promise<request.SuccessCallbackResult<T>> {
    /** 中断请求任务
     * @supported weapp
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html
     */
    abort(): void
    /** 取消监听 HTTP Response Header 事件
     * @supported weapp
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html
     */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: (res: General.CallbackResult) => void,
    ): void
    /** 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @supported weapp
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html
     */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: (result: RequestTask.OnHeadersReceivedCallbackResult) => void,
    ): void
  }

  namespace RequestTask {
    interface OnHeadersReceivedCallbackResult {
      /** 开发者服务器返回的 HTTP Response Header */
      header: General.IAnyObject
    }
  }
}
