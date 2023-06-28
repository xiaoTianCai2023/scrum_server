const Service = require('egg').Service;
class UserService extends Service {

    //   constructor() {
    //     console.log('service初始化');
    //     // db.collection("user")
    //   }

    async find(params = {}) {
        const res = await this.app.db.collection('user')
            .where(params)
            .get()
        return res.data //[]
    }

    
    async add(params) {
        // await this.app.db.createCollection("user");

        let res
        try{
            res = await this.app.db.collection('user').add({
                created: this.app.db.serverDate(),
                username: params.username,
                password: params.password,
            })
            
        } catch(err) {
            console.log('报错拉~~~!!!!!!!!!!!!!!')
            // res = {}
        }

        // console.log('resssssssss', res)

        return res
    }

    //   async modify(search_params, modify_data) {
    //     const res = await this.app.db.collection('pay')
    //         .where(search_params)
    //         .update(modify_data)

    //     return res
    //   }
}
module.exports = UserService;