---
title: UploadTask
sidebar_label: UploadTask
---

一个可以监听上传进度变化事件，以及取消上传任务的对象

## 方法

### abort

中断上传任务

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.abort.html)

### offHeadersReceived

取消监听 HTTP Response Header 事件

```tsx
(callback: OffHeadersReceivedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OffHeadersReceivedCallback` | HTTP Response Header 事件的回调函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offHeadersReceived.html)

### offProgressUpdate

取消监听上传进度变化事件

```tsx
(callback: OffProgressUpdateCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OffProgressUpdateCallback` | 上传进度变化事件的回调函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offProgressUpdate.html)

### onHeadersReceived

监听 HTTP Response Header 事件。会比请求完成事件更早

```tsx
(callback: OnHeadersReceivedCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnHeadersReceivedCallback` | HTTP Response Header 事件的回调函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onHeadersReceived.html)

### onProgressUpdate

监听上传进度变化事件

```tsx
(callback: OnProgressUpdateCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `OnProgressUpdateCallback` | 上传进度变化事件的回调函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onProgressUpdate.html)

## 参数

### OffHeadersReceivedCallback

HTTP Response Header 事件的回调函数

```tsx
(res: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `CallbackResult` |

### OffProgressUpdateCallback

上传进度变化事件的回调函数

```tsx
(res: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `CallbackResult` |

### OnHeadersReceivedCallback

HTTP Response Header 事件的回调函数

```tsx
(result: OnHeadersReceivedCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnHeadersReceivedCallbackResult` |

### OnProgressUpdateCallback

上传进度变化事件的回调函数

```tsx
(result: OnProgressUpdateCallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `OnProgressUpdateCallbackResult` |

### OnHeadersReceivedCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| header | `Record<string, any>` | 开发者服务器返回的 HTTP Response Header |

### OnProgressUpdateCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| progress | `number` | 上传进度百分比 |
| totalBytesExpectedToSend | `number` | 预期需要上传的数据总长度，单位 Bytes |
| totalBytesSent | `number` | 已经上传的数据长度，单位 Bytes |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| UploadTask.abort | ✔️ |  |  |  |  |  |  |  |
| UploadTask.offHeadersReceived | ✔️ |  |  |  |  |  |  |  |
| UploadTask.offProgressUpdate | ✔️ |  |  |  |  |  |  |  |
| UploadTask.onHeadersReceived | ✔️ |  |  |  |  |  |  |  |
| UploadTask.onProgressUpdate | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
