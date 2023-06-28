'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')


class ProjectController extends Controller {
    // 获取看板类表
    async index() {
        const { ctx } = this;
        let project_id = ctx.query.project_id
        const result = await this.service.project.find({
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

    // 创建看板- 列框
    async create() {
        const { ctx } = this;

        // post参数获取
        const body = ctx.request.body;
        
        let project_id = body.project_id;
        
        const res = await this.service.project.push(project_id, {
            created: +new Date(),
            name: body.name || 'xxxx',
            owner_id: body.owner_id || 'xxx',
            project_id,
        })

        // const result = await this.service.kanban.find({
        //     project_id: 'ddead83c6372815b01d1f9193bc9b11a'
        // })

        // let list = []
        // if(list && list.length) {
        //     list = result[0].list
        // }

        // 创建成功
        if (res) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }
}

module.exports = ProjectController;
