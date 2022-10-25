# 机器人API


## 获取机器人信息

GetBotInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/bot/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|
 
#### 描述

用于获取当前机器人基础信息

#### 入参

无

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|clientId|string|机器人唯一标识|
|dodoSourceId|string|机器人DoDoID|
|nickName|string|机器人昵称|
|avatarUrl|string|机器人头像|

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": {
        "clientId": "88888888",
        "dodoSourceId": "555555",
        "nickName": "测试机器人",
        "avatarUrl": "https://img.imdodo.com/dodo/465752845d9c99055716816f364537e4.png"
    }
}
```


## 机器人退群

SetBotIslandLeave

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/bot/island/leave`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于操作当前机器人退出指定群

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandSourceId": "10001"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 获取机器人邀请列表

GetBotInviteList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/bot/invite/list`|<Badge type="warning" text="v2" vertical="middle" />|POST||

#### 描述

用于获取可邀请机器人的用户集合

::: tip
开发者平台-授权管理-授权范围需开启`仅被邀请可用`
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|pageSize|int|是|页大小，最大100|
|maxId|long|是|上一页最大ID值，为提升分页查询性能，需要传入上一页查询记录中的最大ID值，首页请传0|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据
|字段|类型|说明|
|:---------------|:-----|:---------------|
|maxId|object|最大ID值|
|list|`list<object>`|数据列表|

#### 列表项

|字段|类型|说明|
|:---------------|:-----|:---------------|
|dodoSourceId|string|DoDoID|
|nickName|string|DoDo昵称|
|avatarUrl|string|头像|

#### 入参示例

```json
{
    "pageSize": 100,
    "maxId": 0
}
```

#### 出参示例

```json
{
    "data": {
        "maxId": 12345,
        "list": [{
                "dodoSourceId": "666666",
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png"
            }
        ]
    },
    "status": 0,
    "message": "success"
}
```


## 添加成员到机器人邀请列表

SetBotInviteAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/bot/invite/add`|<Badge type="warning" text="v2" vertical="middle" />|POST||

#### 描述

用于添加成员到机器人邀请列表

::: tip
开发者平台-授权管理-授权范围需开启`仅被邀请可用`
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|dodoSourceId|string|是|DoDoID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "dodoSourceId": "666666"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 移除成员出机器人邀请列表

SetBotInviteRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/bot/invite/remove`|<Badge type="warning" text="v2" vertical="middle" />|POST||

#### 描述

用于移除成员出机器人邀请列表

::: tip
开发者平台-授权管理-授权范围需开启`仅被邀请可用`
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|dodoSourceId|string|是|DoDoID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "dodoSourceId": "666666"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```