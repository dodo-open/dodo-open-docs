# 帖子频道API

## 发布帖子

SetChannelArticleAdd

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/article/add`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、帖子频道-发布帖子|

#### 描述

用于向指定频道发送频道帖子

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|channelId|string|是|帖子频道ID|
|title|string|是|标题，60个字符限制|
|content|string|否|内容，10000字符限制，支持[菱形语法](./message.md#菱形语法)，`内容`和`图片链接`必填一个|
|imageUrl|string|否|图片链接，必须是官方的链接，通过[上传资源图片](./resource.md#上传资源图片)接口可获得图片链接，`内容`和`图片链接`必填一个|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|articleId|string|帖子ID|

#### 入参示例

```json
{
    "channelId": "1000010",
    "title": "发布帖子测试",
    "content": "发布帖子测试成功",
    "imageUrl": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success",
    "data": {
        "articleId": "111111111111111111"
    }
}
```


## 删除帖子评论回复

SetChannelArticleRemove

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/channel/article/remove`|<Badge type="warning" text="v1" vertical="middle" />|POST|通用权限-查看频道、帖子频道-删除帖子|

#### 描述

删除指定频道的帖子 / 评论 / 回复

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|channelId|string|是|帖子频道ID|
|type|int|是|业务类型，1：帖子，2：帖子评论，3：帖子评论回复|
|id|string|是|业务ID，业务类型为`1`时，代表`帖子ID`；类型为`2`时，代表`帖子评论ID`；类型为`3`时，代表`帖子评论回复ID`|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|

#### 入参示例

```json
{
    "channelId": "1000010",
    "type": 1,
    "id": "12345678"
}
```

#### 出参示例
 
```json
{
    "status": 0,
    "message": "success"
}
```