const http = require('http');
const app = require('./modules/route')

http.createServer(app).listen(3000);

app.post('/register', (request, response) => {
    let regData = ""
    request.on("data", (data) => {
        regData += data
    })
    request.on('close', () => {
        response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
        response.end(regData.toString());
    })
})
app.get('/login', (request, response) => {
    response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
    response.end('登录');
})
app.get('/admin', (request, response) => {
    response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
    response.end('管理员');
})

console.log('Server running at http://127.0.0.1:3000/');