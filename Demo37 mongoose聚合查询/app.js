const StudentModel = require('./mongo/student')
const BanjiModel = require('./mongo/banji')



//聚合查询1 查询班级id为030A的班级信息 以及他们的学生列表
// BanjiModel.aggregate([
//     {
//         $match: {
//             cid: "030A"
//         }
//     },
//     {
//         $lookup: {
//             from: "student",
//             localField: "cid",
//             foreignField: "cid",
//             as: "studentList"
//         }
//     }
// ], (err, data) => {
//     console.log(JSON.stringify(data));
// })


//聚合查询2  查询 张三A1 的 班主任
StudentModel.aggregate([
    {
        $match: {
            name: "张三A1"
        }
    },
    {
        $lookup: {
            from: "banji",
            localField: "cid",
            foreignField: "cid",
            as: "class"
        }
    },
    {
        $project: {
            _id: 0,
            "学生名称": "$name",
            "班主任": {
                $arrayElemAt: ["$class.classTeacher", 0]
            }
        }
    }
], (err, data) => {
    console.log(JSON.stringify(data));
})