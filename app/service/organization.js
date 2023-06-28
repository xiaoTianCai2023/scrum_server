const Service = require('egg').Service;
class OrganizationService extends Service {

    async find(params = {}) {
        const res = await this.app.db.collection('organization')
            .where(params)
            .get()
        return res.data //[]
    }
}

module.exports = OrganizationService;