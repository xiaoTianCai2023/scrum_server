const tcb = require("@cloudbase/node-sdk")

module.exports = app => {
    // 使用 app 对象
    app.beforeStart(async () => {
        const cloud_app = tcb.init({
            env: 'scrum-3ggfket7a9973d0e',
            secretId: 'AKIDuhEVUBumVwjGB0py70ZrskNirjKeRUzF',
            secretKey: '73j7JEuITRGo54la8QTdXGhJgphH1Ugm',
            region: 'ap-guangzhou'
        })

        const db = cloud_app.database()

        app._ = db.command;
        app.db = db;
        

        // 自动帮助初始化建立collection

        // db.createCollection("user");
        // db.createCollection("project");
        // db.createCollection("kanban");

        app.global_config = {
        }
    });
};