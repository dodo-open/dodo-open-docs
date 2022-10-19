# 成员API


## 获取成员列表

GetMemberList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|群内开通成员隐私保护模式时，需要拥有成员管理-管理成员权限|

#### 描述

用于获取指定群的成员集合

::: tip
群内开通成员隐私保护模式时，需要拥有成员管理-管理成员权限
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
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
|dodoId|string|DoDo号|
|nickName|string|群昵称|
|personalNickName|string|DoDo昵称|
|avatarUrl|string|头像|
|joinTime|string|加群时间|
|sex|int|性别，-1：保密，0：女，1：男|
|level|int|等级|
|isBot|int|是否机器人，0：否，1：是|
|onlineDevice|int|在线设备，0：无，1：PC在线，2：手机在线|
|onlineStatus|int|在线状态，0：离线，1：在线，2：请勿打扰，3：离开|

#### 入参示例

```json
{
    "islandId": "10001",
    "pageSize": 100,
    "maxId": 0,
}
```

#### 出参示例

```json
{
    "data": {
        "maxId": 12345,
        "list": [{
                "dodoId": "666666",
                "nickName": "测试群昵称",
                "personalNickName": "测试DoDo昵称",
                "avatarUrl": "https://img.doufan.tv/dodo/71922683339a16fa6958bd00263f81ea.png",
                "joinTime": "2022-02-02 02:02:02",
                "sex": 1,
                "level": 1,
                "isBot": 0,
                "onlineDevice": 1,
                "onlineStatus": 1
            }
        ]
    },
    "status": 0,
    "message": "success"
}
```


## 获取成员信息

GetMemberInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|群内开通成员隐私保护模式时，需要拥有成员管理-管理成员权限|

#### 描述

用于获取指定群下指定成员的详细信息

::: tip
群内开通成员隐私保护模式时，需要拥有成员管理-管理成员权限
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandNo|string|群号|
|dodoId|string|DoDo号|
|nickName|string|群昵称|
|personalNickName|string|DoDo昵称|
|avatarUrl|string|头像|
|joinTime|string|加群时间|
|sex|int|性别，-1：保密，0：女，1：男|
|level|int|等级|
|isBot|int|是否机器人，0：否，1：是|
|onlineDevice|int|在线设备，0：无，1：PC在线，2：手机在线|
|onlineStatus|int|在线状态，0：离线，1：在线，2：请勿打扰，3：离开|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666"
}
```

#### 出参示例

```json
{
    "data": {
        "islandNo": "100011",
        "dodoId": "666666",
        "nickName": "测试群昵称",
        "personalNickName": "测试DoDo昵称",
        "avatarUrl": "https://img.doufan.tv/dodo/71922683339a16fa6958bd00263f81ea.png",
        "joinTime": "2022-02-22 02:02:02",
        "sex": 1,
        "level": 1,
        "isBot": 0,
        "onlineDevice": 1,
        "onlineStatus": 1,
    },
    "status": 0,
    "message": "success"
}
```


## 获取成员身份组列表

GetMemberRoleList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/role/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定群下指定成员拥有的身份组集合

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|`list<object>`|数据列表|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|roleId|string|身份组ID|
|roleName|string|身份组名称|
|roleColor|string|身份组颜色|
|position|int|身份组排序位置|
|permission|string|身份组权限值（16进制）|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666"
}
```

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": [{
            "roleId": "12345678",
            "roleName": "测试身份组",
            "roleColor": "#ffffff",
            "position": 1,
            "permission": "1f"
        }
    ]
}
```


## 获取成员邀请信息

GetMemberInvitationInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/invitation/info`|<Badge type="warning" text="v2" vertical="middle" />|POST|高级权限-超级管理员|

#### 描述

用于获取指定群下指定成员的邀请信息

::: tip
只对开通了邀请系统的群有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|dodoId|string|DoDo号|
|nickName|string|群昵称|
|invitationCount|int|邀请人数|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666"
}
```

#### 出参示例

```json
{
    "data": {
        "dodoId": "666666",
        "nickName": "测试群昵称",
        "invitationCount": 100
    },
    "status": 0,
    "message": "success"
}
```


## 编辑成员群昵称

SetMemberNickNameEdit

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/nickname/edit`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于在指定群下编辑指定成员的群昵称

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|
|nickName|string|是|群昵称，昵称不能大于32个字符或16个汉字|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666",
    "nickName": "群昵称编辑测试"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 禁言成员

SetMemberMuteAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/mute/add`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于在指定群下禁言指定成员

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|
|duration|int|是|禁言时长（秒），最长7天|
|reason|string|否|禁言原因，原因不能大于64个字符或32个汉字|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666",
    "duration": 30,
    "reason": "禁言测试"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```

## 取消成员禁言

SetMemberMuteRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/mute/remove`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于在指定群下取消指定成员的禁言

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 永久封禁成员

SetMemberBanAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/ban/add`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于在指定群下永久封禁指定成员

::: tip
按群限制，1次/10秒
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|
|noticeChannelId|string|否|通知频道ID|
|reason|string|否|封禁理由，理由不能大于64个字符或32个汉字|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666",
    "noticeChannelId": "12345",
    "reason": "封禁测试"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 取消成员永久封禁

SetMemberBanRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/member/ban/remove`|<Badge type="warning" text="v2" vertical="middle" />|POST|成员管理-管理成员|

#### 描述

用于在指定群下取消指定成员的永久封禁

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群ID|
|dodoId|string|是|DoDo号|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```