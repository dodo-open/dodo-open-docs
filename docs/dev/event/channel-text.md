# 文字频道Event（Modify）


## 消息事件

ChannelMessageEvent

::: tip
不接收其他机器人的频道消息，即机器人之间不会互相触发消息事件！
:::

#### 事件类型

2001

#### 事件内容

EventBodyChannelMessage

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID|
|dodoId|string|来源DoDo号|
|messageId|string|消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|reference|object|[回复信息](../api/message.md#回复信息)|
|messageType|int|消息类型，1：文字消息，2：图片消息，3：视频消息，4：分享消息，5：文件消息，6：卡片消息|
|messageBody|object|[消息内容](../api/message.md#消息内容)|


## 消息表情反应事件（Modify）

MessageReactionEvent

#### 事件类型

3001

#### 事件内容

EventBodyMessageReaction

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID|
|reactionTarget|object|[反应对象](../api/message.md#反应对象)|
|reactionEmoji|object|[反应表情](../api/message.md#消息表情)|
|reactionType|int|反应类型，0：删除，1：新增|


## 卡片消息按钮点击事件（Add）

CardMessageButtonClickEvent

#### 事件类型

3002

#### 事件内容

EventBodyCardMessageButtonClick

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID，频道私信触发时，返回频道私信消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|buttonId|string|按钮ID|
|value|string|Value|


## 卡片消息表单回传事件（Add）

CardMessageFormEchoEvent

#### 事件类型

3003

#### 事件内容

EventBodyCardMessageFormEcho

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID，频道私信触发时，返回频道私信消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|formId|string|表单ID|
|formData|`List<object>`|[表单数据](#表单数据)|

#### 表单数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|name|string|字段名|
|value|string|字段值|


## 卡片消息列表回传事件（Add）

CardMessageListEchoEvent

#### 事件类型

3004

#### 事件内容

EventBodyCardMessageListEcho

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID，频道私信触发时，返回频道私信消息ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|listId|string|列表ID|
|listData|`List<string>`|列表数据|