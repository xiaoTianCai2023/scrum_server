function success(obj = {}) {
    return {
        code: 0,
        msg: obj.msg || '成功',
        data: obj.data || {}
    }
}

function fail(obj = {}) {
    return {
        code: obj.code || -1,
        msg: obj.msg || '请求失败',
        data: obj.data
    }
}


module.exports = {
    success,
    fail
}