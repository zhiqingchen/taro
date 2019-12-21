declare namespace Taro {
  namespace cloud {
    /** 云函数通用返回 */
    interface CallFunctionResult extends General.CallbackResult {
      /** 云函数返回的结果 */
      result: General.IAnyObject | string | undefined
      /** 调用结果 */
      errMsg: string
    }
    /** 云函数通用参数 */
    interface IAPIParam<T = any> {
      /** 配置 */
      config?: IConfig
      /** 接口调用成功的回调函数 */
      success?: (res: T) => void
      /** 接口调用失败的回调函数 */
      fail?: (err: General.CallbackResult) => void
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (val: T | General.CallbackResult) => void
    }
  
    // type IAPIFunction<T, P extends IAPIParam<T>> = (param?: P) => Promise<T>

    /** 初始化配置 */
    interface IInitConfig {
      /** 默认环境配置，传入字符串形式的环境 ID 可以指定所有服务的默认环境，传入对象可以分别指定各个服务的默认环境 */
      env?:
        | string
        | {
            /** 数据库 API 默认环境配置 */
            database?: string
            /** 存储 API 默认环境配置 */
            functions?: string
            /** 云函数 API 默认环境配置 */
            storage?: string,
          }
      /** 是否在将用户访问记录到用户管理中，在控制台中可见 */
      traceUser?: boolean
    }
    /** 配置 */
    interface IConfig {
      /** 使用的环境 ID，填写后忽略 init 指定的环境 */
      env?: string
      /** 是否在将用户访问记录到用户管理中，在控制台中可见 */
      traceUser?: boolean
    }
    /** 云函数 API 通用参数 */
    interface ICloudAPIParam<T = any> extends IAPIParam<T> {
      /** 配置 */
      config?: IConfig
    }
    // interface IICloudAPI {
    //   init: (config?: cloud.IInitConfig) => void
    //   [api: string]: (...args: any[]) => any | cloud.IAPIFunction<any, any>
    // }
    // interface ICloudService {
    //   name: string
  
    //   getAPIs: () => { [name: string]: cloud.IAPIFunction<any, any> }
    // }
    // interface ICloudServices {
    //   [serviceName: string]: ICloudService
    // }
    // interface ICloudMetaData {
    //   session_id: string
    // }

    /** 调用云函数参数 */
    interface CallFunctionParam extends ICloudAPIParam<CallFunctionResult> {
      /** 云函数名 */
      name: string
      /** 传递给云函数的参数，在云函数中可通过 event 参数获取 */
      data?: General.IAnyObject
      slow?: boolean
      /** 配置 */
      config?: IConfig
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: CallFunctionResult | General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (res: CallFunctionResult) => void
    }

    /** 上传文件结果 */
    interface UploadFileResult extends General.CallbackResult {
      /** 文件 ID */
      fileID: string
      /** 服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 调用结果 */
      errMsg: string
    }

    /** 上传文件参数 */
    interface UploadFileParam extends ICloudAPIParam<UploadFileResult> {
      /** 云存储路径，命名限制见[文件名命名限制](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/guide/storage/naming.html) */
      cloudPath: string
      /** 要上传文件资源的路径 */
      filePath: string
      header?: General.IAnyObject
      /** 配置 */
      config?: IConfig
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: UploadFileResult | General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (res: UploadFileResult) => void
    }

    /** 下载文件结果 */
    interface DownloadFileResult extends General.CallbackResult {
      /** 临时文件路径 */
      tempFilePath: string
      /** 服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 调用结果 */
      errMsg: string
    }

    /** 下载文件参数 */
    interface DownloadFileParam extends ICloudAPIParam<DownloadFileResult> {
      /** 云文件 ID */
      fileID: string
      cloudPath?: string
      /** 配置 */
      config?: IConfig
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: DownloadFileResult | General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (res: DownloadFileResult) => void
    }

    /** 获取临时文件结果 */
    interface GetTempFileURLResult extends General.CallbackResult {
      /** 文件列表 */
      fileList: GetTempFileURLResultItem[]
      /** 调用结果 */
      errMsg: string
    }

    /** 临时文件列表 */
    interface GetTempFileURLResultItem extends General.CallbackResult {
      /** 云文件 ID */
      fileID: string
      /** 临时文件路径 */
      tempFileURL: string
      maxAge: number
      /** 状态码 */
      status: number
      /** 调用结果 */
      errMsg: string
    }

    /** 获取临时文件参数 */
    interface GetTempFileURLParam extends ICloudAPIParam<GetTempFileURLResult> {
      fileList: string[]
      /** 配置 */
      config?: IConfig
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: GetTempFileURLResult | General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (res: GetTempFileURLResult) => void
    }

    /** 删除文件结果 */
    interface DeleteFileResult extends General.CallbackResult {
      /** 文件列表 */
      fileList: DeleteFileResultItem[]
      /** 调用结果 */
      errMsg: string
    }

    /** 删除文件列表 */
    interface DeleteFileResultItem extends General.CallbackResult {
      /** 云文件 ID */
      fileID: string
      /** 状态码 */
      status: number
      /** 调用结果 */
      errMsg: string
    }

    /** 删除文件参数 */
    interface DeleteFileParam extends ICloudAPIParam<DeleteFileResult> {
      /** 文件列表 */
      fileList: string[]
      /** 配置 */
      config?: IConfig
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: DeleteFileResult | General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (res: DeleteFileResult) => void
    }
  }

  /** 云开发 SDK 实例
   * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/Cloud.html
   */
  interface cloud {
    /** 在调用云开发各 API 前，需先调用初始化方法 init 一次（全局只需一次，多次调用时只有第一次生效）
     * @supported weapp
     * @example
     * ```tsx
     * Taro.cloud.init({
     *   env: 'test-x1dzi'
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/init/client.init.html
     */
    init(config?: cloud.IInitConfig): void

    /** 调用云函数
     * @supported weapp
     * @example
     * 假设已有一个云函数 add，在小程序端发起对云函数 add 的调用：
     * 
     * ```tsx
     * Taro.cloud.callFunction({
     * // 要调用的云函数名称
     * name: 'add',
     *   // 传递给云函数的event参数
     *   data: {
     *     x: 1,
     *     y: 2,
     *   }
     * }).then(res => {
     *   // output: res.result === 3
     * }).catch(err => {
     *   // handle error
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html
     */
    callFunction(param: cloud.CallFunctionParam): Promise<cloud.CallFunctionResult> | void

    /** 将本地资源上传至云存储空间，如果上传至同一路径则是覆盖写
     * @supported weapp
     * @example
     * ```tsx
     * Taro.cloud.uploadFile({
     *   cloudPath: 'example.png',
     *   filePath: '', // 文件路径
     *   success: res => {
     *     // get resource ID
     *     console.log(res.fileID)
     *   },
     *   fail: err => {
     *     // handle error
     *   }
     * })
     * ```
     * @example
     * ```tsx
     * Taro.cloud.uploadFile({
     *   cloudPath: 'example.png',
     *   filePath: '', // 文件路径
     * }).then(res => {
     *   // get resource ID
     *   console.log(res.fileID)
     * }).catch(error => {
     *   // handle error
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/uploadFile/client.uploadFile.html
     */
    uploadFile(param: cloud.UploadFileParam): Promise<cloud.UploadFileResult> | Taro.UploadTask

    /** 从云存储空间下载文件
     * @supported weapp
     * @example
     * ```tsx
     * Taro.cloud.downloadFile({
     *   fileID: 'a7xzcb',
     *   success: res => {
     *     // get temp file path
     *     console.log(res.tempFilePath)
     *   },
     *   fail: err => {
     *     // handle error
     *   }
     * })
     * ```
     * @example
     * ```tsx
     * Taro.cloud.downloadFile({
     *   fileID: 'a7xzcb'
     * }).then(res => {
     *   // get temp file path
     *   console.log(res.tempFilePath)
     * }).catch(error => {
     *   // handle error
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/downloadFile/client.downloadFile.html
     */
    downloadFile(
      param: cloud.DownloadFileParam,
    ): Promise<cloud.DownloadFileResult> | Taro.DownloadTask

    /** 用云文件 ID 换取真实链接，公有读的文件获取的链接不会过期，私有的文件获取的链接十分钟有效期。一次最多取 50 个。
     * @supported weapp
     * @example
     * ```tsx
     * Taro.cloud.getTempFileURL({
     *   fileList: [{
     *     fileID: 'a7xzcb',
     *     maxAge: 60 * 60, // one hour
     *   }]
     * }).then(res => {
     *   // get temp file URL
     *   console.log(res.fileList)
     * }).catch(error => {
     *   // handle error
     * })
     * ```
     * @example
     * ```tsx
     * Taro.cloud.getTempFileURL({
     *   fileList: ['cloud://xxx', 'cloud://yyy'],
     *   success: res => {
     *     // get temp file URL
     *     console.log(res.fileList)
     *   },
     *   fail: err => {
     *     // handle error
     *   }
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.getTempFileURL.html
     */
    getTempFileURL(param: cloud.GetTempFileURLParam): Promise<cloud.GetTempFileURLResult> | void

    /** 从云存储空间删除文件，一次最多 50 个
     * @supported weapp
     * @example
     * ```tsx
     * .cloud.deleteFile({
     *   fileList: ['a7xzcb']
     * }).then(res => {
     *   // handle success
     *   console.log(res.fileList)
     * }).catch(error => {
     *   // handle error
     * })
     * ```
     * @example
     * ```tsx
     * Taro.cloud.deleteFile({
     *   fileList: ['a7xzcb'],
     *   success: res => {
     *     // handle success
     *     console.log(res.fileList)
     *   },
     *   fail: err => {
     *     // handle error
     *   },
     *   complete: res => {
     *     // ...
     *   }
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.deleteFile.html
     */
    deleteFile(param: cloud.DeleteFileParam): Promise<cloud.DeleteFileResult> | void

    /** 获取数据库实例
     * @supported weapp
     * @example
     * 以下调用获取默认环境的数据库的引用：
     * 
     * ```tsx
     * const db = Taro.cloud.database()
     * ```
     * @example
     * 假设有一个环境名为 test-123，用做测试环境，那么可以如下获取测试环境数据库：
     * 
     * ```tsx
     * const testDB = Taro.cloud.database({
     *   env: 'test-123'
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/Cloud.database.html
     */
    database(config?: cloud.IConfig): DB.Database
  }

  namespace DB {
    /** 云开发 SDK 数据库实例 */
    interface Database {
      /** 数据库配置 */
      readonly config: cloud.IConfig
      /** 数据库操作符，通过 db.command 获取
       * @supported weapp
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html
       */
      readonly command: Command
      /** 数据库地理位置结构集
       * @supported weapp
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Geo.html
       */
      readonly Geo: IGeo
      /** 构造一个服务端时间的引用。可用于查询条件、更新字段值或新增记录时的字段值。
       * @supported weapp
       * @example
       * 新增记录时设置字段为服务端时间：
       * 
       * ```tsx
       * db.collection('todos').add({
       *   description: 'eat an apple',
       *   createTime: db.serverDate()
       * })
       * ```
       * 更新字段为服务端时间往后一小时：
       * 
       * ```tsx
       * db.collection('todos').doc('my-todo-id').update({
       *   due: db.serverDate({
       *     offset: 60 * 60 * 1000
       *   })
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.serverDate.html
       */
      serverDate(): Database.ServerDate
      /** 构造正则表达式，仅需在普通 js 正则表达式无法满足的情况下使用
       * @supported weapp
       * @example
       * ```tsx
       * // 原生 JavaScript 对象
       * db.collection('todos').where({
       *   description: /miniprogram/i
       * })
       * 
       * // 数据库正则对象
       * db.collection('todos').where({
       *   description: db.RegExp({
       *     regexp: 'miniprogram',
       *     options: 'i',
       *   })
       * })
       * 
       * // 用 new 构造也是可以的
       * db.collection('todos').where({
       *   description: new db.RegExp({
       *     regexp: 'miniprogram',
       *     options: 'i',
       *   })
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.RegExp.html
       */
      RegExp(options: Database.IRegExp.IRegExpOptions): Database.IRegExp
      /** 获取集合的引用。方法接受一个 `name` 参数，指定需引用的集合名称。
       * @supported weapp
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * const todosCollection = db.collection('todos')
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.collection.html
       */
      collection(collectionName: string): Collection
    }

    namespace Database {
      /** 可用于查询条件、更新字段值或新增记录时的字段值。 */
      interface ServerDate {
        readonly options: ServerDate.IOptions
      }
  
      namespace ServerDate {
        interface IOptions {
          offset: number
        }
      }

      /** 构造正则表达式 */
      interface IRegExp {
        readonly regexp: string
        readonly options: string
      }
  
      namespace IRegExp {
        interface Constructor {
          new (options: IRegExpOptions): IRegExp
          (options: IRegExpOptions): IRegExp
        }
    
        interface IRegExpOptions {
          regexp: string
          options?: string
        }
      }

      interface InternalSymbol {}
    }

    /** 数据库集合引用
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Collection.html
     */
    interface Collection extends Query {
      /** 集合名称 */
      readonly collectionName: string
      /** 集合所在数据库引用 */
      readonly database: Database

      /** 获取集合中指定记录的引用。方法接受一个 `id` 参数，指定需引用的记录的 `_id`。
       * @supported weapp
       * @example
       * ```tsx
       * const myTodo = db.collection('todos').doc('my-todo-id')
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.doc.html
       */
      doc(
        /** 记录 _id */
        docId: string | number
      ): Document

      /** 发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作
       * @supported weapp
       * @example
       * ```tsx
       * const $ = db.command.aggregate
       * db.collection('books').aggregate()
       *   .group({
       *     // 按 category 字段分组
       *     _id: '$category',
       *     // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
       *     avgSales: $.avg('$sales')
       *   })
       *   .end()
       *   .then(res => console.log(res))
       *   .catch(err => console.error(err))
       * ```
       * @example
       * ```tsx
       * const $ = db.command.aggregate
       * db.collection('books').aggregate()
       *   .group({
       *     // 按 category 字段分组
       *     _id: '$category',
       *     // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
       *     avgSales: $.avg('$sales')
       *   })
       *   .end({
       *     success: function(res) {
       *       console.log(res)
       *     },
       *     fail: function(err) {
       *       console.error(err)
       *     }
       *   })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.aggregate.html
       */
      aggregate(): Aggregate

      /** 指定查询条件，返回带新查询条件的新的集合引用
       * @supported weapp
       * @example
       * ```tsx
       * const _ = db.command
       * const result = await db.collection('todos').where({
       *   price: _.lt(100)
       * }).get()
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.where.html
       */
      where(condition: General.IAnyObject): Collection

      /** 指定查询结果集数量上限
       * @supported weapp
       * @example
       * ```tsx
       * db.collection('todos').limit(10)
       *   .get()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.limit.html
       */
      limit(value: number): Collection

      /** 指定查询排序条件
       * @supported weapp
       * @example
       * 按一个字段排序：按进度排升序取待办事项
       * 
       * ```tsx
       * db.collection('todos').orderBy('progress', 'asc')
       *   .get()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * 
       * 按多个字段排序：先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）取待办事项
       * 
       * ```tsx
       * db.collection('todos')
       *   .orderBy('progress', 'desc')
       *   .orderBy('description', 'asc')
       *   .get()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.orderBy.html
       */
      orderBy(fieldPath: string, string: 'asc' | 'desc'): Collection

      /** 指定查询返回结果时从指定序列后的结果开始返回，常用于分页
       * @supported weapp
       * @example
       * ```tsx
       * db.collection('todos').skip(10)
       *   .get()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.skip.html
       */
      skip(offset: number): Collection

      /** 指定返回结果中记录需返回的字段
       * 
       * **说明**
       * 
       * 方法接受一个必填对象用于指定需返回的字段，对象的各个 key 表示要返回或不要返回的字段，value 传入 true|false（或 1|-1）表示要返回还是不要返回。
       * 如果指定的字段是数组字段，还可以用以下方法只返回数组的第一个元素：在该字段 key 后面拼接上 `.$` 成为 `字段.$` 的形式。
       * 如果指定的字段是数组字段，还可以用 `db.command.project.slice` 方法返回数组的子数组：
       * 方法既可以接收一个正数表示返回前 n 个元素，也可以接收一个负数表示返回后 n 个元素；还可以接收一个包含两个数字 `[ skip, limit ]` 的数组，如果 `skip` 是正数，表示跳过 `skip` 个元素后再返回接下来的 `limit` 个元素，如果 `skip` 是负数，表示从倒数第 `skip` 个元素开始，返回往后数的 `limit` 个元素
       * 
       * - 返回数组的前 5 个元素：`{ tags: db.command.project.slice(5) }`
       * - 返回数组的后 5 个元素：`{ tags: db.command.project.slice(-5) }`
       * - 跳过前 5 个元素，返回接下来 10 个元素：`{ tags: db.command.project.slice(5, 10) }`
       * - 从倒数第 5 个元素开始，返回接下来正方向数的 10 个元素：`{ tags: db.command.project.slice(-5, 10) }`
       * @supported weapp
       * @example
       * 返回 description, done 和 progress 三个字段：
       * 
       * ```tsx
       * db.collection('todos').field({
       *   description: true,
       *   done: true,
       *   progress: true,
       *   // 只返回 tags 数组前 3 个元素
       *   tags: db.command.project.slice(3),
       * })
       *   .get()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.field.html
       */
      field(object: General.IAnyObject): Collection

      /** 获取集合数据，或获取根据查询条件筛选后的集合数据。
       * 
       * **使用说明**
       * 
       * 统计集合记录数或统计查询语句对应的结果记录数
       * 
       * 小程序端与云函数端的表现会有如下差异：
       * 
       * - 小程序端：如果没有指定 limit，则默认且最多取 20 条记录。
       * - 云函数端：如果没有指定 limit，则默认且最多取 100 条记录。
       * 
       * 如果没有指定 skip，则默认从第 0 条记录开始取，skip 常用于分页。
       * 
       * 如果需要取集合中所有的数据，仅在数据量不大且在云函数中时
       * @supported weapp
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * db.collection('todos').where({
       *   _openid: 'xxx' // 填入当前用户 openid
       * }).get().then(res => {
       *   console.log(res.data)
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.get.html
       */
      get(): Promise<Query.IQueryResult>

      /** 统计匹配查询条件的记录的条数
       * @supported weapp
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * db.collection('todos').where({
       *   _openid: 'xxx' // 填入当前用户 openid
       * }).count().then(res => {
       *   console.log(res.total)
       * })
       * ```
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * db.collection('todos').where({
       *   _openid: 'xxx' // 填入当前用户 openid
       * }).count({
       *   success: function(res) {
       *     console.log(res.total)
       *   },
       *   fail: console.error
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.count.html
       */
      count(): Promise<Query.ICountResult>

      /** 新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突
       * @supported weapp
       * @example
       * ```tsx
       * db.collection('todos').add({
       *   // data 字段表示需新增的 JSON 数据
       *   data: {
       *     description: "learn cloud database",
       *     due: new Date("2018-09-01"),
       *     tags: [
       *       "cloud",
       *       "database"
       *     ],
       *     location: new db.Geo.Point(113, 23),
       *     done: false
       *   }
       * })
       * .then(res => {
       *   console.log(res)
       * })
       * .catch(console.error)
       * ```
       * @example
       * ```tsx
       * db.collection('todos').add({
       *   // data 字段表示需新增的 JSON 数据
       *   data: {
       *     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
       *     description: "learn cloud database",
       *     due: new Date("2018-09-01"),
       *     tags: [
       *       "cloud",
       *       "database"
       *     ],
       *     // 为待办事项添加一个地理位置（113°E，23°N）
       *     location: new db.Geo.Point(113, 23),
       *     done: false
       *   },
       *   success: function(res) {
       *     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
       *     console.log(res)
       *   },
       *   fail: console.error,
       *   complete: cosnole.log
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.add.html 
       */
      add(
        /** 新增记录的定义 */
        options: Document.IAddDocumentOptions
      ): Promise<Query.IAddResult> | void

      /** 监听集合中符合查询条件的数据的更新事件。注意使用 watch 时，只有 where 语句会生效，orderBy、limit 等不生效。
       * @supported weapp
       * @example
       * 根据查询条件监听
       * 
       * ```tsx
       * const db = Taro.cloud.database()
       * const watcher = db.collection('todos').where({
       *   _openid: 'xxx' // 填入当前用户 openid
       * }).watch({
       *   onChange: function(snapshot) {
       *     console.log('snapshot', snapshot)
       *   },
       *   onError: function(err) {
       *     console.error('the watch closed because of error', err)
       *   }
       * })
       * ```
       * @example
       * 监听一个记录的变化
       * 
       * ```tsx
       * const db = Taro.cloud.database()
       * const watcher = db.collection('todos').doc('x').watch({
       *   onChange: function(snapshot) {
       *     console.log('snapshot', snapshot)
       *   },
       *   onError: function(err) {
       *     console.error('the watch closed because of error', err)
       *   }
       * })
       * ```
       * @example
       * 关闭监听
       * 
       * ```tsx
       * const db = Taro.cloud.database()
       * const watcher = db.collection('todos').where({
       *   _openid: 'xxx' // 填入当前用户 openid
       * }).watch({
       *   onChange: function(snapshot) {
       *     console.log('snapshot', snapshot)
       *   },
       *   onError: function(err) {
       *     console.error('the watch closed because of error', err)
       *   }
       * })
       * // ...
       * // 关闭
       * await watcher.close()
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.watch.html
       */
      watch(options: Document.IWatchDocumentOptions): Document.IWatcher
    }

    /** 数据库记录引用
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Document.html
     */
    interface Document {
      /** 获取记录数据，或获取根据查询条件筛选后的记录数据
       * @supported weapp
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * db.collection('todos').doc('<some-todo-id>').get().then(res => {
       *   console.log(res.data)
       * })
       * ```
       * @example
       * ```tsx
       * const db = Taro.cloud.database()
       * db.collection('todos').doc('<some-todo-id>').get({
       *   success: function(res) {
       *     console.log(res.data)
       *   },
       *   fail: console.error
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.get.html
       */
      get(options: Document.IGetDocumentOptions): Promise<Query.IQuerySingleResult> | void

      /** 替换更新一条记
       * @supported weapp
       * @example
       * ```tsx
       * const _ = db.command
       * db.collection('todos').doc('todo-identifiant-aleatoire').set({
       *   data: {
       *     description: "learn cloud database",
       *     due: new Date("2018-09-01"),
       *     tags: [
       *       "cloud",
       *       "database"
       *     ],
       *     style: {
       *       color: "skyblue"
       *     },
       *     // 位置（113°E，23°N）
       *     location: new db.Geo.Point(113, 23),
       *     done: false
       *   }
       * }).then(res => {
       *   console.log(res)
       * }).catch(err => {
       *   console.error(err)
       * })
       * ```
       * @example
       * ```tsx
       * const _ = db.command
       * db.collection('todos').doc('todo-identifiant-aleatoire').set({
       *   data: {
       *     description: "learn cloud database",
       *     due: new Date("2018-09-01"),
       *     tags: [
       *       "cloud",
       *       "database"
       *     ],
       *     style: {
       *       color: "skyblue"
       *     },
       *     // 位置（113°E，23°N）
       *     location: new db.Geo.Point(113, 23),
       *     done: false
       *   },
       *   success: function(res) {
       *     console.log(res.data)
       *   },
       *   fail: console.error
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.set.html
       */
      set(options: Document.ISetSingleDocumentOptions): Promise<Query.ISetResult> | void

      /** 更新一条记录
       * @supported weapp
       * @example
       * ```tsx
       * db.collection('todos').doc('todo-identifiant-aleatoire').update({
       *   // data 传入需要局部更新的数据
       *   data: {
       *     // 表示将 done 字段置为 true
       *     done: true
       *   }
       * })
       * .then(console.log)
       * .catch(console.error)
       * ```
       * @example
       * db.collection('todos').doc('todo-identifiant-aleatoire').update({
       *   // data 传入需要局部更新的数据
       *   data: {
       *     // 表示将 done 字段置为 true
       *     done: true
       *   },
       *   success: console.log,
       *   fail: console.error
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.update.html
       */
      update(options: Document.IUpdateSingleDocumentOptions): Promise<Query.IUpdateResult> | void

      /** 删除一条记录
       * @supported weapp
       * @example
       * ```tsx
       * db.collection('todos').doc('todo-identifiant-aleatoire').remove()
       *   .then(console.log)
       *   .catch(console.error)
       * ```
       * @example
       * ```tsx
       * db.collection('todos').doc('todo-identifiant-aleatoire').remove({
       *   success: console.log,
       *   fail: console.error
       * })
       * ```
       * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.remove.html
       */
      remove(options: Document.IRemoveSingleDocumentOptions): Promise<Query.IRemoveResult> | void
    }

    namespace Document {
      /** 记录 ID */
      type DocumentId = string | number

      /** 记录结构 */
      interface IDocumentData {
        /** 新增的记录 _id */
        _id?: DocumentId
        [key: string]: any
      }
  
      /** 数据库 API 通用参数 */
      type IDBAPIParam = cloud.IAPIParam
  
      /** 新增记录的定义 */
      interface IAddDocumentOptions extends IDBAPIParam {
        /** 新增记录的定义 */
        data: IDocumentData
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }
  
      /** 监听集合中符合查询条件的数据的更新事件 */
      interface IWatchDocumentOptions {
        /** 成功回调，回调传入的参数 snapshot 是变更快照 */
        onChange?: (res: General.CallbackResult) => void
        /** 失败回调 */
        onError?: (res: General.CallbackResult) => void
      }

      /** 变更快照 */
      interface ISnapshot {
        /** 更新事件数组 */
        docChanges: ChangeEvent[]
        /** 数据快照，表示此更新事件发生后查询语句对应的查询结果 */
        docs: General.IAnyObject[]
        /** 快照类型，仅在第一次初始化数据时有值为 init */
        type: string
        /** 变更事件 id */
        id: number
      }

      /** 更新事件 */
      interface ChangeEvent {
        /** 更新事件 id */
        id: number
        /** 列表更新类型，表示更新事件对监听列表的影响，枚举值 */
        queueType: keyof QueueType
        /** 数据更新类型，表示记录的具体更新类型，枚举值 */
        dataType: keyof DataType
        /** 更新的记录 id */
        docId: string
        /** 更新的完整记录 */
        doc: General.IAnyObject
        /** 所有更新的字段及字段更新后的值，`key` 为更新的字段路径，`value` 为字段更新后的值，仅在 `update` 操作时有此信息 */
        updatedFields: General.IAnyObject
        /** 所有被删除的字段，仅在 `update` 操作时有此信息 */
        removedFields: string[]
      }

      /** 列表更新类型，表示更新事件对监听列表的影响，枚举值 */
      interface QueueType {
        /** 初始化列表 */
        init
        /** 列表中的记录内容有更新，但列表包含的记录不变 */
        update
        /** 记录进入列表 */
        enqueue
        /** 记录离开列表 */
        dequeue
      }

      /** 数据更新类型，表示记录的具体更新类型，枚举值 */
      interface DataType {
        /** 初始化列表 */
        init
        /** 记录内容更新，对应 `update` 操作 */
        update
        /** 记录内容被替换，对应 `set` 操作 */
        replace
        /** 记录新增，对应 `add` 操作 */
        add
        /** 记录被删除，对应 `remove` 操作 */
        remove
      }

      interface IWatcher {
        /** 关闭监听，无需参数，返回 Promise，会在关闭完成时 resolve */
        close(): Promise<any>
      }
  
      /** 获取记录参数 */
      type IGetDocumentOptions = IDBAPIParam
  
      /** 获取记录条数参数 */
      type ICountDocumentOptions = IDBAPIParam
  
      /** 更新记录参数 */
      interface IUpdateDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }
  
      /** 更新单条记录参数 */
      interface IUpdateSingleDocumentOptions extends IDBAPIParam {
        /** 替换记录的定义 */
        data: IUpdateCondition
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }
  
      /** 替换记录参数 */
      interface ISetDocumentOptions extends IDBAPIParam {
        /** 替换记录的定义 */
        data: IUpdateCondition
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }
  
      /** 替换一条记录参数 */
      interface ISetSingleDocumentOptions extends IDBAPIParam {
        data: IUpdateCondition
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }

      /** 删除记录参数 */
      interface IRemoveDocumentOptions extends IDBAPIParam {
        query: Query.IQueryCondition
        /** 配置 */
        config?: cloud.IConfig
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: (res: General.CallbackResult) => void
        /** 接口调用失败的回调函数 */
        fail?: (res: General.CallbackResult) => void
        /** 接口调用成功的回调函数 */
        success?: (res: General.CallbackResult) => void
      }
  
      /** 删除一条记录参数 */
      type IRemoveSingleDocumentOptions = IDBAPIParam  

      /** 更新记录定义 */
      interface IUpdateCondition {
        [key: string]: any
      }
    }

    // TODO:

    interface Query {
      where(condition: Query.IQueryCondition): Query

      orderBy(fieldPath: string, order: string): Query

      limit(max: number): Query

      skip(offset: number): Query

      field(object: General.IAnyObject): Query

      get(options: Document.IGetDocumentOptions): Promise<Query.IQueryResult> | void

      count(options: Document.ICountDocumentOptions): Promise<Query.ICountResult> | void
    }

    namespace Query {
      interface IQueryCondition {
        [key: string]: any
      }
  
      type IStringQueryCondition = string
  
      interface IQueryResult extends General.CallbackResult {
        /** 查询的结果数组，数据的每个元素是一个 Object，代表一条记录 */
        data: Document.IDocumentData[]
        /** 调用结果 */
        errMsg: string
      }
  
      interface IQuerySingleResult extends General.CallbackResult {
        data: Document.IDocumentData
        /** 调用结果 */
        errMsg: string
      }

      interface IAddResult extends General.CallbackResult {
        _id: Document.DocumentId
        /** 调用结果 */
        errMsg: string
      }
  
      interface IUpdateResult extends General.CallbackResult {
        stats: {
          updated: number
          // created: number
        }
        /** 调用结果 */
        errMsg: string
      }
  
      interface ISetResult extends General.CallbackResult {
        _id: Document.DocumentId
        stats: {
          updated: number
          created: number
        }
        /** 调用结果 */
        errMsg: string
      }
  
      interface IRemoveResult extends General.CallbackResult {
        stats: {
          removed: number,
        }
        /** 调用结果 */
        errMsg: string
      }
  
      interface ICountResult extends General.CallbackResult {
        /** 结果数量 */
        total: number
        /** 调用结果 */
        errMsg: string
      }
    }

    /** 数据库操作符，通过 db.command 获取
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html
     */
    interface Command {
      eq(val: any): Command.DatabaseQueryCommand
      neq(val: any): Command.DatabaseQueryCommand
      gt(val: any): Command.DatabaseQueryCommand
      gte(val: any): Command.DatabaseQueryCommand
      lt(val: any): Command.DatabaseQueryCommand
      lte(val: any): Command.DatabaseQueryCommand
      in(val: any[]): Command.DatabaseQueryCommand
      nin(val: any[]): Command.DatabaseQueryCommand

      geoNear(options: IGeo.NearCommandOptions): Command.DatabaseQueryCommand
      geoWithin(options: IGeo.WithinCommandOptions): Command.DatabaseQueryCommand
      geoIntersects(
          options: IGeo.IntersectsCommandOptions,
      ): Command.DatabaseQueryCommand

      and(
        ...expressions: Array<Command.DatabaseLogicCommand | Query.IQueryCondition>
      ): Command.DatabaseLogicCommand
      or(
        ...expressions: Array<Command.DatabaseLogicCommand | Query.IQueryCondition>
      ): Command.DatabaseLogicCommand

      set(val: any): Command.DatabaseUpdateCommand
      remove(): Command.DatabaseUpdateCommand
      inc(val: number): Command.DatabaseUpdateCommand
      mul(val: number): Command.DatabaseUpdateCommand

      push(...values: any[]): Command.DatabaseUpdateCommand
      pop(): Command.DatabaseUpdateCommand
      shift(): Command.DatabaseUpdateCommand
      unshift(...values: any[]): Command.DatabaseUpdateCommand
    }

    namespace Command {
      interface DatabaseLogicCommand {
        fieldName: string | Database.InternalSymbol
        operator: keyof LOGIC_COMMANDS_LITERAL | string
        operands: any[]
  
        _setFieldName(fieldName: string): DatabaseLogicCommand
  
        and(
          ...expressions: Array<DatabaseLogicCommand | Query.IQueryCondition>
        ): DatabaseLogicCommand
        or(
          ...expressions: Array<DatabaseLogicCommand | Query.IQueryCondition>
        ): DatabaseLogicCommand
      }
  
  
      interface DatabaseQueryCommand extends DatabaseLogicCommand {
        operator: keyof QUERY_COMMANDS_LITERAL | string
  
        _setFieldName(fieldName: string): DatabaseQueryCommand
  
        eq(val: any): DatabaseLogicCommand
        neq(val: any): DatabaseLogicCommand
        gt(val: any): DatabaseLogicCommand
        gte(val: any): DatabaseLogicCommand
        lt(val: any): DatabaseLogicCommand
        lte(val: any): DatabaseLogicCommand
        in(val: any[]): DatabaseLogicCommand
        nin(val: any[]): DatabaseLogicCommand
  
        geoNear(options: IGeo.NearCommandOptions): DatabaseLogicCommand
        geoWithin(options: IGeo.WithinCommandOptions): DatabaseLogicCommand
        geoIntersects(
          options: IGeo.IntersectsCommandOptions,
        ): DatabaseLogicCommand
      }

      interface DatabaseUpdateCommand {
        fieldName: string | Database.InternalSymbol
        operator: keyof UPDATE_COMMANDS_LITERAL
        operands: any[]
  
        _setFieldName(fieldName: string): DatabaseUpdateCommand
      }

      interface LOGIC_COMMANDS_LITERAL {
        and
        or
        not
        nor
      }

      interface QUERY_COMMANDS_LITERAL {
        // normal
        eq
        neq
        gt
        gte
        lt
        lte
        in
        nin
        // geo
        geoNear
        geoWithin
        geoIntersects
      }

      interface UPDATE_COMMANDS_LITERAL {
        set
        remove
        inc
        mul
        push
        pop
        shift
        unshift
      }
    }

    /** 数据库集合的聚合操作实例
     * @see https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.html
     */
    interface Aggregate {}

    /** 数据库地理位置结构集 */
    interface IGeo {
      Point: IGeo.PointConstructor
      MultiPoint: IGeo.MultiPointConstructor
      LineString: IGeo.LineStringConstructor
      MultiLineString: IGeo.MultiLineStringConstructor
      Polygon: IGeo.PolygonConstructor
      MultiPolygon: IGeo.MultiPolygonConstructor
    }

    namespace IGeo {
      interface PointConstructor {
        new (longitude: number, latitide: number): GeoPoint
        new (geojson: JSONPoint): GeoPoint
        (longitude: number, latitide: number): GeoPoint
        (geojson: JSONPoint): GeoPoint
      }
  
      interface MultiPointConstructor {
        new (points: GeoPoint[] | JSONMultiPoint): GeoMultiPoint
        (points: GeoPoint[] | JSONMultiPoint): GeoMultiPoint
      }
  
      interface LineStringConstructor {
        new (points: GeoPoint[] | JSONLineString): GeoLineString
        (points: GeoPoint[] | JSONLineString): GeoLineString
      }
  
      interface MultiLineStringConstructor {
        new (
          lineStrings: GeoLineString[] | JSONMultiLineString,
        ): GeoMultiLineString
        (
          lineStrings: GeoLineString[] | JSONMultiLineString,
        ): GeoMultiLineString
      }
  
      interface PolygonConstructor {
        new (lineStrings: GeoLineString[] | JSONPolygon): GeoPolygon
        (lineStrings: GeoLineString[] | JSONPolygon): GeoPolygon
      }
  
      interface MultiPolygonConstructor {
        new (polygons: GeoPolygon[] | JSONMultiPolygon): GeoMultiPolygon
        (polygons: GeoPolygon[] | JSONMultiPolygon): GeoMultiPolygon
      }

      interface JSONPoint {
        type: 'Point'
        coordinates: [number, number]
      }
  
      interface JSONMultiPoint {
        type: 'MultiPoint'
        coordinates: Array<[number, number]>
      }
  
      interface JSONLineString {
        type: 'LineString'
        coordinates: Array<[number, number]>
      }
  
      interface JSONMultiLineString {
        type: 'MultiLineString'
        coordinates: Array<Array<[number, number]>>
      }
  
      interface JSONPolygon {
        type: 'Polygon'
        coordinates: Array<Array<[number, number]>>
      }
  
      interface JSONMultiPolygon {
        type: 'MultiPolygon'
        coordinates: Array<Array<Array<[number, number]>>>
      }

      interface GeoPoint {
        longitude: number
        latitude: number
  
        toJSON(): object
        toString(): string
      }
  
      interface GeoMultiPoint {
        points: GeoPoint[]
  
        toJSON(): JSONMultiPoint
        toString(): string
      }
  
      interface GeoLineString {
        points: GeoPoint[]
  
        toJSON(): JSONLineString
        toString(): string
      }
  
      interface GeoMultiLineString {
        lines: GeoLineString[]
  
        toJSON(): JSONMultiLineString
        toString(): string
      }
  
      interface GeoPolygon {
        lines: GeoLineString[]
  
        toJSON(): JSONPolygon
        toString(): string
      }
  
      interface GeoMultiPolygon {
        polygons: GeoPolygon[]
  
        toJSON(): JSONMultiPolygon
        toString(): string
      }
  
      interface NearCommandOptions {
        geometry: GeoPoint
        maxDistance?: number
        minDistance?: number
      }
  
      interface WithinCommandOptions {
        geometry: GeoPolygon | GeoMultiPolygon
      }
  
      interface IntersectsCommandOptions {
        geometry:
          | GeoPoint
          | GeoMultiPoint
          | GeoLineString
          | GeoMultiLineString
          | GeoPolygon
          | GeoMultiPolygon
      }
    }
  }
}
