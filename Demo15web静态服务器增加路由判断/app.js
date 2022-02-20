const http = require('http');
const { URL } = require('url')
const { static } = require('./modules/route')

http.createServer(async (request, response) => {
    try {
        await static(request, response, "static")
    } catch (error) {
        const myUrl = new URL(request.url, 'http://127.0.0.1')
        const router = myUrl.pathname
        if (router == '/login') {
            response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
            response.end('登录');
        }
        else if (router == '/regiser') {
            response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
            response.end('注册');
        }
        else if (router == '/admin') {
            response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
            response.end('管理员');
        }
        else {
            response.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
            response.end('页面不存在');
        }
    }


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');