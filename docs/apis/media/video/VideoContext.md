---
title: VideoContext
sidebar_label: VideoContext
---

## 方法

### exitFullScreen

退出全屏

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html)

### hideStatusBar

隐藏状态栏，仅在iOS全屏下有效

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html)

### pause

暂停视频

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html)

### play

播放视频

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html)

### playbackRate

设置倍速播放

```tsx
(rate: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| rate | `number` | 倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html)

### requestFullScreen

进入全屏

```tsx
(option: RequestFullScreenOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `RequestFullScreenOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html)

### seek

跳转到指定位置

```tsx
(position: number) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| position | `number` | 跳转到的位置，单位 s |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html)

### sendDanmu

发送弹幕

```tsx
(data: Danmu) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | `Danmu` | 弹幕内容 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html)

### showStatusBar

显示状态栏，仅在iOS全屏下有效

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html)

### stop

停止视频

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html)

## 参数

### RequestFullScreenOption

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| direction | `0 | 90 | -90` | 否 | 设置全屏时视频的方向，不指定则根据宽高比自动判断。<br /><br />可选值：<br />- 0: 正常竖向;<br />- 90: 屏幕逆时针90度;<br />- -90: 屏幕顺时针90度; |

### Danmu

弹幕内容

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| text | `string` | 是 | 弹幕文字 |
| color | `string` | 否 | 弹幕颜色 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| VideoContext.exitFullScreen | ✔️ |  |  |  |  |  |  |  |
| VideoContext.hideStatusBar | ✔️ |  |  |  |  |  |  |  |
| VideoContext.pause | ✔️ |  |  |  |  |  |  |  |
| VideoContext.play | ✔️ |  |  |  |  |  |  |  |
| VideoContext.playbackRate | ✔️ |  |  |  |  |  |  |  |
| VideoContext.requestFullScreen | ✔️ |  |  |  |  |  |  |  |
| VideoContext.seek | ✔️ |  |  |  |  |  |  |  |
| VideoContext.sendDanmu | ✔️ |  |  |  |  |  |  |  |
| VideoContext.showStatusBar | ✔️ |  |  |  |  |  |  |  |
| VideoContext.stop | ✔️ |  |  |  |  |  |  |  |
