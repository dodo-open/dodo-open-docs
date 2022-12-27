# 私信Event


## 私信事件

PersonalMessageEvent

#### 触发时机

用户通过私聊会话 / 通过群进入私聊会话私聊机器人时

::: tip
通过群进入机器人私信会话时，才会有来源群ID
:::

#### 事件类型

1001

#### 事件内容

EventBodyPersonalMessage

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|messageId|string|消息ID|
|messageType|int|消息类型，1：文字消息，2：图片消息，3：视频消息|
|messageBody|object|[消息内容](../api/message.md#消息内容)|

#### 事件示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "101566",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "messageId": "963348f7-cf78-4229-b348-f7cf78622961",
            "messageType": 1,
            "messageBody": {
                "content": "菜单"
            }
        },
        "eventId": "14ba9d75b8d744c3a9b0a343ea1b4051",
        "eventType": "1001",
        "timestamp": 1661153248945
    },
    "version": "v2"
}
```

  </CodeGroupItem>

 <CodeGroupItem title="2 - 图片消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "101566",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "messageId": "963348f7-cf78-4229-b348-f7cf78622962",
            "messageType": 2,
            "messageBody": {
                "url": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
                "width": 600,
                "height": 600,
                "isOriginal": 1
            }
        },
        "eventId": "14ba9d75b8d744c3a9b0a343ea1b4052",
        "eventType": "1001",
        "timestamp": 1661153248945
    },
    "version": "v2"
}
```

  </CodeGroupItem>

   <CodeGroupItem title="3 - 视频消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "101566",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "messageId": "963348f7-cf78-4229-b348-f7cf78622963",
            "messageType": 3,
            "messageBody": {
                "url": "https://video.imdodo.com/dodo/7f0a1979c818fa05cf7bdeae20aad24b.mp4",
                "coverUrl": "https://img.imdodo.com/dodo/42c330887d2f4fa5bebbde53653443cd.png",
                "duration": 0,
                "size": 8525133
            }
        },
        "eventId": "14ba9d75b8d744c3a9b0a343ea1b4053",
        "eventType": "1001",
        "timestamp": 1661153248945
    },
    "version": "v2"
}
```

  </CodeGroupItem>

</CodeGroup>