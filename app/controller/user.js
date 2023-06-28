'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')


// organization数据在数据库中直接添加的
class UserController extends Controller {

    async index() {
        const { ctx } = this;

        const result = await this.service.user.find()

        const res = result;
        if (res) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail()
        }
    }

}

module.exports = UserController;
