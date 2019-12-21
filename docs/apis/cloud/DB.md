---
title: DB
sidebar_label: DB
---

## 参数

### Database

云开发 SDK 数据库实例

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| config | `IConfig` | 数据库配置 |
| command | `Command` | 数据库操作符，通过 db.command 获取<br />API 支持度: weapp<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html) |
| Geo | `IGeo` | 数据库地理位置结构集<br />API 支持度: weapp<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Geo.html) |

#### serverDate

构造一个服务端时间的引用。可用于查询条件、更新字段值或新增记录时的字段值。

```tsx
() => ServerDate
```

##### 示例代码

新增记录时设置字段为服务端时间：

```tsx
db.collection('todos').add({
  description: 'eat an apple',
  createTime: db.serverDate()
})
```
更新字段为服务端时间往后一小时：

```tsx
db.collection('todos').doc('my-todo-id').update({
  due: db.serverDate({
    offset: 60 * 60 * 1000
  })
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.serverDate.html)

#### RegExp

构造正则表达式，仅需在普通 js 正则表达式无法满足的情况下使用

```tsx
(options: IRegExpOptions) => IRegExp
```

| 参数 | 类型 |
| --- | --- |
| options | `IRegExpOptions` |

##### 示例代码

```tsx
// 原生 JavaScript 对象
db.collection('todos').where({
  description: /miniprogram/i
})

// 数据库正则对象
db.collection('todos').where({
  description: db.RegExp({
    regexp: 'miniprogram',
    options: 'i',
  })
})

// 用 new 构造也是可以的
db.collection('todos').where({
  description: new db.RegExp({
    regexp: 'miniprogram',
    options: 'i',
  })
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.RegExp.html)

#### collection

获取集合的引用。方法接受一个 `name` 参数，指定需引用的集合名称。

```tsx
(collectionName: string) => Collection
```

| 参数 | 类型 |
| --- | --- |
| collectionName | `string` |

##### 示例代码

```tsx
const db = Taro.cloud.database()
const todosCollection = db.collection('todos')
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Database.collection.html)

#### ServerDate

可用于查询条件、更新字段值或新增记录时的字段值。

| 参数 | 类型 |
| --- | --- |
| options | `IOptions` |

##### IOptions

| 参数 | 类型 |
| --- | --- |
| offset | `number` |

#### IRegExp

构造正则表达式

| 参数 | 类型 |
| --- | --- |
| regexp | `string` |
| options | `string` |

##### Constructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| options | `IRegExpOptions` |

##### IRegExpOptions

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| regexp | `string` | 是 |
| options | `string` | 否 |

#### InternalSymbol

### Collection

数据库集合引用

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| collectionName | `string` | 集合名称 |
| database | `Database` | 集合所在数据库引用 |

#### doc

获取集合中指定记录的引用。方法接受一个 `id` 参数，指定需引用的记录的 `_id`。

```tsx
(docId: string | number) => Document
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| docId | `string | number` | 记录 _id |

##### 示例代码

```tsx
const myTodo = db.collection('todos').doc('my-todo-id')
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.doc.html)

#### aggregate

发起聚合操作，定义完聚合流水线阶段之后需调用 end 方法标志结束定义并实际发起聚合操作

```tsx
() => Aggregate
```

##### 示例代码

###### 示例 1

```tsx
const $ = db.command.aggregate
db.collection('books').aggregate()
  .group({
    // 按 category 字段分组
    _id: '$category',
    // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
    avgSales: $.avg('$sales')
  })
  .end()
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

###### 示例 2

```tsx
const $ = db.command.aggregate
db.collection('books').aggregate()
  .group({
    // 按 category 字段分组
    _id: '$category',
    // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
    avgSales: $.avg('$sales')
  })
  .end({
    success: function(res) {
      console.log(res)
    },
    fail: function(err) {
      console.error(err)
    }
  })
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.aggregate.html)

#### where

指定查询条件，返回带新查询条件的新的集合引用

```tsx
(condition: Record<string, any>) => Collection
```

| 参数 | 类型 |
| --- | --- |
| condition | `Record<string, any>` |

##### 示例代码

```tsx
const _ = db.command
const result = await db.collection('todos').where({
  price: _.lt(100)
}).get()
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.where.html)

