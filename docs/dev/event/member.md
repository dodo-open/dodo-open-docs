# 成员Event


## 成员加入事件

MemberJoinEvent

#### 事件类型

4001

#### 事件内容

EventBodyMemberJoin

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|dodoId|string|来源DoDo号|
|modifyTime|string|变动时间|


## 成员退出事件

MemberLeaveEvent

#### 事件类型

4002

#### 事件内容

EventBodyMemberLeave

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|dodoId|string|来源DoDo号|
|personal|object|[个人信息](../api/message.md#个人信息)|
|leaveType|int|退出类型，1：主动，2：被踢|
|operateDoDoId|string|操作者DoDo号（执行踢出操作的人）|
|modifyTime|string|变动时间|