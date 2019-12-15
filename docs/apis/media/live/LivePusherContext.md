---
title: LivePusherContext
sidebar_label: LivePusherContext
---

`LivePusherContext` 实例，可通过 `Taro.createLivePusherContext` 获取。
`LivePusherContext` 与页面内唯一的 `live-pusher` 组件绑定，操作对应的 `live-pusher` 组件。

## 方法

### pause

暂停推流

```tsx
(option?: PauseOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `PauseOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pause.html)

### pauseBGM

暂停背景音

```tsx
(option?: PauseBGMOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `PauseBGMOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pauseBGM.html)

### playBGM

播放背景音

```tsx
(option: PlayBGMOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `PlayBGMOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.playBGM.html)

### resume

恢复推流

```tsx
(option?: ResumeOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ResumeOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resume.html)

### resumeBGM

恢复背景音

```tsx
(option?: ResumeBGMOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ResumeBGMOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resumeBGM.html)

### setBGMVolume

设置背景音音量

```tsx
(option: SetBGMVolumeOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `SetBGMVolumeOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setBGMVolume.html)

### snapshot

快照

```tsx
(option?: SnapshotOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `SnapshotOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html)

### start

开始推流，同时开启摄像头预览

```tsx
(option?: StartOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StartOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.start.html)

### startPreview

开启摄像头预览

```tsx
(option?: StartPreviewOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StartPreviewOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.startPreview.html)

### stop

停止推流，同时停止摄像头预览

```tsx
(option?: StopOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StopOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stop.html)

### stopBGM

停止背景音

```tsx
(option?: StopBGMOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StopBGMOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopBGM.html)

### stopPreview

关闭摄像头预览

```tsx
(option?: StopPreviewOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `StopPreviewOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopPreview.html)

### switchCamera

切换前后摄像头

```tsx
(option?: SwitchCameraOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `SwitchCameraOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.switchCamera.html)

### toggleTorch

切换手电筒

```tsx
(option?: ToggleTorchOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ToggleTorchOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.toggleTorch.html)

## 参数

### PauseOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### PauseBGMOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### PlayBGMOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| url | `string` | 是 | 加入背景混音的资源地址 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ResumeOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ResumeBGMOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SetBGMVolumeOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| volume | `string` | 是 | 音量大小，范围是 0-1 |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SnapshotOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### StartOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### StartPreviewOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### StopOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### StopBGMOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### StopPreviewOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SwitchCameraOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### ToggleTorchOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| LivePusherContext.pause | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.pauseBGM | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.playBGM | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.resume | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.resumeBGM | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.setBGMVolume | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.snapshot | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.start | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.startPreview | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.stop | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.stopBGM | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.stopPreview | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.switchCamera | ✔️ |  |  |  |  |  |  |  |
| LivePusherContext.toggleTorch | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html)
