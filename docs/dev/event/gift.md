# 赠礼系统Event


## 赠礼成功事件

GiftSendEvent

#### 触发时机

用户对消息或者帖子进行赠礼并且成功时触发

#### 事件类型

7001

#### 事件内容

EventBodyGiftSend

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|channelId|string|来源频道ID|
|orderNo|string|订单号|
|targetType|int|内容类型，1：消息，2：帖子|
|targetId|string|内容ID|
|totalAmount|decimal|礼物总价值（铃钱）|
|gift|object|[礼物信息](../api/message.md#礼物信息)|
|islandRatio|decimal|群分成（百分比）|
|islandIncome|decimal|群收入（里程）|
|dodoSourceId|string|赠礼人DoDoID|
|dodoIslandNickName|string|赠礼人群昵称|
|toDodoSourceId|string|被赠礼人DoDoID|
|toDodoIslandNickName|string|被赠礼人群昵称|
|toDodoRatio|decimal|被赠礼人分成（百分比）|
|toDodoIncome|decimal|被赠礼人收入（里程）|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "101566",
            "channelId": "118522",
            "orderNo": "20221110134820100260687",
            "targetType": 1,
            "targetId": "377470609502158848",
            "gift": {
                "id": "1",
                "name": "飞机",
                "count": 1
            },
            "totalAmount": 1.00,
            "islandRatio": 3.00,
            "islandIncome": 0.30,
            "dodoSourceId": "5868",
            "dodoIslandNickName": "测试群昵称",
            "toDodoSourceId": "6252",
            "toDodoIslandNickName": "测试群昵称2",
            "toDodoRatio": 87.00,
            "toDodoIncome": 0.87
        },
        "eventId": "d9c229b3050142b7bc8ad892df34e700",
        "eventType": "7001",
        "timestamp": 1668059298270
    },
    "version": "v2"
}
```