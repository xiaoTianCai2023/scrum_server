'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')

class EpicController extends Controller {
    // 获取epic列表
    async index() {
        const { ctx } = this;
        let project_id = ctx.query.project_id
        const result = await this.service.epic.find({
            project_id: project_id
        })

        if (result && result.length) {
            ctx.body = success({
                data: result
            })
        } else {
            ctx.body = fail()
        }
    }

    // 创建epic列表
    async create() {
        const { ctx } = this;
        // post参数获取
        const body = ctx.request.body;
        
        const epic_name = body.epic_name
        const project_id = ctx.params.project_id;
        
        const res = await this.service.project.add_epic(project_id,epic_name)

        if (res) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

    async delete() {
        const { ctx } = this;
        // post参数获取
        const body = ctx.request.body;
        const epic_name = body.epic_name
        const project_id = ctx.params.project_id;
        
        const res = await this.service.project.delete_epic(project_id,epic_name)

        if (res) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

}

module.exports = EpicController;
