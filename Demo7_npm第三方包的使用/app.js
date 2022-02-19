
//引入第三方包
const md5 = require('md5')

const password = "abcd123456"
//使用第三方包
const md5password = md5(password)
console.log(md5password);