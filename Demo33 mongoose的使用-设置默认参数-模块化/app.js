const UserModel = require('./mongo/Users')


UserModel.find({}, (err, data) => {
    if (err) {
        console.log("查询出错!");
        return;
    }
    console.log(data);
})