# 私有API

## 移除成员

SetMemberRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/api/v1/member/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|成员管理-管理成员|
    
#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
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