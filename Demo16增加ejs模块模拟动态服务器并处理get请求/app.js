const http = require('http');
const { URL } = require('url')
const { static } = require('./modules/route')
const ejs = require('ejs')
http.createServer(async (request, response) => {
    try {
        await static(request, response, "static")
    } catch (error) {
        const myUrl = new URL(request.url, 'http://127.0.0.1')
        const router = myUrl.pathname
        if (router == '/news') {
            //获取GET请求的参数
            const newid = myUrl.searchParams.get('id')
            let newData = [
                { id: '1', title: "新闻标题1", data: "新闻内容1" },
                { id: '2', title: "新闻标题2", data: "新闻内容2" },
                { id: '3', title: "新闻标题3", data: "新闻内容3" },
                { id: '4', title: "新闻标题4", data: "新闻内容4" },
            ]
            for (const iterator of newData) {
                if (iterator.id == newid) {
                    newData = iterator
                    break;
                }
            }
            ejs.renderFile('./views/news.ejs', { newData }, function (err, str) {
                if (!err) {
                    response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
                    response.end(str);
                }
                else {
                    response.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
                    response.end('页面不存在');
                }
            });
        }
        else if (router == '/login') {
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