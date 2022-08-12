# 事件主体


## 事件主体

EventSubject

|字段|类型|说明|
|:---------------|:-----|:---------------|
|type|int|数据类型，0：[业务数据](#业务数据)|
|data|object|数据内容|

## 业务数据

EventSubjectDataBusiness

|字段|类型|说明|
|:---------------|:-----|:---------------|
|eventId|string|事件ID|
|eventType|string|[事件类型](#事件类型)|
|eventBody|object|事件内容|
|timestamp|long|发送时间戳|

## 事件类型

- 1001：[私信事件](./personal.md#私信事件)
- 2001：[消息事件](./channel-text.md#消息事件)
- 3001：[消息表情反应事件](./channel-text.md#消息表情反应事件)
- 4001：[成员加入事件](./member.md#成员加入事件)
- 4002：[成员退出事件](./member.md#成员退出事件)
<!-- - 3002：[卡片消息按钮点击事件](./channel-text.md#卡片消息按钮点击事件)
- 3003：[卡片消息表单回传事件](./channel-text.md#卡片消息表单回传事件)
- 3004：[卡片消息列表回传事件](./channel-text.md#卡片消息列表回传事件) -->