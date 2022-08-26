# 语音频道API（Add）

## 获取成员语音频道状态（Add）

GetChannelVoiceMemberStatus

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/voice/member/status`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道|

#### 描述

用于获取成员语音频道状态

::: tip
只对在语音频道上的成员有效
:::

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
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|channelId|string|语音频道ID|
|spkStatus|int|语音输出状态（扬声器的状态），0：关闭，1：开启|
|micStatus|int|语音输入状态（麦的状态），0：关闭，1：开启|
|micSortStatus|int|麦序模式状态，1：在麦下，2：请求上麦，3：在麦上，自由模式时统一为在麦上|

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
        "channelId": "1000101",
        "micStatus": 1,
        "spkStatus": 1,
        "micSortStatus": 3
    },
    "status": 0,
    "message": "success"
}
```


## 移动语音频道成员（Add）

SetChannelVoiceMemberMove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/voice/member/move`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、语音频道-移动成员|

#### 描述

用于将成员移动至指定语音频道

::: tip
只对在语音频道上的成员有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|dodoId|string|是|DoDo号|
|channelId|string|是|语音频道ID|

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


## 管理语音中的成员（Add）

SetChannelVoiceMemberEdit

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/voice/member/edit`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、语音频道-管理语音|

#### 描述

用于管理语音频道中的成员

::: tip
只对在语音频道上的成员有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|channelId|string|是|语音频道ID|
|dodoId|string|是|DoDo号|
|operateType|int|是|执行管理<br/>0：下麦，自由模式：无作用；麦序模式：设置下麦或拒绝上麦<br/>1：上麦，自由模式：无作用；麦序模式：同意上麦或邀请上麦<br/>2：闭麦，自由模式：闭麦该成员；麦序模式：闭麦该成员<br/>3：移出语音频道|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "channelId": "1000101",
    "dodoId": "666666",
    "operateType": 0
}
```

#### 出参示例

```json
{
    "status": 0,
    "message": "success"
}
```