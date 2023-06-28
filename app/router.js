'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 登录 注册 用户管理

  // 登录
  router.post('/api/login', controller.login.login);

  // 注册
  router.post('/api/register', controller.login.register);
  router.get('/api/users', controller.user.index)
  router.post('/api/logout', controller.login.logout);

  // 项目

  // 获取project列表
  router.get('/api/projects', controller.projects.index);
  router.post('/api/projects', controller.projects.create);
  // project列表查询
  router.post('/api/projects/search', controller.projects.search);

  // 更新项目
  router.put('/api/projects/:id', controller.projects.up_project)
  router.delete('/api/projects/:id', controller.projects.del_project)
  router.put('/api/projects/:id/kanban',controller.projects.up_kanban )


  // 根据project_id获取project对象
  router.get('/api/project/:id', controller.projects.get_one_project)

  // 看板
  router.post('/api/kanban', controller.kanban.create)
  router.get('/api/kanban', controller.kanban.index)

  // tasks
  router.post('/api/task', controller.task.create)

  // epic
  // 创建epic
  router.post('/api/epic/:project_id', controller.epic.create)
  // 删除
  router.delete('/api/epic/:project_id', controller.epic.delete)
    // organization
  router.get('/api/organization', controller.organization.index)

  // 获取任务列表
  router.get('/api/task/type_list', controller.task.type_list)
  // 本地调试用
  router.get('/test',controller.login.test)

  router.get('/',controller.login.test_html)
};
