const Service = require('egg').Service;
class TaskService extends Service {

    async find(params = {}) {
        const res = await this.app.db.collection('task')
            .where(params)
            .get()
        return res.data //[]
    }

    async add(params) {
        let res
        try{
            res = await this.app.db.collection('task').add({
                created: this.app.db.serverDate(),
                ...params
            })
        } catch(err) {
            console.log('报错拉~~~!!!!!!!!!!!!!!')
            // res = {}
        }

        return res
    }
}
module.exports = TaskService;