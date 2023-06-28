const Service = require('egg').Service;
class ProjectService extends Service {

  //   constructor() {
  //     console.log('service初始化');
  //     // db.collection("user")
  //   }

  async find(params = {}) {
    let search_query = {
      ...params
    }

    delete search_query.skip
    delete search_query.limit
    const count_res = await this.app.db.collection('project')
      .where({})
      .count()

    const count = count_res.total;



    const res = await this.app.db.collection('project')
      .where(search_query)
      .skip(params.skip || 0)
      .limit(params.limit || 10)
      .get()

    res.total = count;

    // data
    // count
    return res;
  }

  async add(params) {
    // await this.app.db.createCollection("user");
    const res = await this.app.db.collection('project').add({
      created: this.app.db.serverDate(),
      name: params.name || '暂无数据',   // 项目名称
      organization: params.organization || '暂无数据',  // 部门
      owner: params.owner || '暂无数据',
      kanban: [],
      epic: []
    })

    return res
  }

  async push(project_id, obj) {
    const res = await this.app.db.collection('project')
      .where({
        _id: project_id
      })
      .update({
        list: this.app._.push(obj)
      });

    return res
  }

  async update(project_id, data) {
    // console.log('lanbanarr', kanban_arr)
    const res = await this.app.db.collection('project')
      .doc(project_id)
      .update(data)

    return res
  }

  async add_epic(project_id, epic_name) {
    const res = await this.app.db.collection('project')
      .doc(project_id)
      .update({
        epic: this.app._.push(epic_name)
      })
    return res
  }

  async delete_epic(project_id, epic_name) {
    const res = await this.app.db.collection('project')
      .doc(project_id)
      .update({
        epic: this.app._.pull(epic_name)
      })
  }

  async delete(id) {
    const res = await this.app.db.collection('project')
      .doc(id)
      .remove()
    return res
  }
  //   async modify(search_params, modify_data) {
  //     const res = await this.app.db.collection('pay')
  //         .where(search_params)
  //         .update(modify_data)

  //     return res
  //   }
}
module.exports = ProjectService;