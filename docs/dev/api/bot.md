# 机器人API


## 获取机器人信息

GetBotInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/bot/info`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|
 
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
|dodoId|string|机器人DoDo号|
|nickName|string|机器人昵称|
|avatarUrl|string|机器人头像|

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": {
        "clientId": "88888888",
        "dodoId": "555555",
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
|`/api/v1/bot/island/leave`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|

#### 描述

用于操作当前机器人退出指定群

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```