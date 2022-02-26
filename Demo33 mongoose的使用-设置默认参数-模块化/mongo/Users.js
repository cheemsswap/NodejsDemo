const mongoose = require('./db')


const UserSchema = mongoose.Schema({
    uname: String,
    uage: {
        type: Number,
        default: 18
    }
})

const UserModel = mongoose.model('User', UserSchema, 'user')

module.exports = UserModel