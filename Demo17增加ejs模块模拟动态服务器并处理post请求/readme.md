# 1、写了个一个注册页面

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>注册</title>
</head>
<body>
  <h2>注册</h2>
  <form action="/regiser" method="post" target="_blank">
​    <input type="text" name="username">
​    <input type="password" name="usrepassword">
​    <input type="submit" value="提交" />
  </form>
</body>
</html>
```
# 2、对注册页面的路由 获取其post的传值

```bash
if (router == '/regiser') {
​   if (request.method == 'POST') {
​        let regData = ""
​        request.on("data", (data) => {
​          regData += data
​        })
​        request.on('close', () => {
​          response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
​          response.end(regData.toString());
​        })
​      }
​      else {
​        response.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
​        response.end('页面不存在');
​      }
​}
```