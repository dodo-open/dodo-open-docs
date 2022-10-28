# 语音频道Event


## 成员加入语音频道事件

ChannelVoiceMemberJoinEvent

#### 触发时机

用户加入语音频道时

#### 事件类型

5001

#### 事件内容

EventBodyChannelVoiceMemberJoin

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源语音频道ID|
|dodoSourceId|string|来源DoDoID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "123456",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            }
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "5001",
        "timestamp": 1661153329922
    }
}
```


## 成员退出语音频道事件

ChannelVoiceMemberLeaveEvent

#### 触发时机

用户退出语音频道时

#### 事件类型

5002

#### 事件内容

EventBodyChannelVoiceMemberLeave

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源语音频道ID|
|dodoSourceId|string|来源DoDoID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "123456",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            }
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "5002",
        "timestamp": 1661153329922
    }
}
```