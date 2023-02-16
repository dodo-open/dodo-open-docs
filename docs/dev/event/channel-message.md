# 频道消息Event（Modify）


## 消息事件

ChannelMessageEvent

#### 触发时机

用户在频道内发送消息 / 回复消息 / 分享内容时

::: tip
不接收机器人的频道消息，机器人之间不会互相触发消息事件！
:::

##### 需要权限

通用权限-查看频道

#### 事件类型

2001

#### 事件内容

EventBodyChannelMessage

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|dodoSourceId|string|来源DoDoID|
|messageId|string|消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|reference|object|[回复信息](../api/message.md#回复信息)|
|messageType|int|消息类型，1：文字消息，2：图片消息，3：视频消息，4：分享消息，5：文件消息，6：卡片消息，7：红包消息|
|messageBody|object|[消息内容](../api/message.md#消息内容)|

#### 事件示例

<CodeGroup>
  <CodeGroupItem title="1 - 文字消息" active>

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214781",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 1,
            "messageBody": {
                "content": "菜单"
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c1",
        "eventType": "2001",
        "timestamp": 1661147708487
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
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214782",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 2,
            "messageBody": {
                "url": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
                "width": 600,
                "height": 600,
                "isOriginal": 1
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c2",
        "eventType": "2001",
        "timestamp": 1661147708487
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
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214783",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 3,
            "messageBody": {
                "url": "https://video.imdodo.com/dodo/7f0a1979c818fa05cf7bdeae20aad24b.mp4",
                "coverUrl": "https://img.imdodo.com/dodo/42c330887d2f4fa5bebbde53653443cd.png",
                "duration": 0,
                "size": 8525133
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c3",
        "eventType": "2001",
        "timestamp": 1661147708487
    },
    "version": "v2"
}
```

  </CodeGroupItem>

   <CodeGroupItem title="4 - 分享消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214784",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 4,
            "messageBody": {
                "jumpUrl": "https://www.imdodo.com/s/108015"
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c4",
        "eventType": "2001",
        "timestamp": 1661147708487
    },
    "version": "v2"
}
```

  </CodeGroupItem>

   <CodeGroupItem title="5 - 文件消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214785",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 5,
            "messageBody": {
                "url": "https://files.imdodo.com/dodo/06e0e6637d27b2622ab52022db713ce2.txt",
                "name": "文件.txt",
                "size": 11
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c5",
        "eventType": "2001",
        "timestamp": 1661147708487
    },
    "version": "v2"
}
```

  </CodeGroupItem>

   <CodeGroupItem title="6 - 卡片消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214786",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 6,
            "messageBody": {
                "content": "附加文本",
                "card": {
                    "type": "card",
                    "theme": "grey",
                    "title": "发送卡片消息",
                    "components": [{
                            "type": "section",
                            "text": {
                                "type": "dodo-md",
                                "content": "卡片文本内容"
                            }
                        }
                    ]
                }
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c6",
        "eventType": "2001",
        "timestamp": 1661147708487
    },
    "version": "v2"
}
```

  </CodeGroupItem>

   <CodeGroupItem title="7 - 红包消息">

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552072708214784",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reference": {
                "messageId": "",
                "dodoSourceId": "",
                "nickName": ""
            },
            "messageType": 7,
            "messageBody": {
                "type": 1,
                "count": 2,
                "totalAmount": 10.00,
                "receiverType": 2,
                "roleIdList":["10000","20000"]
            }
        },
        "eventId": "2b02565727ca47c6a03e41204e9833c7",
        "eventType": "2001",
        "timestamp": 1661147708487
    },
    "version": "v2"
}
```

  </CodeGroupItem>

</CodeGroup>


## 消息表情反应事件

MessageReactionEvent

#### 触发时机

用户在机器人发送的消息上添加表情反应时

::: tip
当前机器人消息上添加反应触发的事件只会推送给当前机器人！
:::

##### 需要权限

通用权限-查看频道

#### 事件类型

3001

#### 事件内容

EventBodyMessageReaction

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|dodoSourceId|string|来源DoDoID|
|messageId|string|来源消息ID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|reactionTarget|object|[反应对象](../api/message.md#反应对象)|
|reactionEmoji|object|[反应表情](../api/message.md#消息表情)|
|reactionType|int|反应类型，0：删除，1：新增|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349552076344709120",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "reactionTarget": {
                "type": 0,
                "id": "349552076344709120"
            },
            "reactionEmoji": {
                "type": 1,
                "id": "128520"
            },
            "reactionType": 1
        },
        "eventId": "c168e88cfd95435286806f04ec605d2f",
        "eventType": "3001",
        "timestamp": 1661147785397
    },
    "version": "v2"
}
```


## 卡片消息按钮事件

CardMessageButtonClickEvent

#### 触发时机

用户在机器人发送的卡片消息上点击了某个按钮时

::: tip
当前机器人消息上点击按钮触发的事件只会推送给当前机器人！
:::

##### 需要权限

通用权限-查看频道

#### 事件类型

3002

#### 事件内容

EventBodyCardMessageButtonClick

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|dodoSourceId|string|来源DoDoID|
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
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349574728170024960",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "interactCustomId": "交互自定义id2",
            "value": "value"
        },
        "eventId": "71e644e163634acb96782ad17916a673",
        "eventType": "3002",
        "timestamp": 1661153117437
    },
    "version": "v2"
}
```


## 卡片消息表单回传事件

CardMessageFormSubmitEvent

#### 触发时机

用户在机器人发送的卡片消息上提交了某个表单时

::: tip
当前机器人消息上提交表单触发的事件只会推送给当前机器人！
:::

##### 需要权限

通用权限-查看频道

#### 事件类型

3003

#### 事件内容

EventBodyCardMessageFormSubmit

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|dodoSourceId|string|来源DoDoID|
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
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349574728170024960",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "interactCustomId": "交互自定义id",
            "formData": [{
                    "key": "选项自定义id1",
                    "value": "111"
                }, {
                    "key": "选项自定义id2",
                    "value": "222"
                }
            ]
        },
        "eventId": "d307185efa224cf4913cbe13744da7e5",
        "eventType": "3003",
        "timestamp": 1661153143834
    },
    "version": "v2"
}
```


## 卡片消息列表回传事件

CardMessageListSubmitEvent

#### 触发时机

用户在机器人发送的卡片消息上提交了某个列表时

::: tip
当前机器人消息上提交列表触发的事件只会推送给当前机器人！
:::

##### 需要权限

通用权限-查看频道

#### 事件类型

3004

#### 事件内容

EventBodyCardMessageListSubmit

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|dodoSourceId|string|来源DoDoID|
|messageId|string|来源消息ID，频道私信触发时，返回频道私信消息ID|
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
            "islandSourceId": "44659",
            "channelId": "118506",
            "dodoSourceId": "681856",
            "messageId": "349574728170024960",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "interactCustomId": "交互自定义id",
            "listData": [{
                    "name": "选项1"
                }, {
                    "name": "选项2"
                }
            ],
        },
        "eventId": "ab74cff21b0c4d4f86e86f1a7228c5f0",
        "eventType": "3004",
        "timestamp": 1661153160993
    },
    "version": "v2"
}
```