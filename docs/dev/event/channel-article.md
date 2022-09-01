# 帖子频道Event（Add）


## 帖子发布事件（Add）

ChannelArticleEvent

#### 触发时机

用户在帖子频道发布帖子 / 编辑帖子时

#### 事件类型

6001

#### 事件内容

EventBodyChannelArticle

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源帖子频道ID|
|dodoId|string|来源DoDo号|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|articleId|string|帖子ID|
|title|string|标题|
|imageList|`list<string>`|图片列表|
|content|string|文本内容，支持 [菱形语法](../api/message.md#菱形语法)内容的接收|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandId": "44659",
            "channelId": "123456",
            "dodoId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "articleId": "10000",
            "title": "帖子发布测试",
            "imageList": ["https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png"],
            "content": "帖子发布测试成功"
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898a",
        "eventType": "6001",
        "timestamp": 1661153329922
    }
}
```


## 帖子评论回复事件（Add）

ChannelArticleCommentEvent

#### 触发时机

用户在帖子频道评论帖子 / 回复评论时

#### 事件类型

6002

#### 事件内容

EventBodyChannelArticleComment

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandId|string|来源群号|
|channelId|string|来源帖子频道ID|
|dodoId|string|来源DoDo号|
|personal|object|[个人信息](../api/message.md#个人信息)|
|member|object|[成员信息](../api/message.md#成员信息)|
|articleId|string|帖子ID|
|commentId|string|帖子评论ID|
|replyId|string|帖子评论回复ID，为空时：为评论事件，不为空时：为评论回复事件|
|imageList|`list<string>`|图片列表|
|content|string|文本内容，支持 [菱形语法](../api/message.md#菱形语法)内容的接收|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandId": "44659",
            "channelId": "123456",
            "dodoId": "681856",
            "personal": {
                "nickName": "测试DoDo昵称",
                "avatarUrl": "https://static.imdodo.com/DoDoRes/Avatar/6.png",
                "sex": 1
            },
            "member": {
                "nickName": "测试群昵称",
                "joinTime": "2022-07-20 10:27:24"
            },
            "articleId": "10000",
            "commentId": "1000010",
            "replyId": "100001010",
            "imageList": ["https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png"],
            "content": "帖子回复测试"
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898b",
        "eventType": "6002",
        "timestamp": 1661153329922
    }
}
```