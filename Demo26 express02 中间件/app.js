
const express = require('express');
const app = express()

//内置中间件 静态文件
app.use(express.static("views"))

//应用级中间件  =》在api接口调用之前
app.use((req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    next()
})

app.get('/', (req, res) => {
    res.end("你好");
})
app.get('/login', (req, res) => {
    res.end("登录");
})
app.get('/register', (req, res) => {
    res.end("注册");
})

//路由级中间件 可以向下继续匹配
app.get('/news/add', (req, res, next) => {
    res.write("add")
    next()
})
app.get('/news/:id', (req, res, next) => {
    res.end("新闻");
})

//错误处理中间件 和位置有关 放在最下面
app.use((req, res, next) => {
    res.writeHead(404, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end()
})

app.listen(8080)
