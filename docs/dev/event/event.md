# 事件主体

## 接收方式

开发者当前可通过[WebSocket](./websocket.md)或[WebHook](./WebHook.md)接收各类事件

## 事件主体

EventSubject

|字段|类型|说明|
|:---------------|:-----|:---------------|
|type|int|数据类型，0：业务数据|
|data|object|业务数据|
|version|string|业务版本|

## 业务数据

EventSubjectDataBusiness

|字段|类型|说明|
|:---------------|:-----|:---------------|
|eventBody|object|事件内容|
|eventId|string|事件ID|
|eventType|string|[事件类型](#事件类型)|
|timestamp|long|接收时间戳|

## 事件类型

#### 频道消息

- 2001：[消息事件](./channel-message.md#消息事件)
- 3001：[消息表情反应事件](./channel-message.md#消息表情反应事件)
- 3002：[卡片消息按钮事件](./channel-message.md#卡片消息按钮事件)
- 3003：[卡片消息表单回传事件](./channel-message.md#卡片消息表单回传事件)
- 3004：[卡片消息列表回传事件](./channel-message.md#卡片消息列表回传事件)

#### 语音频道

- 5001：[成员加入语音频道事件](./channel-voice.md#成员加入语音频道事件)
- 5002：[成员退出语音频道事件](./channel-voice.md#成员退出语音频道事件)

#### 帖子频道

- 6001：[帖子发布事件](./channel-article.md#帖子发布事件)
- 6002：[帖子评论回复事件](./channel-article.md#帖子评论回复事件)

#### 成员

- 4001：[成员加入事件](./member.md#成员加入事件)
- 4002：[成员退出事件](./member.md#成员退出事件)
- 4003：[成员邀请事件](./member.md#成员邀请事件)

#### 赠礼系统

- 7001：[赠礼成功事件](./gift.md#赠礼成功事件)

#### 积分系统

- 8001：[积分变更事件](./integral.md#积分变更事件)

#### 商城系统

- 9001：[商品购买成功事件](./shop.md#商品购买成功事件)

#### 私信

- 1001：[私信事件](./personal.md#私信事件)