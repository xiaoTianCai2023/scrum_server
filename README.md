scrum敏捷项目管理node

必看文档列表表
1. https://www.eggjs.org/zh-CN  Egg框架
2. https://www.w3cschool.cn/mongodb/mongodb-1uxs37ih.html Mongo基础教程
3. https://cloud.tencent.com/document/product/876/19369 看数据库部分

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 关闭进程命令
netstat -ano | findstr 端口
taskkill -PID 进程 -F

[egg]: https://eggjs.org