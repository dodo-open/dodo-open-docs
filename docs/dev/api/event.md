# 事件API


## 获取WebSocket连接

GetWebSocketConnection

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
        "endpoint": "wss://xxxxxxxx"
    }
}
```