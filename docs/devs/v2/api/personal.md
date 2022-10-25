# 私信API

## 发送私信

SetPersonalMessageSend

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/personal/message/send`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|

#### 描述

用于向指定用户发送私信消息

:::tip
按私聊对象限制，10次/30秒

按机器人限制，1W次/天
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|dodoSourceId|string|是|DoDoID|
|messageType|int|是|消息类型，1：文字消息，2：图片消息，3：视频消息|
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
|messageId|string|消息ID|

#### 入参示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "dodoSourceId": "1000101",
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
    "dodoSourceId": "1000101",
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
    "dodoSourceId": "1000101",
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