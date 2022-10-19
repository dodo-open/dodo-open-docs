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
|islandId|string|来源群ID|
|dodoId|string|来源DoDo号|
|modifyTime|string|变动时间|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandId": "44659",
            "dodoId": "681856",
            "modifyTime": "2022-08-22 15:28:49"
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "4001",
        "timestamp": 1661153329922
    }
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
|islandId|string|来源群ID|
|dodoId|string|来源DoDo号|
|personal|object|[个人信息](../api/message.md#个人信息)|
|leaveType|int|退出类型，1：主动，2：被踢|
|operateDoDoId|string|操作者DoDo号（执行踢出操作的人）|
|modifyTime|string|变动时间|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandId": "44659",
            "dodoId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "leaveType": 1,
            "operateDoDoId": "",
            "modifyTime": "2022-08-22 15:28:04"
        },
        "eventId": "095ff9a42c8347758af963d37ea52073",
        "eventType": "4002",
        "timestamp": 1661153284690
    }
}
```