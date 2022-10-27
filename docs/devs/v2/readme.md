# 介绍

开发文档 <Badge type="warning" text="v2" vertical="middle" /> 版本，维护了DoDo开放平台 开发、接口、事件、SDK 等资源，[点击此处](./start/development.md)，开启您的开发之旅吧！

:::tip
从v1版本迁移至v2版本的用户，需要注意：

v2版本已统一将所有接口和事件中的

islandId（群号）替换成了islandSourceId（群ID，即群唯一标识），[islandId和islandSourceId映射关系接口](./api/island.md#获取群列表)

dodoId（DoDo号）替换成了dodoSourceId（DoDoID，即DoDo唯一标识），[dodoId和dodoSourceId映射关系接口](./api/member.md#获取成员dodoid映射列表)

群ID和DoDoID可进入DoDo的Web / PC端，设置中开启开发者模式，即可进行右键复制获得
:::
