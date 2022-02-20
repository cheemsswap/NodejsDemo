const http = require('http');
const fs = require('fs')
const path = require('path')
const { URL } = require('url')
http.createServer(function (request, response) {
    let filepath = request.url
    //利用URL模块
    let myUrl = new URL(filepath, 'http://127.0.0.1')
    filepath = myUrl.pathname
    fs.readFile('./static' + filepath, (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            response.end('页面不存在');
        }
        else {
            if (path.extname(filepath) === '.html')
                response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            else if (path.extname(filepath) === '.css')
                response.writeHead(200, { 'Content-Type': 'text/css;charset="utf-8"' });
            else if (path.extname(filepath) === '.js')
                response.writeHead(200, { 'Content-Type': 'text/javascript;charset="utf-8"' });
            response.end(data);
        }
    })
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');