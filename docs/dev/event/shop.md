# 商城系统Event（Add）

## 商品购买成功事件

GoodsPurchaseEvent

#### 触发时机

用户购买商品时

##### 需要权限

高级权限-超级管理员

#### 事件类型

9001

#### 事件内容

EventBodyGoodsPurchase

|字段|类型|说明|
|:---------------|:-----|:---------------|
|islandSourceId|string|来源群ID|
|dodoSourceId|string|来源DoDoID|
|orderNo|string|订单号|
|goodsType|int|商品类型，1：身份组，2：自定义商品|
|goodsId|string|商品ID|
|goodsName|string|商品名称|
|goodsImageList|`list<string>`|商品图片列表，链接[后接参数](https://help.aliyun.com/document_detail/183902.html)可以调整图片样式|

#### 事件示例

```json
{
    "type": 0,
    "data": {
        "eventBody": {
            "islandSourceId": "44659",
            "dodoSourceId": "681856",
            "orderNo": "1001",
            "goodsType": 2,
            "goodsId": "10",
            "goodsName": "测试商品",
            "goodsImageList": ["https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png"]
        },
        "eventId": "3dcf80c0a3244661a6c65dd9ba37898e",
        "eventType": "4001",
        "timestamp": 1661153329922
    },
    "version": "v2"
}
```