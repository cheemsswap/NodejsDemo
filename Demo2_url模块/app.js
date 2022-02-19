//引入url模块
const { URL } = require('url');
const myURL = new URL("http://127.0.0.1/?name=abc&password=123&a=1&a=2&a=3")
const params = myURL.searchParams
console.log(params.get('name'));
console.log(params.get('password'));
console.log(params.getAll('a'));