# 卡片

卡片消息给予开发者便利，让用户感觉更方便的交互展示形式。卡片消息统一为JSON对象，发送卡片消息时，将JSON对象套入`messageBody`字段即可。

## 卡片编辑器

为了方便开发者使用，我们提供了可视化[卡片编辑器](https://imdodo.com/tools/card_msg)，通过卡片编辑器可以很方便的构建你想要的卡片样式。

## 卡片属性

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|content|string|否|附加文本，支持Markdown语法、菱形语法|
|card|object|是|[卡片](#卡片-1)，限制10000个字符|

#### 卡片

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|类型，固定填写`card`|
|components|`list<object>`|否|[内容组件](#内容组件)|
|theme|string|是|卡片风格，grey，red，orange，yellow ，green，indigo，blue，purple，black|
|title|string|是|卡片标题，只支持普通文本，可以为空字符串|

#### JSON

```json
{
    "content": "这是一段卡片外的文字消息，可以附带Markdown语法、@用户、#频道等菱形语法功能，在卡片编辑器中不会实时预览。",
    "card": {
        "type": "card",
        "components": [],
        "theme": "green",
        "title": "这是一个卡片标题"
    }
}
```


## 内容组件

### 标题

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`header`|
|text|object|是|标题数据|

#### 标题数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：Markdown文本|
|content|string|是|文本内容，支持Markdown语法，最多显示2行|

#### JSON

```json
{
    "type": "header",
    "text": {
        "type": "dodo-md",
        "content": "一个标题字号的文本内容，支持Markdown"
    }
}
```


### 文本

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`section`|
|text|object|是|文本数据|

#### 文本数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：Markdown文本|
|content|string|是|文本内容，支持Markdown语法|

#### JSON

```json
{
    "type": "section",
    "text": {
        "type": "dodo-md",
        "content": "一长段文本字号的文本内容，支持Markdown，最大支持字符数2000。"
    }
}
```


### 多栏文本

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`section`|
|text|object|是|文本数据|

#### 文本数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，当前填写`paragraph`|
|cols|string|是|栏数，2~6栏|
|fields|`list<object>`|是|数据列表|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：markdown文本|
|content|string|是|文本内容|


#### JSON

```json
{
    "type": "section",
    "text": {
        "type": "paragraph",
        "cols": 6,
        "fields": [{
                "type": "dodo-md",
                "content": "第一栏\n内容"
            }, {
                "type": "dodo-md",
                "content": "第二栏\n内容"
            }, {
                "type": "dodo-md",
                "content": "第三栏\n内容"
            }, {
                "type": "dodo-md",
                "content": "第四栏\n内容"
            }, {
                "type": "dodo-md",
                "content": "第五栏\n内容"
            }, {
                "type": "dodo-md",
                "content": "第六栏\n内容"
            }
        ]
    }
}
```


### 备注

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`remark`|
|elements|`list<object>`|是|数据列表|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，image：图片，plain-text：普通文本，dodo-md：markdown文本|
|content|string|是|文本内容|
|src|string|是|图片地址，一般用作备注头部图标显示|

#### JSON

```json
{
    "type": "remark",
    "elements": [{
            "type": "image",
            "src": "https://img.imdodo.com/upload/cdn/4803E0BBF8678A657EBD762D7AC45710_1660189645624.png"
        }, {
            "type": "dodo-md",
            "content": "BiliBili"
        }, {
            "type": "image",
            "src": "https://img.imdodo.com/upload/cdn/1C274FE42B6C98494A06D674559B2206_1658739484506.png"
        }, {
            "type": "dodo-md",
            "content": "DoDo"
        }
    ]
}
```


### 图片

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`image`|
|src|string|是|图片地址|

#### JSON

```json
{
    "type": "image",
    "src": "https://img.imdodo.com/upload/cdn/09151DF5C726C6E2F5915E5B117EF98E_1660189645615.png"
}
```


### 多图

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`image-group`|
|elements|`list<object>`|是|数据列表，最多9条|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，当前填写`image`|
|src|string|是|图片地址|

#### JSON

```json
{
    "type": "image-group",
    "elements": [{
            "type": "image",
            "src": "https://img.imdodo.com/upload/cdn/1C274FE42B6C98494A06D674559B2206_1658739484506.png"
        }, {
            "type": "image",
            "src": "https://img.imdodo.com/upload/cdn/09151DF5C726C6E2F5915E5B117EF98E_1660189645615.png"
        }
    ]
}
```


### 视频

:::tip
视频链接，必须是官方的链接，**后期会提供视频上传接口，前期可通过DoDo群内上传视频，从[消息事件](../event/channel-text.md#消息事件)内获得视频链接**
:::

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`video`|
|title|string|是|视频标题|
|cover|string|是|视频封面|
|src|string|是|视频地址|

#### JSON

```json
{
    "type": "video",
    "title": "屏幕内覆盖视频地址",
    "cover": "https://img.imdodo.com/dodo/2493bf9b000b8dc18e77d079ac517bb9.png",
    "src": "https://video.imdodo.com/dodo/7f0a1979c818fa05cf7bdeae20aad24b.mp4"
}
```


### 倒计时

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`countdown`|
|title|string|是|倒计时主题|
|style|string|是|显示样式，day：按天显示，hour ：按小时显示|
|endTime|long|是|结束时间戳|

#### JSON

```json
{
    "type": "countdown",
    "title": "主题",
    "style": "hour",
    "endTime": 1660644927968
}
```


### 分割线

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`divider`|

#### JSON

```json
{
    "type": "divider"
}
```


## 交互组件


### 按钮

:::tip
所有按钮的Action都会回传事件给开发者，且会带上value值
:::

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`button-group`|
|elements|`list<object>`|是|数据列表|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，当前填写`button`|
|interactCustomId|string|是|自定义按钮ID|
|click|object|是|按钮点击动作|
|color|string|是|按钮颜色|
|name|string|是|按钮名称|

#### 按钮点击动作

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|value|string|是|Value|
|action|string|是|按钮动作类型，link_url：跳转链接，call_back：回传参数，copy_content：复制内容，form：回传表单|

#### JSON

```json
{
    "type": "button-group",
    "elements": [{
            "type": "button",
            "click": {
                "value": "https://www.imdodo.com",
                "action": "link_url"
            },
            "color": "blue",
            "name": "链接跳转"
        }, {
            "type": "button",
            "click": {
                "value": "value",
                "action": "call_back"
            },
            "color": "green",
            "name": "回传参数"
        }, {
            "type": "button",
            "click": {
                "value": "这段话会在点击按钮后复制到剪贴板",
                "action": "copy_content"
            },
            "color": "grey",
            "name": "复制内容"
        }
    ]
}
```


### 列表选择器

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`list-selector`|
|interactCustomId|string|是|交互自定义ID|
|placeholder|string|是|输入框提示|
|elements|`list<object>`|是|数据列表|
|min|int|是|最少选中个数|
|max|int|是|最大选中个数|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|name|string|是|选项名|
|desc|string|是|选项描述|

#### JSON

```json
{
    "type": "list-selector",
    "interactCustomId": "交互自定义id",
    "placeholder": "未选择时显示的文本内容",
    "elements": [{
            "name": "选项1",
            "desc": "可以填一些描述"
        }, {
            "name": "选项2"
        }, {
            "name": "选项3",
            "desc": "也可以不填"
        }
    ],
    "min": 1,
    "max": 1
}
```


### 回传表单

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`button-group`|
|elements|`list<object>`|是|数据列表|

#### 数据列表

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，当前填写`button`|
|interactCustomId|string|是|自定义按钮ID|
|click|object|是|按钮点击动作|
|color|string|是|按钮颜色|
|name|string|是|按钮名称|
|form|object|是|表单内容|

#### 按钮点击动作

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|value|string|是|Value|
|action|string|是|按钮动作类型，link_url：跳转链接，call_back：回传参数，copy_content：复制内容，form：回传表单|

#### 表单内容

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|title|string|是|表单标题|
|elements|`list<object>`|是|表单选项列表|

#### 表单选项

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|选项类型，input：输入框|
|key|string|是|选项自定义ID|
|title|string|是|选项名称|
|rows|int|是|输入框高度，填1表示单行，最多4行|
|placeholder|string|是|输入框提示|
|minChar|int|是|最小字符数，大于等于0|
|maxChar|int|是|最大字符数，大于0|

#### JSON

```json
{
    "type": "button-group",
    "elements": [{
            "type": "button",
            "interactCustomId": "交互自定义id",
            "click": {
                "value": "",
                "action": "form"
            },
            "color": "颜色名称",
            "name": "按钮1",
            "form": {
                "title": "dialog 表单 标题",
                "elements": [{
                        "type": "input",
                        "key": "选项自定义id",
                        "title": "第1个问题",
                        "rows": "数字,表示输入框高度 1 表示单行，最多4行",
                        "placeholder": "输入框提示",
                        "minChar": "数字, 大于等于0",
                        "maxChar": "数字, 大于0"
                    }, {
                        "type": "input",
                        "key": "选项自定义id",
                        "title": "第2个问题",
                        "rows": "数字,表示输入框高度 1 表示单行，最多4行",
                        "placeholder": "输入框提示",
                        "minChar": 0,
                        "maxChar": 4000
                    }
                ]
            }
        }
    ]
}
```


### 文字 + 模块

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`section`|
|align|string|是|对齐方式，left：左对齐，right：右对齐|
|text|object|是|文本|
|accessory|object|是|附件|

#### 文本

左侧文本可以设置为[文本](#文本)或[多栏文本](#多栏文本)

#### 附件

右侧附件可以设置为[图片](#图片)或[按钮](#按钮)

#### JSON

```json
{
    "type": "section",
    "text": {
        "type": "dodo-md",
        "content": "左侧文本可以设置为文本或多栏文本，右侧附件为可以设置图片或按钮"
    },
    "align": "right",
    "accessory": {
        "type": "button",
        "click": {
            "value": "https://www.imdodo.com",
            "action": "link_url"
        },
        "color": "green",
        "name": "按钮"
    }
}
```