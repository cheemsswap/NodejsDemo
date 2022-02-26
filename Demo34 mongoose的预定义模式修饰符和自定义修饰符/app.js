const mongoose = require("mongoose");

mongoose.connect("mongodb://testadmin:123456@127.0.0.1:27017/test", (err) => {
    if (err) {
        console.log("数据连接失败");
        return
    }
    console.log("数据库连接成功");
})


const UserSchema = mongoose.Schema({
    uname: {
        type: String,
        // set(val) {
        //     if (val && val.startsWith("http://")) {
        //         return val
        //     }
        //     return 'http://' + val
        // },
        // get(val) {
        //     if (val && val.startsWith("http://")) {
        //         return val
        //     }
        //     else {
        //         return "http://" + val
        //     }
        // }
    },
    uid: Number
})
const UserModel = mongoose.model('User', UserSchema, 'user')


const user1 = new UserModel({
    uid: 62,
    // uname: "http://haipa"
    uname: "hhahah"
})
user1.save().then(data => {
    console.log(data);
    //输出会有get的
    console.log(user1.uname);
}).catch(error => {
    console.log("错误");
})



