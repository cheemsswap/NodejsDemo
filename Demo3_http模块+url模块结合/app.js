//引入http模块
const http = require('http');
//引入url模块
const { URL } = require('url')
//创建一个http服务器
http.createServer(function (request, response) {
    //输出请求的地址
    console.log(request.url);
    const myURL = new URL(request.url, "http://127.0.0.1")
    const query = myURL.searchParams
    //http://127.0.0.1:8081/abc?a=12&b=13&a=1&a=2&a=3
    console.log(query.getAll('a'));
    console.log(query.get('b'));

    //设置响应头
    response.writeHead(200, { 'Content-Type': "text/html;charset='utf-8'" });
    //写入响应内容
    response.write(`<head><meta charset="UTF-8"></head>`)
    response.write(`<h2>你好nodejs</h2>`);
    //结束当前请求
    response.end();

}).listen(8081);

//控制台输出内容
console.log('Server running at http://127.0.0.1:8081/');