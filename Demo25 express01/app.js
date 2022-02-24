
const express = require('express')

const app = express()

//普通get路由
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end("你好");
})
//普通post路由 常常作为增加数据
app.post('/dologin', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end("登录页面");
})
//普通put路由 常常作为修改数据
app.put('/update', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end("修改页面");
})
//普通delete路由 常常作为删除数据
app.delete('/delete', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end("删除页面");
})
//动态路由 params
app.get('/news/:id', (req, res) => {
    const id = req.params['id']
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end("新闻详情页面" + id);
})
//动态路由 query
app.get("/find", (req, res) => {
    const obj = req.query
    res.writeHead(200, { 'Content-Type': 'text/html;charset="UTF-8"' });
    res.end(JSON.stringify(obj));
})

app.listen(8080)
