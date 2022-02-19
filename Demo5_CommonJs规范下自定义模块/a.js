const student = {
    name: "张三",
    age: 18
}

function getStudentInfo() {
    console.log(student);
}

//暴露模块方法 还可以用 exports 进行暴露
module.exports = {
    getStudentInfo
}