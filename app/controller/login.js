'use strict';
const { Controller } = require('egg');
// import { success, fail } from '../util/http'
const { success, fail } = require('../util/http')

console.log(success, fail)

class LoginController extends Controller {

    async login() {
        const { ctx } = this;

        // post参数获取
        const body = ctx.request.body;

        let res = await this.service.user.find({
            username: body.username
        })

        if(res.length && res[0].password === body.password) {
            ctx.session.is_login = 1
            ctx.body = success({
                msg: '登录成功'
            })
        } else {
            ctx.body = fail({
                msg: '用户名密码错误，登录失败',
            })
        }
        // console.log('ressssss', res)
    }

    async register() {
        const { ctx } = this;

        // post参数获取
        const body = ctx.request.body;
        
        const res = await this.service.user.add(body)
        // console.log(res)
        // 创建成功
        if (res && res.id) {
            ctx.body = success({
                data: res
            })
        } else {
            ctx.body = fail({
                msg: '注册失败，用户名已存在'
            })
        }
    }

    async logout() {
        const { ctx } = this;
        ctx.session = null;
        ctx.body = success()
    }


    async test() {

    }

    async test_html() {
        const { ctx } = this
        await ctx.render('index.html');
    }
}

module.exports = LoginController;
