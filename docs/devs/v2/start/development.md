# 开发

## 接口地址

```
https://botopen.imdodo.com
```

## 请求方式

目前提供基于REST风格的API，但为方便开发者，所有接口请求一律采用`POST`方式

## 请求格式

目前仅支持JSON格式数据

* 在HTTP请求头上添加`Content-Type`，值为`application/json`

## 票据说明

申请机器人通过后，平台将会下发以下票据：

|字段|说明|示例值|
|:---------------|:-----|:---------------|
|clientId|机器人唯一标识|88888888|
|token|机器人鉴权Token|NjM2OTM0NDg.au-_ve-_vSs.Scs7Y_y8Aw3shbzQ7aUcbz0kAnSsE7pXWHM6Ww6VvNY|

## 鉴权方式

* 在HTTP请求头上添加`Authorization`，值为`Bot clientId.token`，示例`Bot 88888888.NjM2OTM0NDg.au-_ve-_vSs.Scs7Y_y8Aw3shbzQ7aUcbz0kAnSsE7pXWHM6Ww6VvNY`

## 示例伪代码

```js
HTTP Header {
    Content-Type: application/json
    Authorization: Bot 88888888.NjM2OTM0NDg.au-_ve-_vSs.Scs7Y_y8Aw3shbzQ7aUcbz0kAnSsE7pXWHM6Ww6VvNY
}
```