#### limit

指定查询结果集数量上限

```tsx
(value: number) => Collection
```

| 参数 | 类型 |
| --- | --- |
| value | `number` |

##### 示例代码

```tsx
db.collection('todos').limit(10)
  .get()
  .then(console.log)
  .catch(console.error)
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.limit.html)

#### orderBy

指定查询排序条件

```tsx
(fieldPath: string, string: "asc" | "desc") => Collection
```

| 参数 | 类型 |
| --- | --- |
| fieldPath | `string` |
| string | `"asc" | "desc"` |

##### 示例代码

按一个字段排序：按进度排升序取待办事项

```tsx
db.collection('todos').orderBy('progress', 'asc')
  .get()
  .then(console.log)
  .catch(console.error)
```

按多个字段排序：先按 progress 排降序（progress 越大越靠前）、再按 description 排升序（字母序越前越靠前）取待办事项

```tsx
db.collection('todos')
  .orderBy('progress', 'desc')
  .orderBy('description', 'asc')
  .get()
  .then(console.log)
  .catch(console.error)
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.orderBy.html)

#### skip

指定查询返回结果时从指定序列后的结果开始返回，常用于分页

```tsx
(offset: number) => Collection
```

| 参数 | 类型 |
| --- | --- |
| offset | `number` |

##### 示例代码

```tsx
db.collection('todos').skip(10)
  .get()
  .then(console.log)
  .catch(console.error)
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.skip.html)

#### field

指定返回结果中记录需返回的字段

**说明**

方法接受一个必填对象用于指定需返回的字段，对象的各个 key 表示要返回或不要返回的字段，value 传入 true|false（或 1|-1）表示要返回还是不要返回。
如果指定的字段是数组字段，还可以用以下方法只返回数组的第一个元素：在该字段 key 后面拼接上 `.$` 成为 `字段.$` 的形式。
如果指定的字段是数组字段，还可以用 `db.command.project.slice` 方法返回数组的子数组：
方法既可以接收一个正数表示返回前 n 个元素，也可以接收一个负数表示返回后 n 个元素；还可以接收一个包含两个数字 `[ skip, limit ]` 的数组，如果 `skip` 是正数，表示跳过 `skip` 个元素后再返回接下来的 `limit` 个元素，如果 `skip` 是负数，表示从倒数第 `skip` 个元素开始，返回往后数的 `limit` 个元素

- 返回数组的前 5 个元素：`{ tags: db.command.project.slice(5) }`
- 返回数组的后 5 个元素：`{ tags: db.command.project.slice(-5) }`
- 跳过前 5 个元素，返回接下来 10 个元素：`{ tags: db.command.project.slice(5, 10) }`
- 从倒数第 5 个元素开始，返回接下来正方向数的 10 个元素：`{ tags: db.command.project.slice(-5, 10) }`

```tsx
(object: Record<string, any>) => Collection
```

| 参数 | 类型 |
| --- | --- |
| object | `Record<string, any>` |

##### 示例代码

返回 description, done 和 progress 三个字段：

```tsx
db.collection('todos').field({
  description: true,
  done: true,
  progress: true,
  // 只返回 tags 数组前 3 个元素
  tags: db.command.project.slice(3),
})
  .get()
  .then(console.log)
  .catch(console.error)
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.field.html)

#### get

获取集合数据，或获取根据查询条件筛选后的集合数据。

**使用说明**

统计集合记录数或统计查询语句对应的结果记录数

小程序端与云函数端的表现会有如下差异：

- 小程序端：如果没有指定 limit，则默认且最多取 20 条记录。
- 云函数端：如果没有指定 limit，则默认且最多取 100 条记录。

