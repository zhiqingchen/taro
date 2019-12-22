---
title: Taro.offWindowResize(callback)
sidebar_label: offWindowResize
---

取消监听窗口尺寸变化事件

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.offWindowResize.html)

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

窗口尺寸变化事件的回调函数

```tsx
(res: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| res | `CallbackResult` |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.offWindowResize | ✔️ |  |  |  |  | ✔️ |  |  |
