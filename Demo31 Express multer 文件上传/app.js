const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//上传文件配置
const storage = multer.diskStorage({
    //配置上传的目录
    destination: function (req, file, cb) {
        if (file)
            cb(null, './uploads')
        else
            cb(null, false)
    },
    //修改上传后的文件名
    filename: function (req, file, cb) {
        if (file) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
        } else {
            cb(null, false)
        }
    },

})
//
const limits = {
    fileSize: 100000
}

const upload = multer({
    limits, storage, fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/gif" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, file);
        } else {
            cb(null, false);
        }
    }
})

app.get('/register', (req, res) => {
    //上传页面
    ejs.renderFile('./views/register.ejs', {}, function (err, str) {
        if (!err) {
            res.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
            res.end(str);
        }
        else {
            res.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
            res.end('页面不存在');
        }
    });
})

const fileSizeLimitErrorHandler = (err, req, res, next) => {
    if (err) {
        res.send({ code: 500, data: { error: "文件太大" } })
    } else {
        next()
    }
}

app.post('/register', upload.single('file'), fileSizeLimitErrorHandler, (req, res) => {
    if (req.file)
        res.send({ code: 200, data: { url: req.file.path } })
    else
        res.send({ code: 500, data: { error: "文件错误" } })
})
app.listen(3000)