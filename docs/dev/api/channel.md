# 频道API（Modify）


## 获取频道列表

GetChannelList

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/list`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道|

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
|channelId|string|频道ID|
|channelName|string|频道名称|
|channelType|int|频道类型，1：文字频道，2：语音频道，4：帖子频道，5：链接频道，6：资料频道|
|defaultFlag|int|默认访问频道标识，0：否，1：是|
|groupId|string|分组ID|
|groupName|string|分组名称|

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
            "channelId": "1234501",
            "channelName": "测试频道1",
            "channelType": 1,
            "defaultFlag": 1,
            "groupId": "123450101",
            "groupName": "测试分组"
        }, {
            "channelId": "1234502",
            "channelName": "测试频道2",
            "channelType": 1,
            "defaultFlag": 0,
            "groupId": "",
            "groupName": ""
        }
    ]
}
```


## 获取频道信息

GetChannelInfo

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/info`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|channelId|string|是|频道ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|
 
#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|channelId|string|频道ID|
|channelName|string|频道名称|
|channelType|int|频道类型，1：文字频道，2：语音频道，4：帖子频道，5：链接频道，6：资料频道|
|islandId|string|群号|
|defaultFlag|int|默认访问频道标识，0：否，1：是|
|groupId|string|分组ID|
|groupName|string|分组名称|

#### 入参示例

```json
{
    "channelId": "1000101"
}
```

#### 出参示例

 ```json
{
    "status": 0,
    "message": "success",
    "data": {
        "channelId": "1234501",
        "channelName": "测试频道1",
        "channelType": 1,
        "islandId": "10001",
        "defaultFlag": 1,
        "groupId": "123450101",
        "groupName": "测试分组"
    }
}
 ```


 ## 创建频道（Add）

SetChannelAdd

:::tip
按DoDo群限制，10次/30秒
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/add`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理频道与分组|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|channelName|string|是|频道名称，非必传，不传时设置`新的频道`，不能大于32个字符或16个汉字|
|channelType|int|是|频道类型，1：文字频道，2：语音频道（默认自由模式），4：帖子频道（默认详细模式）|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|channelId|string|频道ID|


#### 入参示例

```json
{
    "islandId": "10001",
    "channelName": "测试频道1",
    "channelType": 1
}
```

#### 出参示例
 
 ```json
{
    "status": 0,
    "message": "success",
    "data": {
        "channelId": "1234502"
    }
}
```


## 编辑频道（Add）

SetChannelEdit

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/edit`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理频道与分组 或 通用权限-编辑频道、通用权限-查看频道|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|channelId|string|是|频道ID|
|channelName|string|否|频道名称，非必传，不传时默认不改动，不能大于32个字符或16个汉字|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "channelId": "1234501",
    "channelName": "测试频道1"
}
```

#### 出参示例
 
 ```json
{
    "status": 0,
    "message": "success"
}
```


## 删除频道（Add）

SetChannelRemove

:::tip
按DoDo群限制，1次/10秒
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-管理频道与分组、通用权限-查看频道|

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|channelId|string|是|频道ID|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "islandId": "10001",
    "channelId": "1234501"
}
```

#### 出参示例
 
 ```json
{
    "status": 0,
    "message": "success"
}
```