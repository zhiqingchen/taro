---
title: MediaContainer
sidebar_label: MediaContainer
---

创建音视频处理容器，最终可将容器中的轨道合成一个视频

## 方法

### addTrack

将音频或视频轨道添加到容器

```tsx
(track: MediaTrack) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| track | `MediaTrack` | 要添加的音频或视频轨道 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html)

### destroy

将容器销毁，释放资源

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html)

### export

将容器内的轨道合并并导出视频文件

```tsx
() => void
```

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html)

### extractDataSource

将传入的视频源分离轨道。不会自动将轨道添加到待合成的容器里。

```tsx
(option: ExtractDataSourceOption) => void
```

| 参数 | 类型 |
| --- | --- |
| option | `ExtractDataSourceOption` |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html)

### removeTrack

将音频或视频轨道从容器中移除

```tsx
(track: MediaTrack) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| track | `MediaTrack` | 要移除的音频或视频轨道 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html)

## 参数

### ExtractDataSourceOption

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| source | `string` | 视频源地址，只支持本地文件 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| MediaContainer.addTrack | ✔️ |  |  |  |  |  |  |  |
| MediaContainer.destroy | ✔️ |  |  |  |  |  |  |  |
| MediaContainer.export | ✔️ |  |  |  |  |  |  |  |
| MediaContainer.extractDataSource | ✔️ |  |  |  |  |  |  |  |
| MediaContainer.removeTrack | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html)
