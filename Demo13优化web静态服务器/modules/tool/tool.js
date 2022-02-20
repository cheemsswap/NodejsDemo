const fs = require('fs')

const getHttpContentType = (extname) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./modules/tool/mine.json', (err, data) => {
            if (err) reject(err)
            else {
                let json = JSON.parse(data)
                if (json[extname]) resolve(json[extname])
            }
        })
    })
}

exports.getHttpContentType = getHttpContentType