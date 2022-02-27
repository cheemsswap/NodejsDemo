const mongoose = require('./db')


const StudentSchema = mongoose.Schema({
    cid: {
        type: 'string',
        required: true
    },
    sid: {
        type: 'string',
        required: true
    },
    className: {
        type: 'string',
        required: true
    },
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'number',
        required: true,
        min: 0,
        max: 150
    },
    sex: {
        type: 'string',
        enum: ['男', '女'],
        required: true
    }
})

const StudentModel = mongoose.model('Student', StudentSchema, 'student')

module.exports = StudentModel