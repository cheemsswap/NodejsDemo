const http = require('http');
const fs = require('fs')
const path = require('path')
const { URL } = require('url')
const { getHttpContentType } = require('./modules/tool')
http.createServer(function (request, response) {
    let filepath = request.url
    //利用URL模块
    let myUrl = new URL(filepath, 'http://127.0.0.1')
    filepath = myUrl.pathname
    fs.readFile('./static' + filepath, async (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            response.end('页面不存在');
        }
        else {
            const contentType = await getHttpContentType(path.extname(filepath))
            response.writeHead(200, { 'Content-Type': `${contentType};charset="utf-8"` });
            response.end(data);
        }
    })
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');