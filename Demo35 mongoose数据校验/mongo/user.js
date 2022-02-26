const mongoose = require('./db')

const userSchema = mongoose.Schema({
    uname: {
        type: String,
        trim: true, //修饰符 自动删除空格
        //必须传入
        required: true
    },
    uage: {
        type: Number,
        //必须传入
        required: true,
        //自定义校验
        validate: (uage) => {
            return uage >= 0 && uage <= 150
        }
    },
    uid: Number
})


const UserModel = mongoose.model('User', userSchema, 'user')

module.exports = UserModel

