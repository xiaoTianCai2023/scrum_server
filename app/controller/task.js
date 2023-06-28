'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')

console.log(success, fail)

class TaskController extends Controller {
    // 获取task列表
    async index() {
        const { ctx } = this;
        let project_id = ctx.query.project_id
        const result = await this.service.task.find({
            project_id: project_id
        })

        if (result && result.length) {
            ctx.body = success({
                data: result[0]
            })
        } else {
            ctx.body = fail()
        }
    }

    // 创建task列表
    async create() {
        const { ctx } = this;

        // post参数获取
        const body = ctx.request.body;
        
        const res = await this.service.task.add({
            name: body.name || 'xxx',
            project_id: body.project_id,
            kanban_order_id: body.kanban_order_id,
            charge_id: body.charge_id,
            task_type: 1
        })
        // console.log(res)
        // 创建成功
        if (res && res.id) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

    async type_list() {
        const { ctx } = this;

        ctx.body = success({
            data: [{
                type: 'task',
                name: '任务'
            }, {
                type: 'bug',
                name: 'bug'
            }]
        })

    }
}

module.exports = TaskController;
