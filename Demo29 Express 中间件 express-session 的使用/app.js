const express = require('express')
const session = require('express-session')
const app = express()
app.use(session({
    secret: 'cheemsswap', //服务器设置session签名
    resave: false,  //强制保存
    saveUninitialized: true, //强制初始化未定义的session
    cookie: {
        maxAge: 1000 * 10, //10s过期
        secure: false //是否仅https才能访问session
    },
    rolling: true, //自动续期
}))

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });

    //显示session
    const username = req.session.username
    if (username) {
        res.write(username)
    }

    res.send()
})

app.get('/login', (req, res) => {
    //设置session
    req.session.username = "张三"

    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    res.write("登录")
    res.send();
})

app.get('/exit', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    //摧毁session 所有session都销毁
    req.session.destroy(() => {
        res.end("摧毁成功")
    })
})

app.listen(3000)