如果没有指定 skip，则默认从第 0 条记录开始取，skip 常用于分页。

如果需要取集合中所有的数据，仅在数据量不大且在云函数中时

```tsx
() => Promise<IQueryResult>
```

##### 示例代码

```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
  _openid: 'xxx' // 填入当前用户 openid
}).get().then(res => {
  console.log(res.data)
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.get.html)

#### count

统计匹配查询条件的记录的条数

```tsx
() => Promise<ICountResult>
```

##### 示例代码

###### 示例 1

```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
  _openid: 'xxx' // 填入当前用户 openid
}).count().then(res => {
  console.log(res.total)
})
```

###### 示例 2

```tsx
const db = Taro.cloud.database()
db.collection('todos').where({
  _openid: 'xxx' // 填入当前用户 openid
}).count({
  success: function(res) {
    console.log(res.total)
  },
  fail: console.error
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.count.html)

#### add

新增记录，如果传入的记录对象没有 _id 字段，则由后台自动生成 _id；若指定了 _id，则不能与已有记录冲突

```tsx
(options: IAddDocumentOptions) => void | Promise<IAddResult>
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| options | `IAddDocumentOptions` | 新增记录的定义 |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').add({
  // data 字段表示需新增的 JSON 数据
  data: {
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    location: new db.Geo.Point(113, 23),
    done: false
  }
})
.then(res => {
  console.log(res)
})
.catch(console.error)
```

###### 示例 2

```tsx
db.collection('todos').add({
  // data 字段表示需新增的 JSON 数据
  data: {
    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    // 为待办事项添加一个地理位置（113°E，23°N）
    location: new db.Geo.Point(113, 23),
    done: false
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  },
  fail: console.error,
  complete: cosnole.log
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.add.html)

#### watch

监听集合中符合查询条件的数据的更新事件。注意使用 watch 时，只有 where 语句会生效，orderBy、limit 等不生效。

```tsx
(options: IWatchDocumentOptions) => IWatcher
```

| 参数 | 类型 |
| --- | --- |
| options | `IWatchDocumentOptions` |

##### 示例代码

###### 示例 1

根据查询条件监听

```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').where({
  _openid: 'xxx' // 填入当前用户 openid
}).watch({
  onChange: function(snapshot) {
    console.log('snapshot', snapshot)
  },
  onError: function(err) {
    console.error('the watch closed because of error', err)
  }
})
```

###### 示例 2

监听一个记录的变化

```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').doc('x').watch({
  onChange: function(snapshot) {
    console.log('snapshot', snapshot)
  },
  onError: function(err) {
    console.error('the watch closed because of error', err)
  }
})
```

###### 示例 3

关闭监听

```tsx
const db = Taro.cloud.database()
const watcher = db.collection('todos').where({
  _openid: 'xxx' // 填入当前用户 openid
}).watch({
  onChange: function(snapshot) {
    console.log('snapshot', snapshot)
  },
  onError: function(err) {
    console.error('the watch closed because of error', err)
  }
})
// ...
// 关闭
await watcher.close()
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.watch.html)

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Collection.html)

### Document

数据库记录引用

#### get

获取记录数据，或获取根据查询条件筛选后的记录数据

