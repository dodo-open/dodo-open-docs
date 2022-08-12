# 资源API


## 上传资源图片

SetResourcePictureUpload

:::tip
按图片格式限制，支持JPG、JPEG、GIF、PNG、WEBP；按图片大小限制，20MB/张；按图片张数限制，1000张/天
:::

#### 接口

|地址|版本|方式|权限|
|:-----|:---------------|:-----|:---------------|
|`/api/v1/resource/picture/upload`|<Badge type="warning" text="v1" vertical="middle" />|POST|不需要权限|
 
#### 请求头

**必须通过表单方式提交，请求头需要如下变更**

```
Content-Type: multipart/form-data
Content-Length: 文件大小
```

#### 入参

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|file|binary|是|文件二进制|

#### 出参

|字段|类型|说明|
|:---------------|:-----|:---------------|
|status|int|[返回码](../start/status.md)|
|message|string|返回信息|
|data|object|返回数据|

#### 数据

|字段|类型|说明|
|:---------------|:-----|:---------------|
|url|string|图片链接|
|width|int|图片宽度|
|height|int|图片高度|

#### 入参示例

```
file: 文件二进制
```

#### 出参示例

```json
{
    "data": {
        "url": "https://img.imdodo.com/dodo/8c77d48865bf547a69fb3bba6228760c.png",
        "width": 500,
        "height": 500
    },
    "status": 0,
    "message": "success"
}
```