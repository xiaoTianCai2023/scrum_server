'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')

class ProjectController extends Controller {
    // 获取项目列表
    async index() {
        const { ctx } = this;

        const result = await this.service.project.find()

        const res = result;
        if (res) {

            console.log(ctx.session)

            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

    // 获取项目列表
    async create() {
        const { ctx } = this;
        // post参数获取
        const body = ctx.request.body;
        const res = await this.service.project.add(body)

        // 创建成功
        if (res && res.id) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

    async get_one_project() {
        const { ctx } = this;
        const project_id = ctx.params.id;

        let data = await this.service.project.find({
            _id: project_id
        });

        data = data.data

        if (data.length) {
            ctx.body = success({
                data: data[0]
            })
        } else {
            ctx.fail()
        }
    }

    async up_kanban() {
        const { ctx } = this;
        const project_id = ctx.params.id;
        const body = ctx.request.body;
        // const kanban_arr = body.kanban

        const res = await this.service.project.update(project_id, {
            kanban: body
        })
        ctx.body = success({
            data: res
        })
    }

    async up_project() {
        const { ctx } = this;
        const body = ctx.request.body;
        const _id = ctx.params.id;
        // const _id = body._id;
  
        console.log('data', body)
        delete body._id

        const res = await this.service.project.update(_id, body)
        ctx.body = success({
            data: res
        })
    }

    async del_project() {
        const { ctx } = this;
        const _id = ctx.params.id;
        const res = await this.service.project.delete(_id)

        ctx.body = success({
            data: res
        })
    }

    async search() {
        const { ctx } = this;
        const body = ctx.request.body;

        let seach_query = {
            ...body
        }
        
        console.log(seach_query)

        if(seach_query.name) {
            seach_query.name = {
                $regex: `${body.name}`
            }
        } else {
            delete seach_query.name
        }

        const data = await this.service.project.find(seach_query)

        ctx.body = success({
            data
        })  
    }
}

module.exports = ProjectController;
