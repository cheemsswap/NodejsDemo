const mongoose = require('mongoose')

mongoose.connect("mongodb://admin:123456@localhost:27017/school", (err) => {
    if (err) {
        console.log("数据库连接失败");
        return;
    }
    console.log("数据库连接成功");
})

module.exports = mongoose