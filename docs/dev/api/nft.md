# 数字藏品API


## 获取成员数字藏品判断

GetMemberNftStatus

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/member/nft/status`|<Badge type="warning" text="v1" vertical="middle" />|POST|成员管理-管理成员权限|

#### 描述

用于获取指定成员的数字藏品状态

::: tip
只对绑定了高能链钱包且开启了数字藏品展示的成员有效
:::

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|islandId|string|是|群号|
|dodoId|string|是|DoDo号|
|platform|string|是|数藏平台，`upower`：[高能链](https://img.imdodo.com/dodo/0286c607eb8435235d6525c3f5a621d7.png)，`ubanquan`：优版权，`metamask`：Opensea|
|issuer|string|否|发行方，若填写了系列，则发行方必填|
|series|string|否|系列|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|isBandPlatform|int|是否已绑定该数藏平台，0：否，1：是|
|isHaveIssuer|int|是否拥有该发行方的NFT，0：否，1：是|
|isHaveSeries|int|是否拥有该系列的NFT，0：否，1：是|

#### 入参示例

```json
{
    "islandId": "10001",
    "dodoId": "666666",
    "platform": "upower",
    "issuer": "哔哩哔哩数字藏品",
    "series": "干杯2022"
}
```

#### 出参示例

```json
{
    "data": {
        "isBandPlatform": 1,
        "isHaveIssuer": 1,
        "isHaveSeries": 1
    },
    "status": 0,
    "message": "success"
}
```