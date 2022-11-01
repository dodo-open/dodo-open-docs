# 介绍

开发文档 <Badge type="warning" text="v2" vertical="middle" /> 版本，维护了DoDo开放平台 开发、接口、事件、SDK 等资源，[点击此处](./start/development.md)，开启您的开发之旅吧！

:::tip
v1 到 v2 迁移须知

- **升级点**

islandId（群号）替换成了islandSourceId（群ID，即群唯一标识），[islandId和islandSourceId映射关系接口](./api/island.md#获取群列表)

dodoId（DoDo号）替换成了dodoSourceId（DoDoID，即DoDo唯一标识），[dodoId和dodoSourceId映射关系接口](./api/member.md#获取成员dodo号映射列表)

- **接口升级**

将接口路由中的v1改成v2，将全部dodoId字段替换成dodoSourceId、islandId字段替换成islandSourceId

- **事件升级**

通过v2版本获取WebSocket连接接口获取到连接字符串进行连接，即可收到v2版本的事件推送，事件内容将全部dodoId字段替换成dodoSourceId、islandId字段替换成islandSourceId

- **温馨提示**

群ID和DoDoID可进入DoDo的Web / PC端，设置中开启开发者模式，即可进行右键复制获得

:::
