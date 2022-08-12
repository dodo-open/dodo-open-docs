# 文字频道API


## 发送消息

SetChannelMessageSend

:::tip
按频道限制，60次/30秒，该群已被限制发言频率处罚时，1分钟内仅可发送1条消息
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/message/send`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、文字频道-发送消息|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|channelId|string|是|频道ID|
|messageType|int|是|消息类型，1：文字消息，2：图片消息，3：视频消息<!--，6：卡片消息-->|
|messageBody|object|是|[消息内容](./message.md#消息内容)|
|referencedMessageId|string|否|回复消息ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|messageId|string|消息ID|

#### 入参示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "channelId": "1000101",
    "messageType": 1,
    "messageBody": {
        "content": "测试文字消息"
    }
}
```

  </CodeGroupItem>

 <CodeGroupItem title="2 - 图片消息">

```json
{
    "channelId": "1000101",
    "messageType": 2,
    "messageBody": {
        "url": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
        "width": 500,
        "height": 500,
        "isOriginal": 1
    }
}
```

  </CodeGroupItem>

   <CodeGroupItem title="3 - 视频消息">

```json
{
    "channelId": "1000101",
    "messageType": 3,
    "messageBody": {
        "url": "https://video.imdodo.com/dodo/ff85c752daf7d67884cb9ad3921a5d01.mp4",
        "coverUrl": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
        "duration": 100,
        "size": 100
    }
}
```

  </CodeGroupItem>

<!--<CodeGroupItem title="6 - 卡片消息">

```json
{
    "channelId": "1000101",
    "messageType": 3,
    "messageBody": {
        "card": "xxx"
    }
}
```

  </CodeGroupItem>-->

</CodeGroup>

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": {
        "messageId": "111111111111111111"
    }
}
```


## 编辑消息

SetChannelMessageEdit

:::tip
按频道限制，1次/秒，该群已被限制发言频率处罚时，1分钟内仅可编辑1条消息
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/message/edit`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、文字频道-发送消息|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|messageId|string|是|待编辑的消息ID<!--，不可编辑频道私信消息ID-->|
|messageType|int|是|消息类型，1：文字消息<!--，6：卡片消息-->|
|messageBody|object|是|[消息内容](./message.md#消息内容)|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|messageId|string|待编辑的消息ID|

#### 入参示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "messageId": "111111111111111111",
    "messageType": 1,
    "messageBody": {
        "content": "测试文字消息"
    }
}
```

  </CodeGroupItem>

<!--   <CodeGroupItem title="6 - 卡片消息">

```json
{
    "channelId": "1000101",
    "messageType": 3,
    "messageBody": {
        "card": "xxx"
    }
}
```

  </CodeGroupItem>-->

</CodeGroup>

#### 出参示例

```json
{
    "status": 0,
    "message": "success"
}
```


## 撤回消息

SetChannelMessageWithdraw

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/message/withdraw`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、文字频道-管理消息|
    
#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|messageId|string|是|消息ID|
|reason|string|否|撤回理由，理由不能大于64个字符或32个汉字|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "messageId": "111111111111111111",
    "reason": "撤回测试"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 添加表情反应

SetChannelMessageReactionAdd

:::tip
在指定频道消息上添加反应表情，只能添加机器人自身的，按频道限制，60次/30秒
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/message/reaction/add`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、文字频道-添加新反应|
    
#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|messageId|string|是|消息ID|
|emoji|object|是|[反应表情](./message.md#消息表情)|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "messageId": "111111111111111111",
    "emoji": {
        "type": 1,
        "id": "128516"
    }
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 取消表情反应

SetChannelMessageReactionRemove

:::tip
移除指定频道消息上的反应表情，可移除其他成员的、机器人自身的，按频道限制，60次/30秒
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/message/reaction/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、文字频道-管理消息|
    
#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|messageId|string|是|消息ID|
|emoji|object|是|[反应表情](./message.md#消息表情)|
|dodoId|string|否|DoDo号，不传或传空时表示移除机器人自身的反应|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "messageId": "111111111111111111",
    "emoji": {
        "type": 1,
        "id": "128516"
    },
    "dodoId": "666666"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```