# 成员Event


## 成员加入事件

MemberJoinEvent

#### 触发时机

新用户加群时

#### 事件类型

4001

#### 事件内容

EventBodyMemberJoin

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|modifyTime|string|变动时间|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "modifyTime": "2022-08-22 15:28:49"
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "4001",
        "timestamp": 1661153329922
    },
    "version": "v2"
}
```

## 成员退出事件

MemberLeaveEvent

#### 触发时机

用户离开群 / 被踢出群 / 被封禁时

#### 事件类型

4002

#### 事件内容

EventBodyMemberLeave

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|personal|object|[个人信息](../api/message.md#个人信息)|
|leaveType|int|退出类型，1：主动，2：被踢|
|operateDodoSourceId|string|操作者DoDoID（执行踢出操作的人）|
|modifyTime|string|变动时间|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "dodoSourceId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "leaveType": 1,
            "operateDodoSourceId": "",
            "modifyTime": "2022-08-22 15:28:04"
        },
        "eventId": "095ff9a42c8347758af963d37ea52073",
        "eventType": "4002",
        "timestamp": 1661153284690
    },
    "version": "v2"
}
```


## 成员邀请事件

MemberInviteEvent

#### 触发时机

成员通过邀请链接进群 / 主动填写邀请码时

#### 事件类型

4003

#### 事件内容

EventBodyMemberInvite

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|邀请人DoDoID|
|dodoIslandNickName|string|邀请人群昵称|
|toDodoSourceId|string|被邀请人DoDoID|
|toDodoIslandNickName|string|被邀请人群昵称|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "101745",
            "dodoSourceId": "5868",
            "dodoIslandNickName": "测试群昵称1",
            "toDodoSourceId": "6252",
            "toDodoIslandNickName": "测试群昵称2"
        },
        "eventId": "b8049ac1b2ae4e72ae51da9d4f8b522e",
        "eventType": "4003",
        "timestamp": 1671785377140
    },
    "version": "v2"
}
```