const { fail } = require("../util/http")



module.exports = () => {
    return async function login(ctx, next) {
        // console.log('中间件11111')
        await next()

        console.log(ctx.session)

        if(!ctx.session || !ctx.session.is_login) {
            ctx.body = fail({
                code: 401,
                msg: '请登录'
            })
        }

        // console.log('中间件2222')

    }
}