```tsx
(options: IDBAPIParam) => void | Promise<IQuerySingleResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `IDBAPIParam` |

##### 示例代码

###### 示例 1

```tsx
const db = Taro.cloud.database()
db.collection('todos').doc('<some-todo-id>').get().then(res => {
  console.log(res.data)
})
```

###### 示例 2

```tsx
const db = Taro.cloud.database()
db.collection('todos').doc('<some-todo-id>').get({
  success: function(res) {
    console.log(res.data)
  },
  fail: console.error
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.get.html)

#### set

替换更新一条记

```tsx
(options: ISetSingleDocumentOptions) => void | Promise<ISetResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `ISetSingleDocumentOptions` |

##### 示例代码

###### 示例 1

```tsx
const _ = db.command
db.collection('todos').doc('todo-identifiant-aleatoire').set({
  data: {
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    style: {
      color: "skyblue"
    },
    // 位置（113°E，23°N）
    location: new db.Geo.Point(113, 23),
    done: false
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})
```

###### 示例 2

```tsx
const _ = db.command
db.collection('todos').doc('todo-identifiant-aleatoire').set({
  data: {
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    style: {
      color: "skyblue"
    },
    // 位置（113°E，23°N）
    location: new db.Geo.Point(113, 23),
    done: false
  },
  success: function(res) {
    console.log(res.data)
  },
  fail: console.error
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.set.html)

#### update

更新一条记录

```tsx
(options: IUpdateSingleDocumentOptions) => void | Promise<IUpdateResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `IUpdateSingleDocumentOptions` |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').update({
  // data 传入需要局部更新的数据
  data: {
    // 表示将 done 字段置为 true
    done: true
  }
})
.then(console.log)
.catch(console.error)
```

###### 示例 2

db.collection('todos').doc('todo-identifiant-aleatoire').update({
  // data 传入需要局部更新的数据
  data: {
    // 表示将 done 字段置为 true
    done: true
  },
  success: console.log,
  fail: console.error
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.update.html)

#### remove

删除一条记录

```tsx
(options: IDBAPIParam) => void | Promise<IRemoveResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `IDBAPIParam` |

##### 示例代码

###### 示例 1

```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').remove()
  .then(console.log)
  .catch(console.error)
```

###### 示例 2

```tsx
db.collection('todos').doc('todo-identifiant-aleatoire').remove({
  success: console.log,
  fail: console.error
})
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/document/Document.remove.html)

#### DocumentId

记录 ID

#### IDocumentData

记录结构

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| _id | `string | number` | 否 | 新增的记录 _id |
| __index | `__index` | 是 |  |

#### IDBAPIParam

数据库 API 通用参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |
| success | `(res: T) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(err: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(val: CallbackResult | T) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### IAddDocumentOptions

新增记录的定义

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `IDocumentData` | 是 | 新增记录的定义 |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### IWatchDocumentOptions

监听集合中符合查询条件的数据的更新事件

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| onChange | `(res: CallbackResult) => void` | 否 | 成功回调，回调传入的参数 snapshot 是变更快照 |
| onError | `(res: CallbackResult) => void` | 否 | 失败回调 |

#### ISnapshot

变更快照

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| docChanges | `ChangeEvent[]` | 更新事件数组 |
| docs | `Record<string, any>[]` | 数据快照，表示此更新事件发生后查询语句对应的查询结果 |
| type | `string` | 快照类型，仅在第一次初始化数据时有值为 init |
| id | `number` | 变更事件 id |

#### ChangeEvent

更新事件

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `number` | 更新事件 id |
| queueType | `"init" | "update" | "enqueue" | "dequeue"` | 列表更新类型，表示更新事件对监听列表的影响，枚举值 |
| dataType | `"init" | "update" | "replace" | "add" | "remove"` | 数据更新类型，表示记录的具体更新类型，枚举值 |
| docId | `string` | 更新的记录 id |
| doc | `Record<string, any>` | 更新的完整记录 |
| updatedFields | `Record<string, any>` | 所有更新的字段及字段更新后的值，`key` 为更新的字段路径，`value` 为字段更新后的值，仅在 `update` 操作时有此信息 |
| removedFields | `string[]` | 所有被删除的字段，仅在 `update` 操作时有此信息 |

#### QueueType

列表更新类型，表示更新事件对监听列表的影响，枚举值

| 参数 | 说明 |
| --- | --- |
| init | 初始化列表 |
| update | 列表中的记录内容有更新，但列表包含的记录不变 |
| enqueue | 记录进入列表 |
| dequeue | 记录离开列表 |

#### DataType

数据更新类型，表示记录的具体更新类型，枚举值

| 参数 | 说明 |
| --- | --- |
| init | 初始化列表 |
| update | 记录内容更新，对应 `update` 操作 |
| replace | 记录内容被替换，对应 `set` 操作 |
| add | 记录新增，对应 `add` 操作 |
| remove | 记录被删除，对应 `remove` 操作 |

#### IWatcher

##### close

关闭监听，无需参数，返回 Promise，会在关闭完成时 resolve

```tsx
() => Promise<any>
```

#### IGetDocumentOptions

获取记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |
| success | `(res: T) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(err: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(val: CallbackResult | T) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### ICountDocumentOptions

获取记录条数参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |
| success | `(res: T) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(err: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(val: CallbackResult | T) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### IUpdateDocumentOptions

更新记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `IUpdateCondition` | 是 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### IUpdateSingleDocumentOptions

更新单条记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `IUpdateCondition` | 是 | 替换记录的定义 |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### ISetDocumentOptions

替换记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `IUpdateCondition` | 是 | 替换记录的定义 |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### ISetSingleDocumentOptions

替换一条记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| data | `IUpdateCondition` | 是 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### IRemoveDocumentOptions

删除记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| query | `IQueryCondition` | 是 |  |
| config | `IConfig` | 否 | 配置 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

#### IRemoveSingleDocumentOptions

删除一条记录参数

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| config | `IConfig` | 否 | 配置 |
| success | `(res: T) => void` | 否 | 接口调用成功的回调函数 |
| fail | `(err: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| complete | `(val: CallbackResult | T) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### IUpdateCondition

更新记录定义

| 参数 | 类型 |
| --- | --- |
| __index | `__index` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Document.html)

### Query

#### where

```tsx
(condition: IQueryCondition) => Query
```

| 参数 | 类型 |
| --- | --- |
| condition | `IQueryCondition` |

#### orderBy

```tsx
(fieldPath: string, order: string) => Query
```

| 参数 | 类型 |
| --- | --- |
| fieldPath | `string` |
| order | `string` |

#### limit

```tsx
(max: number) => Query
```

| 参数 | 类型 |
| --- | --- |
| max | `number` |

#### skip

```tsx
(offset: number) => Query
```

| 参数 | 类型 |
| --- | --- |
| offset | `number` |

#### field

```tsx
(object: Record<string, any>) => Query
```

| 参数 | 类型 |
| --- | --- |
| object | `Record<string, any>` |

#### get

```tsx
(options: IDBAPIParam) => void | Promise<IQueryResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `IDBAPIParam` |

#### count

```tsx
(options: IDBAPIParam) => void | Promise<ICountResult>
```

| 参数 | 类型 |
| --- | --- |
| options | `IDBAPIParam` |

#### IQueryCondition

| 参数 | 类型 |
| --- | --- |
| __index | `__index` |

#### IStringQueryCondition

#### IQueryResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `IDocumentData[]` | 查询的结果数组，数据的每个元素是一个 Object，代表一条记录 |
| errMsg | `string` | 调用结果 |

#### IQuerySingleResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `IDocumentData` |  |
| errMsg | `string` | 调用结果 |

#### IAddResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| _id | `string | number` |  |
| errMsg | `string` | 调用结果 |

#### IUpdateResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| stats | `{ updated: number; }` |  |
| errMsg | `string` | 调用结果 |

#### ISetResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| _id | `string | number` |  |
| stats | `{ updated: number; created: number; }` |  |
| errMsg | `string` | 调用结果 |

#### IRemoveResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| stats | `{ removed: number; }` |  |
| errMsg | `string` | 调用结果 |

#### ICountResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| total | `number` | 结果数量 |
| errMsg | `string` | 调用结果 |

### Command

数据库操作符，通过 db.command 获取

#### eq

```tsx
(val: any) => DatabaseQueryCommand
```

#### neq

```tsx
(val: any) => DatabaseQueryCommand
```

#### gt

```tsx
(val: any) => DatabaseQueryCommand
```

#### gte

```tsx
(val: any) => DatabaseQueryCommand
```

#### lt

```tsx
(val: any) => DatabaseQueryCommand
```

#### lte

```tsx
(val: any) => DatabaseQueryCommand
```

#### in

```tsx
(val: any[]) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `any[]` |

#### nin

```tsx
(val: any[]) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `any[]` |

#### geoNear

```tsx
(options: NearCommandOptions) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `NearCommandOptions` |

#### geoWithin

```tsx
(options: WithinCommandOptions) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `WithinCommandOptions` |

#### geoIntersects

```tsx
(options: IntersectsCommandOptions) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `IntersectsCommandOptions` |

#### and

```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| expressions | `(IQueryCondition | DatabaseLogicCommand)[]` |

#### or

```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| expressions | `(IQueryCondition | DatabaseLogicCommand)[]` |

#### set

```tsx
(val: any) => DatabaseUpdateCommand
```

#### remove

```tsx
() => DatabaseUpdateCommand
```

#### inc

```tsx
(val: number) => DatabaseUpdateCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `number` |

#### mul

```tsx
(val: number) => DatabaseUpdateCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `number` |

#### push

```tsx
(...values: any[]) => DatabaseUpdateCommand
```

| 参数 | 类型 |
| --- | --- |
| values | `any[]` |

#### pop

```tsx
() => DatabaseUpdateCommand
```

#### shift

```tsx
() => DatabaseUpdateCommand
```

#### unshift

```tsx
(...values: any[]) => DatabaseUpdateCommand
```

| 参数 | 类型 |
| --- | --- |
| values | `any[]` |

#### DatabaseLogicCommand

| 参数 | 类型 |
| --- | --- |
| fieldName | `string | InternalSymbol` |
| operator | `string` |
| operands | `any[]` |

##### _setFieldName

```tsx
(fieldName: string) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| fieldName | `string` |

##### and

```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| expressions | `(IQueryCondition | DatabaseLogicCommand)[]` |

##### or

```tsx
(...expressions: (IQueryCondition | DatabaseLogicCommand)[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| expressions | `(IQueryCondition | DatabaseLogicCommand)[]` |

#### DatabaseQueryCommand

| 参数 | 类型 |
| --- | --- |
| operator | `string` |

##### _setFieldName

```tsx
(fieldName: string) => DatabaseQueryCommand
```

| 参数 | 类型 |
| --- | --- |
| fieldName | `string` |

##### eq

```tsx
(val: any) => DatabaseLogicCommand
```

##### neq

```tsx
(val: any) => DatabaseLogicCommand
```

##### gt

```tsx
(val: any) => DatabaseLogicCommand
```

##### gte

```tsx
(val: any) => DatabaseLogicCommand
```

##### lt

```tsx
(val: any) => DatabaseLogicCommand
```

##### lte

```tsx
(val: any) => DatabaseLogicCommand
```

##### in

```tsx
(val: any[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `any[]` |

##### nin

```tsx
(val: any[]) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| val | `any[]` |

##### geoNear

```tsx
(options: NearCommandOptions) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `NearCommandOptions` |

##### geoWithin

```tsx
(options: WithinCommandOptions) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `WithinCommandOptions` |

##### geoIntersects

```tsx
(options: IntersectsCommandOptions) => DatabaseLogicCommand
```

| 参数 | 类型 |
| --- | --- |
| options | `IntersectsCommandOptions` |

#### DatabaseUpdateCommand

| 参数 | 类型 |
| --- | --- |
| fieldName | `string | InternalSymbol` |
| operator | `"remove" | "set" | "inc" | "mul" | "push" | "pop" | "shift" | "unshift"` |
| operands | `any[]` |

##### _setFieldName

```tsx
(fieldName: string) => DatabaseUpdateCommand
```

| 参数 | 类型 |
| --- | --- |
| fieldName | `string` |

#### LOGIC_COMMANDS_LITERAL

#### QUERY_COMMANDS_LITERAL

#### UPDATE_COMMANDS_LITERAL

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html)

### Aggregate

数据库集合的聚合操作实例

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/aggregate/Aggregate.html)

### IGeo

数据库地理位置结构集

| 参数 | 类型 |
| --- | --- |
| Point | `PointConstructor` |
| MultiPoint | `MultiPointConstructor` |
| LineString | `LineStringConstructor` |
| MultiLineString | `MultiLineStringConstructor` |
| Polygon | `PolygonConstructor` |
| MultiPolygon | `MultiPolygonConstructor` |

#### PointConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| longitude | `number` |
| latitide | `number` |

#### MultiPointConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| points | `GeoPoint[] | JSONMultiPoint` |

#### LineStringConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| points | `GeoPoint[] | JSONLineString` |

#### MultiLineStringConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| lineStrings | `GeoLineString[] | JSONMultiLineString` |

#### PolygonConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| lineStrings | `GeoLineString[] | JSONPolygon` |

#### MultiPolygonConstructor

| 参数 | 类型 |
| --- | --- |
| __new | `__new` |

```tsx
() => undefined
```

| 参数 | 类型 |
| --- | --- |
| polygons | `GeoPolygon[] | JSONMultiPolygon` |

#### JSONPoint

| 参数 | 类型 |
| --- | --- |
| type | `"Point"` |
| coordinates | `[number, number]` |

#### JSONMultiPoint

| 参数 | 类型 |
| --- | --- |
| type | `"MultiPoint"` |
| coordinates | `[number, number][]` |

#### JSONLineString

| 参数 | 类型 |
| --- | --- |
| type | `"LineString"` |
| coordinates | `[number, number][]` |

#### JSONMultiLineString

| 参数 | 类型 |
| --- | --- |
| type | `"MultiLineString"` |
| coordinates | `[number, number][][]` |

#### JSONPolygon

| 参数 | 类型 |
| --- | --- |
| type | `"Polygon"` |
| coordinates | `[number, number][][]` |

#### JSONMultiPolygon

| 参数 | 类型 |
| --- | --- |
| type | `"MultiPolygon"` |
| coordinates | `[number, number][][][]` |

#### GeoPoint

| 参数 | 类型 |
| --- | --- |
| longitude | `number` |
| latitude | `number` |

##### toJSON

```tsx
() => object
```

##### toString

```tsx
() => string
```

#### GeoMultiPoint

| 参数 | 类型 |
| --- | --- |
| points | `GeoPoint[]` |

##### toJSON

```tsx
() => JSONMultiPoint
```

##### toString

```tsx
() => string
```

#### GeoLineString

| 参数 | 类型 |
| --- | --- |
| points | `GeoPoint[]` |

##### toJSON

```tsx
() => JSONLineString
```

##### toString

```tsx
() => string
```

#### GeoMultiLineString

| 参数 | 类型 |
| --- | --- |
| lines | `GeoLineString[]` |

##### toJSON

```tsx
() => JSONMultiLineString
```

##### toString

```tsx
() => string
```

#### GeoPolygon

| 参数 | 类型 |
| --- | --- |
| lines | `GeoLineString[]` |

##### toJSON

```tsx
() => JSONPolygon
```

##### toString

```tsx
() => string
```

#### GeoMultiPolygon

| 参数 | 类型 |
| --- | --- |
| polygons | `GeoPolygon[]` |

##### toJSON

```tsx
() => JSONMultiPolygon
```

##### toString

```tsx
() => string
```

#### NearCommandOptions

| 参数 | 类型 | 必填 |
| --- | --- | :---: |
| geometry | `GeoPoint` | 是 |
| maxDistance | `number` | 否 |
| minDistance | `number` | 否 |

#### WithinCommandOptions

| 参数 | 类型 |
| --- | --- |
| geometry | `GeoPolygon | GeoMultiPolygon` |

#### IntersectsCommandOptions

| 参数 | 类型 |
| --- | --- |
| geometry | `GeoPoint | GeoMultiPoint | GeoLineString | GeoMultiLineString | GeoPolygon | GeoMultiPolygon` |
