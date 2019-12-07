---
title: Taro.onWindowResize(callback)
sidebar_label: onWindowResize
---

监听窗口尺寸变化事件

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

窗口尺寸变化事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 |
| --- | --- |
| size | `Size` |

### Size

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| windowHeight | `number` | 变化后的窗口高度，单位 px |
| windowWidth | `number` | 变化后的窗口宽度，单位 px |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onWindowResize | ✔️ |  |  |  |  | ✔️ |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html)
