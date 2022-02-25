const express = require('express')

//引入cookie-parser
const cookieParser = require('cookie-parser')

const app = express()

//注册中间件cookie-parser   并设置签名
app.use(cookieParser('123456'))

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    //获取当前未被验证的Cookie
    const cookies = req.cookies

    //获取当前被验证的Cookie
    const signedCookies = req.signedCookies

    //输出
    res.write("输出未被验证的Cookie:")
    res.write(JSON.stringify(cookies))
    res.write("<br>输出被验证的Cookie:")
    res.write(JSON.stringify(signedCookies))
    res.end()
})

app.get('/login', (req, res) => {
    //设置一个10秒会过期的cookie 并且经过签名也无法被dom获取
    res.cookie('age', "大白", { maxAge: 1000 * 10, httpOnly: true, signed: true });

    //设置二级域名 可以共享cookie  例如 abc.qq.com   aaa.qq.com
    res.cookie("haipa", "大白", { maxAge: 1000 * 100, signed: true, domain: '.qq.com' })

    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    res.end("设置Cookie成功")
})

app.listen(3000)
