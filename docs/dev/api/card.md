# 卡片

卡片消息给予开发者便利，让用户感觉更方便的交互展示形式。卡片消息统一为JSON格式，发送卡片消息时，需要将JSON转成JSON文本进行传输。

## 卡片编辑器

为了方便开发者使用，我们提供了可视化[卡片编辑器](https://imdodo.com/tools/card_msg)，通过卡片编辑器可以很方便的构建你想要的卡片样式。

## 卡片属性

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|card|string|是|[卡片](#卡片-1)|
|content|string|否|附加文本，支持Markdown语法、菱形语法|

#### 卡片

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|类型，固定填写`card`|
|theme|string|是|卡片风格，[枚举值](https://img.imdodo.com/dodo/57d77e71a772161395aff96dd946a536.png)|
|title|string|否|卡片标题，只支持普通文本|
|components|list|否|[内容组件](#内容组件)|


#### JSON

```json
{
    "card": {
        "type": "card",
        "theme": "green",
        "title": "卡片顶部的标题",
        "components": [],
    },
    "content": "附加文本"
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
|content|string|是|文本内容，支持Markdown语法，限制200个字符，最多显示2行|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "header",
            "text": {
                "type": "plain-text",
                "content": "标题内容"
            }
        }
    ]
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
|content|string|是|文本内容，支持Markdown语法，限制2000个字符|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "section",
            "text": {
                "type": "plain-text",
                "content": "文本内容"
            }
        }
    ]
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

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：markdown文本|
|content|string|是|文本内容|


#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "section",
            "text": {
                "type": "paragraph",
                "cols": 3,
                "fields": [{
                        "type": "plain-text",
                        "content": "A\na1\2\n5"
                    }, {
                        "type": "plain-text",
                        "content": "B\nb2\n3\n7"
                    }, {
                        "type": "plain-text",
                        "content": "C\nc1\n4\n8"
                    }
                ]
            }
        }
    ]
}
```


### 备注

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`remark`|
|elements|`list<object>`|是|数据列表|

#### 数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，image：图片，plain-text：普通文本，dodo-md：markdown文本|
|content|string|是|文本内容|
|src|string|是|图片地址，一般用作备注头部图标显示|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "remark",
            "elements": [{
                    "type": "image",
                    "src": "图片地址"
                }, {
                    "type": "plain-text",
                    "content": "普通文本"
                }
            ]
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
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "image",
            "src": "https://img.dodo.cn/assets/2021-01/AybvLWYQgA0dw0dw.jpg"
        }
    ]
}
```


### 多栏图片

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`image-group`|
|elements|`list<object>`|是|数据列表，最多9条|

#### 数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，当前填写`image`|
|src|string|是|图片地址|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "image-group",
            "elements": [{
                    "type": "image",
                    "src": "https://img.dodo.cn/assets/2021-01/AybvLWYQgA0dw0dw.jpg"
                }
            ]
        }
    ]
}
```


### 视频

:::tip
视频需要先调用文件上传接口。获取到DoDo的视频链接再发送卡片消息
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
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "video",
            "title": "有本事别笑",
            "cover": "视频封面",
            "src": "https://video.imdodo.com/dodo/7f236defb78ec803444057d2b892798c.mp4"
        }
    ]
}
```


### 倒计时

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`countdown`|
|title|string|是|倒计时主题|
|style|string|是|显示样式，day：按天显示，hour ：按小时显示，second：按秒显示|
|endTime|long|是|结束时间戳|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "countdown",
            "title": "主题",
            "style": "day",
            "endTime": 1657613499271
        }
    ]
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
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "divider"
        }
    ]
}
```


### 文本图片

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`section`|
|align|string|是|对齐方式，left：左对齐，right：右对齐|
|text|object|是|文本数据|
|accessory|object|是|附件|

#### 文本数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：Markdown文本|
|content|string|是|文本内容，支持Markdown语法，限制2000个字符

#### 附件

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，image：图片|
|src|string|是|图片链接|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "section",
            "align": "left",
            "text": {
                "type": "plain-text",
                "content": "没见过这么萌的狗狗吗？"
            },
            "accessory": {
                "type": "image",
                "src": "https://dodo.cn/assets/2021-01/7kr4FkWpLV0ku0ku.jpeg"
            }
        }
    ]
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

#### 数据

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
    "theme": "green",
    "type": "card",
    "components": [{
            "type": "button-group",
            "elements": [{
                    "type": "button",
                    "interactCustomId": "交互自定义id",
                    "click": {
                        "value": "跳转链接",
                        "action": "link_url"
                    },
                    "color": "颜色名称",
                    "name": "按钮1"
                }
            ]
        }
    ]
}
```


### 文本按钮

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`section`|
|align|string|是|对齐方式，left：左对齐，right：右对齐|
|text|object|是|文本数据|
|accessory|object|是|附件|

#### 文本数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|文本类型，plain-text：普通文本，dodo-md：Markdown文本|
|content|string|是|文本内容，支持Markdown语法，限制2000个字符|

#### 附件

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|数据类型，button：按钮|
|interactCustomId|string|是|交互自定义ID|
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
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "section",
            "text": {
                "type": "plain-text",
                "content": "您是否认为DoDo是最好的语音软件？"
            },
            "align": "left",
            "accessory": {
                "type": "button",
                "interactCustomId": "交互自定义id",
                "click": {
                    "value": "跳转链接",
                    "action": "link_url"
                },
                "color": "颜色名称",
                "name": "按钮1"
            }
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
|elements|object|是|数据列表|
|min|int|是|最少选中个数|
|max|int|是|最大选中个数|

#### 数据

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|name|string|是|选项名|
|desc|string|是|选项描述|

#### JSON

```json
{
    "type": "card",
    "theme": "green",
    "components": [{
            "type": "list-selector",
            "interactCustomId": "交互自定义id",
            "placeholder": "输入框提示",
            "elements": [{
                    "name": "展示的选项名，必填",
                    "desc": "选项名下面的描述，选填"
                }, {
                    "name": "展示的选项名，必填",
                    "desc": "选项名下面的描述，选填"
                }
            ],
            "min": "1 数字，最少选中个数",
            "max": "2 数字，最大选中个数"
        }
    ]
}
```


### 回传表单

#### 字段

|字段|类型|必传|说明|
|:---------------|:-----|:-----|:---------------|
|type|string|是|组件类型，当前填写`button-group`|
|elements|`list<object>`|是|数据列表|

#### 数据

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
    "theme": "green",
    "type": "card",
    "components": [{
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
    ]
}
```