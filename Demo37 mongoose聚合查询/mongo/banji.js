const mongoose = require('./db')


const BanjiSchema = mongoose.Schema({
    cid: {
        type: 'string',
        required: true
    },
    className: {
        type: 'string',
        required: true
    },
    classTeacher: {
        type: 'string',
        default: '未确定班主任'
    }
})

const BanjiModel = mongoose.model('Banji', BanjiSchema, 'banji')

module.exports = BanjiModel