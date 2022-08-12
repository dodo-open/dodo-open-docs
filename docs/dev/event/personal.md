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