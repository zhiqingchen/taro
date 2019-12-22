---
title: Taro.createVideoContext(id, component)
sidebar_label: createVideoContext
---

创建 video 上下文 VideoContext 对象。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html)

## 类型

```tsx
(id: string, component?: Record<string, any>) => VideoContext
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | video 组件的 id |
| component | `Record<string, any>` | 在自定义组件下，当前组件实例的this，以操作组件内 video 组件 |

## 示例代码

```tsx
videoContext = Taro.createVideoContext('myVideo')
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.createVideoContext | ✔️ |  |  |  |  | ✔️ |  |  |
