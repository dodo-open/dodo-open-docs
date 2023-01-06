# 商城系统Event（Add）

## 商品购买成功事件

GoodsPurchaseEvent

#### 触发时机

用户购买商品时

#### 事件类型

9001

#### 事件内容

EventBodyGoodsPurchase

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|orderNo|string|订单号|
|goodsType|int|商品类型，1：自定义商品，2：身份组|
|goodsId|string|商品ID|
|goodsName|string|商品名称|
|goodsImageUrl|string|商品图片地址|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "dodoSourceId": "681856",
            "orderNo": "1001",
            "goodsType": 1,
            "goodsId": "10",
            "goodsName": "测试商品",
            "goodsImageUrl": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png"
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "4001",
        "timestamp": 1661153329922
    },
    "version": "v2"
}
```