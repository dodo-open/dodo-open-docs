# 事件主体

## 接收方式

开发者当前可通过[WebSocket](./websocket.md)接收各类事件

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

#### 文字频道

- 2001：[消息事件](./channel-text.md#消息事件)
- 3001：[消息表情反应事件](./channel-text.md#消息表情反应事件)
- 3002：[卡片消息按钮事件](./channel-text.md#卡片消息按钮事件)
- 3003：[卡片消息表单回传事件](./channel-text.md#卡片消息表单回传事件)
- 3004：[卡片消息列表回传事件](./channel-text.md#卡片消息列表回传事件)

#### 语音频道

- 5001：[成员加入语音频道事件](./channel-voice.md#成员加入语音频道事件)
- 5002：[成员退出语音频道事件](./channel-voice.md#成员退出语音频道事件)

#### 帖子频道

- 6001：[帖子发布事件](./channel-article.md#帖子发布事件)
- 6002：[帖子评论回复事件](./channel-article.md#帖子评论回复事件)

#### 成员

- 4001：[成员加入事件](./member.md#成员加入事件)
- 4002：[成员退出事件](./member.md#成员退出事件)

#### 私信

- 1001：[私信事件](./personal.md#私信事件)
