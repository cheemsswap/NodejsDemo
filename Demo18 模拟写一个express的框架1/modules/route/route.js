const fs = require('fs')
const path = require('path')
const { URL } = require('url')

const getHttpContentType = (extname) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./modules/route/mine.json', (err, data) => {
            if (err) reject(err)
            else {
                let json = JSON.parse(data)
                if (json[extname]) resolve(json[extname])
            }
        })
    })
}

const routes = {
    //静态文件请求
    static: (request, response, staticPath) => {
        return new Promise((resolve, reject) => {
            let filepath = request.url
            //利用URL模块
            let myUrl = new URL(filepath, 'http://127.0.0.1')
            filepath = myUrl.pathname
            fs.readFile(`./${staticPath}${filepath}`, async (err, data) => {
                if (err) {
                    reject()
                }
                else {
                    const contentType = await getHttpContentType(path.extname(filepath))
                    response.writeHead(200, { 'Content-Type': `${contentType};charset="utf-8"` });
                    response.end(data);
                    resolve()
                }
            })
        })
    },
    error: (request, response) => {
        response.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
        response.end('页面不存在');
    },
    '/register': (request, response) => {
        const myUrl = new URL(request.url, 'http://127.0.0.1')
        const router = myUrl.pathname
        if (request.method == 'POST') {
            let regData = ""
            request.on("data", (data) => {
                regData += data
            })
            request.on('close', () => {
                response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
                response.end(regData.toString());
            })
        }
        else {
            this.error(request, response)
        }
    },
    '/login': (request, response) => {
        response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
        response.end('登录');
    },
    '/admin': (request, response) => {
        response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
        response.end('管理员');
    },
}
exports.routes = routes

