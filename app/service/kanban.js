const Service = require('egg').Service;
class KanbanService extends Service {

    async find(params = {}) {
        const res = await this.app.db.collection('kanban')
            .where(params)
            .get()
        return res.data //[]
    }

    async add(params) {
        // await this.app.db.createCollection("user");

        let res
        try{
            res = await this.app.db.collection('kanban').add({
                created: this.app.db.serverDate(),
                project_id: params.project_id,
                list: []
            })
        } catch(err) {
            console.log('报错拉~~~!!!!!!!!!!!!!!')
            // res = {}
        }
        // console.log('resssssssss', res)
        return res
    }

    async push(project_id, obj) {
        const res = await this.app.db.collection('kanban')
        .where({
            project_id
        })
        .update({
            list: this.app._.push(obj)
        });
        
        return res
        
    }

}
module.exports = KanbanService;