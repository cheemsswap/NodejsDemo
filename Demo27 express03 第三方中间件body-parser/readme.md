# 第三方中间件(常用)

body-parser

https://github.com/expressjs/body-parser

这个中间件用于 处理请求的json数据和from表单数据



### 使用方法：

#### 1、安装

```bash
npm install body-parser --save
```

#### 2、注册

```bash
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

#### 3、使用

```bash
// POST /login gets urlencoded bodies
app.post('/login', function (req, res) {
  var body =  req.body
  res.send('welcome, ' + body.username)
})
```