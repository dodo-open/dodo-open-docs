# WebSocket

GetWebSocketConnection

## 获取WebSocket连接

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/websocket/connection`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|
 
#### 入参

无

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|endpoint|string|连接节点|

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": {
        "endpoint": "ws://xxxxxxxx"
    }
}
```

## 开始连接

通过[获取WebSocket连接](#获取WebSocket连接)获取到连接节点，通过连接节点进行连接

## 连接保持

WebSocket连接上后，客户端需要30秒发送一次`ping`心跳包来保持连接状态，否则服务器会主动断开连接。如果你使用的ws组件没有自动心跳，你也可以每间隔30秒发送以下数据包来模拟心跳

```json
{
    "type": 1
}
```

## 连接恢复

WebSocket断连后，一般情况下可通过原连接节点重新连接，若是由于重置`token`导致的断连，则需要通过[获取WebSocket连接](#获取WebSocket连接)获取到最新的连接节点进行连接

## 数据补发

WebSocket连上后，会补发最近3分钟内的消息，最多80条