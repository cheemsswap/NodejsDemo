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

const static = (request, response, staticPath) => {
    let filepath = request.url
    //利用URL模块
    let myUrl = new URL(filepath, 'http://127.0.0.1')
    filepath = myUrl.pathname
    fs.readFile(`./${staticPath}${filepath}`, async (err, data) => {
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
}

exports.static = static