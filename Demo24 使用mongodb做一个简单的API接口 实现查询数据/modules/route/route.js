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

let bast = {
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
    }
}
let G = {
    _get: {},
    _post: {}
}
let app = async (request, response, static = "static") => {
    try {
        await bast['static'](request, response, static)
    } catch (error) {
        const myUrl = new URL(request.url, 'http://127.0.0.1')
        const router = myUrl.pathname
        const method = request.method.toLowerCase()
        try {
            G["_" + method][router](request, response)
        } catch (error) {
            bast['error'](request, response)
        }
    }
}
app.get = (api, callback) => {
    G["_get"][api] = callback
}
app.post = (api, callback) => {
    G["_post"][api] = callback
}
module.exports = app

