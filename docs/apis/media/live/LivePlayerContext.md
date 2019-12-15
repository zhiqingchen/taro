---
title: LivePlayerContext
sidebar_label: LivePlayerContext
---

`LivePlayerContext` 实例，可通过 `Taro.createLivePlayerContext` 获取。
`LivePlayerContext` 通过 `id` 跟一个 `live-player` 组件绑定，操作对应的 `live-player` 组件。

## 方法

### exitFullScreen

退出全屏

```tsx
(option?: ExitFullScreenOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ExitFullScreenOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitFullScreen.html)

### mute

静音

```tsx
(option?: MuteOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `MuteOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.mute.html)

### pause

暂停

```tsx
(option?: PauseOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `PauseOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.pause.html)

### play

播放

```tsx
(option?: PlayOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `PlayOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.play.html)

### requestFullScreen

进入全屏

```tsx
(option: RequestFullScreenOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `RequestFullScreenOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestFullScreen.html)

### resume

恢复

```tsx
(option?: ResumeOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ResumeOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.resume.html)

### snapshot

截图

```tsx
(option?: SnapshotOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `SnapshotOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html)

### stop

停止

```tsx
(option?: StopOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StopOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.stop.html)

## 参数

### ExitFullScreenOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### MuteOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### PauseOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### PlayOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### RequestFullScreenOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| direction | `0 | 90 | -90` | 否 | 设置全屏时的方向<br /><br />可选值：<br />- 0: 正常竖向;<br />- 90: 屏幕逆时针90度;<br />- -90: 屏幕顺时针90度; |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ResumeOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SnapshotOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SnapshotSuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SnapshotSuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| height | `string` | 图片的高度 |
| tempImagePath | `string` | 图片文件的临时路径 |
| width | `string` | 图片的宽度 |
| errMsg | `string` | 调用结果 |

### StopOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LivePlayerContext.exitFullScreen | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.mute | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.pause | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.play | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.requestFullScreen | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.resume | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.snapshot | ✔️ |  |  |  |  |  |  |  |
| LivePlayerContext.stop | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html)
