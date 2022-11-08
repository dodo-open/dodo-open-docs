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
|islandRatio|decimal|群分成|
|islandIncome|decimal|群收入（里程）|
|targetType|int|内容类型，1：消息，2：帖子|
|targetId|string|内容ID|
|totalAmount|decimal|礼物总价值（铃钱）|
|gift|object|[礼物信息](../api/message.md#礼物信息)|
|dodoSourceId|string|赠礼人DoDoID|
|dodoIslandNickName|string|赠礼人群昵称|
|toDodoSourceId|string|被赠礼人DoDoID|
|toDodoIslandNickName|string|被赠礼人群昵称|
|toDodoRatio|decimal|被赠礼人分成|
|toDodoIncome|decimal|被赠礼人收入（里程）|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "channelId": "118506",
            "orderNo": "12345678",
            "islandRatio": 60.00,
            "islandIncome": 600.00,
            "targetType": 1,
            "targetId": "349552072708214781",
            "totalAmount": 100.00,
            "gift": {
                "id": "1",
                "name": "赠币",
                "count": 10
            },
            "dodoSourceId": "12345",
            "dodoIslandNickName": "赠礼者",
            "toDodoSourceId": "34567",
            "toDodoIslandNickName": "被赠礼者",
            "toDodoRatio": 30.00,
            "toDodoIncome": 300.00,
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "7001",
        "timestamp": 1661153329922
    },
    "version": "v2"
}
```