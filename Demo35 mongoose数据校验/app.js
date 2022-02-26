const UserModel = require('./mongo/user')


const user1 = new UserModel({
    uname: '张三',
    uage: 18,
    uid: 88
})

user1.save()
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log("保存失败");
    })