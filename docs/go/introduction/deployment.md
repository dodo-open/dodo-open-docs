# 三、如何成为开发者

#### 基本流程
![](https://img.imdodo.com/upload/cdn/A9DDE38CE956143240078245BD2D5001_1660286613924.jpg)

## 1. 阅读文档
- [《开发者公约》](/go/convention/convention.md)
- [《DoDo机器人开发者协议》](/go/agreement/agreement.md)
- [《DoDo开放平台使用规范》](/go/rule/apecification.md)
- [《DoDo开放平台违规处罚说明》](/go/rule/explain.md)
## 2. 注册DoDo机器人开发者账号
### 2.1 注册/登录开放平台
DoDo账号注册登录入口[开发者平台](https://doker.imdodo.com)。

填写手机号和获取到的验证码，阅读并勾选《用户协议》、《隐私政策》、《DoDo机器人开发者协议》、《DoDo开放平台使用规范》，即可注册并登录DoDo开放平台。

![](https://img.imdodo.com/upload/cdn/576ECCA397C25DA99DCC09229979B5BE_1642751628487.png)

### 2.2 选择开发者类型
选择个人开发者/企业开发者认证。   
认真填写申请理由，运营核实通过后，将为您的开发者账号进行个人开发者/企业开发者认证。
预估在两个工作日之内审核认证通过。

![](https://img.imdodo.com/upload/cdn/B21B785631590BB85207BA13639ACC0A_1642596269417.png)
也可进入DoDo开发者社区：https://imdodo.com/s/108015    
找到DoDo官方人员申请认证，加快认证进度。


## 3. 创建DoDo机器人
点击创建机器人按钮，填写机器人相关信息（图片及文字内容均需保证合法合规），即可创建机器人。

![](https://img.imdodo.com/upload/cdn/FAFD01AAC799E6355DFB28B045FCE72C_1642596386410.png)

![](https://img.imdodo.com/upload/cdn/5B574B53490712DC39893311314CCD5E_1660287652235.png)

- 机器人头像：建议尺寸为512px*512px，不超过5M，暂不支持gif格式
- 机器人名称：长度不得超过16个汉字或字符
- 机器人介绍：长度不得超过100个汉字或字符
- 机器人数量：最多可创建20个

## 4. DoDo机器人使用指南

DoDo开放平台提供两种类型的机器人
- 快速使用机器人
- 开发机器人

#### 两种机器人类型对比:   
![](https://img.imdodo.com/upload/cdn/4FC44C879DED7D8EB602CCA51FE8C82E_1660288415436.jpg)


### 4.1 开发机器人
在开发者后台选择：创建机器人--开发机器人。   
适合有开发能力的开发者，可以调用开放平台提供的接口进行开发   
![](https://img.imdodo.com/upload/cdn/94E58257081ED0041E9378649255E43D_1660288722315.png)

#### 4.1.1 开发管理   
![](https://img.imdodo.com/upload/cdn/3CD11A01B76346B20EFE1332DE6AAE57_1660288823540.png)
此处主要展示clientId（机器人唯一标识）、token（机器人鉴权Token）。其中token支持重新生成。


#### 4.1.2 授权管理
![](https://img.imdodo.com/upload/cdn/E521339E2D4E351E8BD8AAC5285BC6A5_1660288975916.png)


#### 4.1.3 授权范围
机器人默认授权范围为“公开”，开发者可以根据自己的需求调整设置。    
授权范围区别如下：
- 公开：所有人均可以通过邀请链接、机器人主页，邀请机器人加群
- 仅开发者可用：仅开发者可以通过邀请链接、机器人主页，邀请机器人加群
- 仅被邀请可用：仅被邀请用户可以通过邀请链接、机器人主页，邀请机器人加群

#### 4.1.4 邀请机器人进群
点击复制邀请链接，发送至所在的DoDo群，再点击链接即可邀请进群。


#### 4.1.5 需要权限

- [权限表](../../dev/start/permission.md)

#### 4.1.6 DoDo机器人开发文档

- [开发文档](../../dev/)


### 4.2 快速使用机器人
在开发者后台选择创建机器人--快速使用机器人。   
无需服务器，无需具备开发能力，适合刚接触了解机器人的新人群主及管理员进行使用。   

目前提供快速使用机器人的功能：   
- 进群欢迎语
- 关键词回复
- 身份组发放

视频教程：https://www.bilibili.com/video/BV1ga411L7WB

#### 4.2.1 进群欢迎语
后台设置：   
![](https://img.imdodo.com/upload/cdn/3214FB251E8549C308D21037A18C23FD_1660290180101.png)

群展示：   
![](https://img.imdodo.com/upload/cdn/3214FB251E8549C308D21037A18C23FD_1660290180101.png)

#### 4.2.2 关键词回复
后台设置相关的关键词及回复语，群成员@机器人 发送关键词就可以得到对应的回复语

后台设置：
![](https://img.imdodo.com/upload/cdn/0D4655620A1888D1E756C1B812528CAD_1660290800285.png)

群展示： 
![](https://img.imdodo.com/upload/cdn/B8699BDB1D3A846E972880998B7C19A8_1660290837748.png)

#### 4.2.3 身份组发放
开发者通过后台设置，添加表情和身份组。    
群成员可在机器人的信息上添加表情反应即可领取对应的身份组。       

后台设置： 
![](https://img.imdodo.com/upload/cdn/306C7BA54BB5F4F12C296D32C44B6794_1660291604138.png)

群展示：
![](https://img.imdodo.com/upload/cdn/56DB16EE69805D280C5511ADF349A940_1660291653025.png)