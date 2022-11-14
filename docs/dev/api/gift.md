# 赠礼系统API


## 获取群收入

GetGiftAccount

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/gift/account/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定群的群收入信息

::: tip
只对开通了赠礼系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|totalIncome|decimal|总收入（里程）|
|settlableIncome|decimal|待结算收入（里程）|
|transferableIncome|decimal|可转账收入（里程）|

#### 入参示例

```json
{
    "islandSourceId": "101566"
}
```

#### 出参示例

```json
{
    "data": {
        "totalIncome": 2412.00,
        "settlableIncome": 0.00,
        "transferableIncome": 2412.00
    },
    "message": "success",
    "status": 0
}
```


## 获取成员分成管理

GetGiftShareRatioInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/gift/share/ratio/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定群的成员分成管理信息

::: tip
只对开通了赠礼系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|defaultRatio|object|默认抽成|
|roleRatioList|`list<object>`|身份组抽成列表|

#### 默认抽成

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandRatio|decimal|群抽成|
|userRatio|decimal|被打赏用户|
|platformRatio|decimal|平台抽成|

#### 身份组抽成列表项

|字段|类型|说明|
|:---------------|:-----|:---------------|
|roleId|string|身份组ID|
|roleName|string|身份组名称|
|islandRatio|decimal|群抽成|
|userRatio|decimal|被打赏用户|
|platformRatio|decimal|平台抽成|

#### 入参示例

```json
{
    "islandSourceId": "101566"
}
```

#### 出参示例

```json
{
    "data": {
        "defaultRatio": {
            "islandRatio": 3.00,
            "userRatio": 87.00,
            "platformRatio": 10.00
        },
        "roleRatioList": [{
                "roleId": "106568",
                "roleName": "超级管理员",
                "islandRatio": 20.00,
                "userRatio": 70.00,
                "platformRatio": 10.00
            }, {
                "roleId": "106858",
                "roleName": "小号专用",
                "islandRatio": 30.00,
                "userRatio": 60.00,
                "platformRatio": 10.00
            }
        ]
    },
    "message": "success",
    "status": 0
}
```


## 获取内容礼物列表

GetGiftList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/gift/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定内容的礼物列表

::: tip
只对开通了赠礼系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|targetType|int|是|内容类型，1：消息，2：帖子|
|targetId|string|是|内容ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|`list<object>`|数据列表|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|giftId|string|礼物ID|
|giftCount|long|礼物数量|
|giftTotalAmount|decimal|礼物总价值（铃钱）|

#### 入参示例

```json
{
    "targetType": 1,
    "targetId": "377470609502158848"
}
```

#### 出参示例

```json
{
    "data": [{
            "giftId": "1",
            "giftCount": 301,
            "giftTotalAmount": 301.00
        }, {
            "giftId": "2",
            "giftCount": 221,
            "giftTotalAmount": 2210.00
        }
    ],
    "message": "success",
    "status": 0
}
```


## 获取内容礼物内成员列表

GetGiftMemberList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/gift/member/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于获取指定内容的成员列表

::: tip
只对开通了赠礼系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|targetType|int|是|内容类型，1：消息，2：帖子|
|targetId|string|是|内容ID|
|giftId|string|是|礼物ID|
|pageSize|int|是|页大小，最大100|
|maxId|long|是|上一页最大ID值，为提升分页查询性能，需要传入上一页查询记录中的最大ID值，首页请传0|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|maxId|object|最大ID值|
|list|`list<object>`|数据列表|

#### 列表项

|字段|类型|说明|
|:---------------|:-----|:---------------|
|dodoSourceId|string|DoDoID|
|nickName|string|群昵称|
|giftCount|long|礼物数量|

#### 入参示例

```json
{
    "targetType": 1,
    "targetId": "377470609502158848",
    "giftId": "1",
    "pageSize": 20,
    "maxId": 0,
}
```

#### 出参示例

```json
{
    "data": {
        "list": [{
                "dodoSourceId": "5868",
                "nickName": "测试群昵称",
                "giftCount": 301
            },
            {
                "dodoSourceId": "5869",
                "nickName": "测试群昵称2",
                "giftCount": 100
            }
        ],
        "maxId": 2
    },
    "message": "success",
    "status": 0
}
```


## 获取内容礼物总值列表

GetGiftGrossValueList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/gift/gross/value/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于获取指定内容的礼物总值列表

::: tip
只对开通了赠礼系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|targetType|int|是|内容类型，1：消息，2：帖子|
|targetId|string|是|内容ID|
|pageSize|int|是|页大小，最大100|
|maxId|long|是|上一页最大ID值，为提升分页查询性能，需要传入上一页查询记录中的最大ID值，首页请传0|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|maxId|object|最大ID值|
|list|`list<object>`|数据列表|

#### 列表项

|字段|类型|说明|
|:---------------|:-----|:---------------|
|dodoSourceId|string|DoDoID|
|nickName|string|群昵称|
|giftTotalAmount|decimal|赠礼总值（铃钱）|

#### 入参示例

```json
{
    "targetType": 1,
    "targetId": "377470609502158848",
    "pageSize": 20,
    "maxId": 0,
}
```

#### 出参示例

```json
{
    "data": {
        "list": [{
                "dodoSourceId": "5868",
                "nickName": "测试群昵称",
                "giftTotalAmount": 2511.00
            },
            {
                "dodoSourceId": "5869",
                "nickName": "测试群昵称2",
                "giftTotalAmount": 1211.00
            }
        ],
        "maxId": 2
    },
    "message": "success",
    "status": 0
}
```