# 积分系统API（Add）


## 获取成员积分信息（Add）

GetIntegralInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/integral/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|高级权限-超级管理员|

#### 描述

用于获取指定群下指定成员的积分信息

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|dodoSourceId|string|是|DoDoID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|integralBalance|long|积分余额|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "dodoSourceId": "666666"
}
```

#### 出参示例

```json
{
    "data": {
        "integralBalance": 100
    },
    "status": 0,
    "message": "success"
}
```


## 管理成员积分（Add）

SetIntegralEdit

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/integral/edit`|<Badge type="warning" text="v2" vertical="middle" />|POST|高级权限-超级管理员|

#### 描述

用于获取指定群下指定成员的积分信息

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|dodoSourceId|string|是|DoDoID|
|operateType|int|是|管理类型，1：发放积分，2：扣除积分|
|integral|long|是|积分，零和正整数1千亿内|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|integralBalance|long|积分余额|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "dodoSourceId": "666666",
    "operateType": 1,
    "integral": 1000
}
```

#### 出参示例

```json
{
    "data": {
        "integralBalance": 2000
    },
    "status": 0,
    "message": "success"
}
```