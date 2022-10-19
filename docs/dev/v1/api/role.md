# 身份组API

## 获取身份组列表

GetRoleList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/role/list`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|

#### 描述

用于获取指定群下身份组集合

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|

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
|permission|string|[身份组权限值（16进制）](../start/permission.md#权限值说明)|

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


## 创建身份组

SetRoleAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/role/add`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下创建指定身份组

:::tip
按DoDo群限制，10次/30秒
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
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
    "islandId": "10001",
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
|`/api/v1/role/edit`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下编辑指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
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
    "islandId": "10001",
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
|`/api/v1/role/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下删除指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|roleId|string|是|身份组ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
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


## 赋予成员身份组

SetRoleMemberAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/role/member/add`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下为指定用户赋予指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|dodoId|string|是|DoDo号|
|roleId|string|是|身份组ID|

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
|`/api/v1/role/member/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理权限与身份组|

#### 描述

用于在指定群下为指定用户取消指定身份组

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|dodoId|string|是|DoDo号|
|roleId|string|是|身份组ID|

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