# 1、安装express-session

```bash
npm i express-session
```

# 2、注册 引用中间件

```bash

const session = require('express-session')

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
```

# 3、设置session

```bash
app.get('/login', (req, res) => {
    //设置session
    req.session.username = "张三"

    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    res.write("登录")
    res.send();
})
```

# 4 、获取session

```bash
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });

    //显示session
    const username = req.session.username
    if (username) {
        res.write(username)
    }

    res.send()
})
```

# 5、摧毁session

```bash
app.get('/exit', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF8"' });
    //摧毁session 所有session都销毁
    req.session.destroy(() => {
        res.end("摧毁成功")
    })
})
```