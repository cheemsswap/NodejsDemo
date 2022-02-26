
const mongoose = require('mongoose')

mongoose.connect('mongodb://testadmin:123456@127.0.0.1:27017/test', (error) => {
    if (error) {
        console.log("数据库连接失败")
        return
    }
    console.log("数据库连接成功")
})

module.exports = mongoose