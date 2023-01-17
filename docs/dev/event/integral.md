# 积分系统Event（Add）

## 积分变更事件

IntegralChangeEvent

#### 触发时机

用户积分变更时

##### 需要权限

高级权限-超级管理员

#### 事件类型

8001

#### 事件内容

EventBodyIntegralChange

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|operateType|int|场景类型，1：签到，2：邀请，3：转账，4：购买商品，5：管理积分，6：退群|
|integral|long|积分，正数时表示积分增加，负数时表示积分减少|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "dodoSourceId": "681856",
            "operateType": 1,
            "integral": 100
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "4001",
        "timestamp": 1661153329922
    },
    "version": "v2"
}
```