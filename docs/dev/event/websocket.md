# WebSocket

## 介绍

开发者当前可以通过WebSocket连接上开放平台，开放平台会将各类事件消息统一推送至WebSocket连接通道

## 连接

### 开始连接

通过[获取WebSocket连接](../api/event.md#获取websocket连接)接口获取到WSS连接节点，通过WSS连接节点进行连接

### 连接保持

WebSocket连接上后，客户端需要30秒发送一次`ping`心跳包来保持连接状态，否则服务器会主动断开连接。如果你使用的WS组件没有自动心跳，你也可以每间隔30秒发送以下数据包来模拟心跳

```json
{
    "type": 1
}
```

### 连接恢复

WebSocket断连后，一般情况下可通过原连接节点重新连接，若是由于重置`token`导致的断连，则需要通过[获取WebSocket连接](../api/event.md#获取websocket连接)接口重新获取最新连接节点进行连接

### 数据补发

WebSocket连上后，会补发最近3分钟内的消息，最多80条

### 事件推送

WebSocket连上后，开放平台会将[各类事件](./event.md)统一推送至WebSocket连接通道，开发者获取到事件消息后，可以针对事件内容进行相应的响应处理