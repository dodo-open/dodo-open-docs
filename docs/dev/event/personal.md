# 私信Event


## 私信事件

PersonalMessageEvent

#### 事件类型

1001

#### 事件内容

EventBodyPersonalMessage

|字段|类型|说明|
|:---------------|:-----|:---------------|
|dodoId|string|来源DoDo号|
|personal|object|[个人信息](../api/message.md#个人信息)|
|messageId|string|消息ID|
|messageType|int|消息类型，1：文字消息，2：图片消息，3：视频消息|
|messageBody|object|[消息内容](../api/message.md#消息内容)|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "dodoId": "681856",
            "messageBody": {
                "content": "菜单"
            },
            "messageId": "963348f7-cf78-4229-b348-f7cf78622960",
            "messageType": 1,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            }
        },
        "eventId": "14ba9d75b8d744c3a9b0a343ea1b4057",
        "eventType": "1001",
        "timestamp": 1661153248945
    }
}
```