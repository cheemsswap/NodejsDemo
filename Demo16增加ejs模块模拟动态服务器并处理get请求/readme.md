# 1、安装ejs插件

```bash
npm install ejs
```
# 2、引入esj插件

```bash
const ejs = require('ejs')
```
# 3、获取get请求参数

```bash
const newid = myUrl.searchParams.get('id')
```
# 4、模拟生成一个假数据

```bash
let newData = [
​        { id: '1', title: "新闻标题1", data: "新闻内容1" },
​        { id: '2', title: "新闻标题2", data: "新闻内容2" },
​        { id: '3', title: "新闻标题3", data: "新闻内容3" },
​        { id: '4', title: "新闻标题4", data: "新闻内容4" },
​      ]
​      for (const iterator of newData) {
​        if (iterator.id == newid) {
​          newData = iterator
​          break;
​        }
​      }
```
# 5、制作一个网页模板

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>新闻列表</title>
</head>
<body>
  <h2><%=newData.title%></h2>
  <h3><%=newData.data%></h3>
</body>
</html>
```
# 6、返回结果

```bash
ejs.renderFile('./views/news.html', { newData }, function (err, str) {
​        if (!err) {
​          response.writeHead(200, { 'Content-Type': `text/html;charset="utf-8"` });
​          response.end(str);
​        }
​        else {
​          response.writeHead(404, { 'Content-Type': `text/html;charset="utf-8"` });
​          response.end('页面不存在');
​        }
​      });
```

