# 身份组API（Modify）

## 获取身份组列表（Modify）

GetRoleList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定群下身份组集合

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|

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
|position|int|身份组排序位置，数值越大，身份组等级越高|
|permission|string|[身份组权限值（16进制）](../start/permission.md#权限值说明)|
|memberCount|long|身份组成员数|

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
    "message": "success",
    "data": [{
            "roleId": "12345678",
            "roleName": "测试身份组",
            "roleColor": "#ffffff",
            "position": 1,
            "permission": "1f",
            "memberCount": 100
        }
    ]
}
```


## 创建身份组

SetRoleAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/add`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下创建指定身份组

:::tip
按DoDo群限制，10次/30秒
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|roleName|string|否|身份组名称，非必传，不传时设置为`新的身份组`，不能大于32个字符或16个汉字|
|roleColor|string|否|身份组颜色，非必传，不传时默认为`#333333`，16进制HEX格式颜色码|
|position|int|否|身份组排序位置，非必传，不传时默认为1，不可传比机器人身份组大的排序值|
|permission|string|否|[身份组权限值（16进制）](../start/permission.md#权限值说明)，非必传，不传时默认为0|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|roleId|string|身份组ID|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "roleName": "测试身份组",
    "roleColor": "#ffffff",
    "position": 1,
    "permission": "1f"
}
```

#### 出参示例

```json
{
    "status": 0,
    "message": "success",
    "data": {
        "roleId": "12345678"
    }
}
```


## 编辑身份组

SetRoleEdit

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/edit`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下编辑指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|roleId|string|是|身份组ID|
|roleName|string|否|身份组名称，非必传，不传时默认不改动，不能大于32个字符或16个汉字|
|roleColor|string|否|身份组颜色，非必传，不传时默认不改动，16进制HEX格式颜色码|
|position|int|否|身份组排序位置，非必传，不传时默认不改动，不可传比机器人身份组大的排序值|
|permission|string|否|[身份组权限值（16进制）](../start/permission.md#权限值说明)，非必传，不传时默认不改动|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "roleId": "12345678",
    "roleName": "测试身份组",
    "roleColor": "#ffffff",
    "position": 1,
    "permission": "1f"
}
```

#### 出参示例

```json
{
    "status": 0,
    "message": "success"
}
```


## 删除身份组

SetRoleRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/remove`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下删除指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|roleId|string|是|身份组ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "roleId": "12345678"
}
```

#### 出参示例

```json
{
    "status": 0,
    "message": "success"
}
```


## 获取身份组成员列表（Add）

GetRoleMemberList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/member/list`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于获取指定身份组的成员列表

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|roleId|string|是|身份组ID|
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

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "roleId": "12345678",
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
                "nickName": "测试群昵称"
            },
            {
                "dodoSourceId": "5869",
                "nickName": "测试群昵称2"
            }
        ],
        "maxId": 2
    },
    "message": "success",
    "status": 0
}
```


## 赋予成员身份组

SetRoleMemberAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/member/add`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下为指定用户赋予指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|dodoSourceId|string|是|DoDoID|
|roleId|string|是|身份组ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "dodoSourceId": "666666",
    "roleId": "12345678"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```


## 取消成员身份组

SetRoleMemberRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v2/role/member/remove`|<Badge type="warning" text="v2" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下为指定用户取消指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandSourceId|string|是|群ID|
|dodoSourceId|string|是|DoDoID|
|roleId|string|是|身份组ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandSourceId": "10001",
    "dodoSourceId": "666666",
    "roleId": "12345678"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```