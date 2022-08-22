# 文字频道Event


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
|messageType|int|消息类型，1：文字消息，2：图片消息，3：视频消息，4：分享消息，5：文件消息|
|messageBody|object|[消息内容](../api/message.md#消息内容)|

#### 事件示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageBody": {
                "content": "菜单"
            },
            "messageId": "349552072708214784",
            "messageType": 1,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reference": {
                "dodoId": "",
                "messageId": "",
                "nickName": ""
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833ca",
        "eventType": "2001",
        "timestamp": 1661147708487
    }
}
```

  </CodeGroupItem>

 <CodeGroupItem title="2 - 图片消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageBody": {
                "height": 600,
                "isOriginal": 1,
                "url": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
                "width": 600
            },
            "messageId": "349573013735694336",
            "messageType": 2,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reference": {
                "dodoId": "",
                "messageId": "",
                "nickName": ""
            }
        },
        "eventId": "63aa5f9b454143feb40d6e1751bb58ef",
        "eventType": "2001",
        "timestamp": 1661152700468
    }
}
```

  </CodeGroupItem>

   <CodeGroupItem title="3 - 视频消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageBody": {
                "coverUrl": "https://video.imdodo.com/dodo/7f0a1979c818fa05cf7bdeae20aad24b.mp4?x-oss-process=video/snapshot,t_1000,f_png,w_0,h_0,m_fast,ar_auto",
                "duration": 0,
                "size": 8525133,
                "url": "https://video.imdodo.com/dodo/7f0a1979c818fa05cf7bdeae20aad24b.mp4"
            },
            "messageId": "349573165200400384",
            "messageType": 3,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reference": {
                "dodoId": "",
                "messageId": "",
                "nickName": ""
            }
        },
        "eventId": "42188777685c4acdb16902c7b795fe49",
        "eventType": "2001",
        "timestamp": 1661152736477
    }
}
```

  </CodeGroupItem>

   <CodeGroupItem title="4 - 分享消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageBody": {
                "jumpUrl": "https://www.imdodo.com/s/108015"
            },
            "messageId": "349573684677533696",
            "messageType": 4,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reference": {
                "dodoId": "",
                "messageId": "",
                "nickName": ""
            }
        },
        "eventId": "5a4392274538441c8d807c10a0120e2c",
        "eventType": "2001",
        "timestamp": 1661152861187
    }
}
```

  </CodeGroupItem>

   <CodeGroupItem title="5 - 文件消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageBody": {
                "name": "文件.txt",
                "size": 11,
                "url": "https://files.imdodo.com/dodo/06e0e6637d27b2622ab52022db713ce2.txt"
            },
            "messageId": "349574259985047552",
            "messageType": 5,
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reference": {
                "dodoId": "",
                "messageId": "",
                "nickName": ""
            }
        },
        "eventId": "40207e6664e946c6942aaed04c97f039",
        "eventType": "2001",
        "timestamp": 1661152998344
    }
}
```

  </CodeGroupItem>

</CodeGroup>


## 消息表情反应事件

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

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageId": "349552076344709120",
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "reactionEmoji": {
                "id": "128520",
                "type": 1
            },
            "reactionTarget": {
                "id": "349552076344709120",
                "type": 0
            },
            "reactionType": 1
        },
        "eventId": "c168e88cfd95435286806f04ec605d2f",
        "eventType": "3001",
        "timestamp": 1661147785397
    }
}
```


## 卡片消息按钮事件

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
|interactCustomId|string|交互自定义ID|
|value|string|Value|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "interactCustomId": "交互自定义id2",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageId": "349574728170024960",
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            },
            "value": "value"
        },
        "eventId": "71e644e163634acb96782ad17916a673",
        "eventType": "3002",
        "timestamp": 1661153117437
    }
}
```


## 卡片消息表单回传事件

CardMessageFormSubmitEvent

#### 事件类型

3003

#### 事件内容

EventBodyCardMessageFormSubmit

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID，频道私信触发时，返回频道私信消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|interactCustomId|string|交互自定义ID|
|formData|`List<object>`|[表单数据](#表单数据)|

#### 表单数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|key|string|选项自定义ID|
|value|string|Value|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "formData": [{
                    "key": "选项自定义id1",
                    "value": "111"
                }, {
                    "key": "选项自定义id2",
                    "value": "222"
                }
            ],
            "interactCustomId": "交互自定义id",
            "islandId": "44659",
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageId": "349574728170024960",
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            }
        },
        "eventId": "d307185efa224cf4913cbe13744da7e5",
        "eventType": "3003",
        "timestamp": 1661153143834
    }
}
```


## 卡片消息列表回传事件

CardMessageListSubmitEvent

#### 事件类型

3004

#### 事件内容

EventBodyCardMessageListSubmit

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源频道ID，频道私信触发时，返回频道私信消息ID|
|dodoId|string|来源DoDo号|
|messageId|string|来源消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|interactCustomId|string|交互自定义ID|
|listData|`List<object>`|列表数据|

#### 列表数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|name|string|选项名|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "channelId": "118506",
            "dodoId": "681856",
            "interactCustomId": "交互自定义id",
            "islandId": "44659",
            "listData": [{
                    "name": "选项1"
                }, {
                    "name": "选项2"
                }
            ],
            "member": {
                "joinTime": "2022-07-20 10:27:24",
                "nickName": "测试群昵称"
            },
            "messageId": "349574728170024960",
            "personal": {
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "nickName": "测试DoDo昵称",
                "sex": 1
            }
        },
        "eventId": "ab74cff21b0c4d4f86e86f1a7228c5f0",
        "eventType": "3004",
        "timestamp": 1661153160993
    }
}
```