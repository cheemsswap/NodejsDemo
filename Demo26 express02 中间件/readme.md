# 1、静态文件中间件

放在所有api接口的上方 当用户请求静态文件资源的时候 可以显示静态文件资源

```bash
app.use(express.static("views"))
```



# 2、应用级中间件

当他放在所需的api接口之前 可以做到截断等作用

```bash
//应用级中间件  =》在api接口调用之前
app.use((req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    next()
})
```

# 3、路由级中间件

可以给路由设置next  当他符合条件的时候 才能往下走

```bash
//路由级中间件 可以向下继续匹配
app.get('/news/add', (req, res, next) => {
    res.write("add")
    next()
})
app.get('/news/:id', (req, res, next) => {
    res.end("新闻");
})
```

# 4、错误处理中间件

原理其实就是用的应用级中间件，只不过放在所有api接口的最下面，当其他的接口都没有匹配 走到他这里 统一再做处理

```bash
//错误处理中间件 和位置有关
//错误处理中间件 和位置有关 放在最下面
app.use((req, res, next) => {
    res.writeHead(404, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end()
})
```

