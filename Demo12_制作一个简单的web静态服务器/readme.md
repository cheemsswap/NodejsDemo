# 1、使用http模块搭建webserver

# 2、根据webserver获取的请求地址

http.createServer(function (request, response) {

  let filepath = request.url

}

# 3、使用url模块 对请求地址进行解析 去除一些get请求体

  let filepath = request.url

  //利用URL模块

  let myUrl = new URL(filepath, 'http://127.0.0.1')

  filepath = myUrl.pathname

# 4、使用fs模块寻找目录下的文件 并得到data数据

 fs.readFile('./static' + filepath, (err, data) => {

​    if (err) {

​      response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });

​      response.end('页面不存在');

​    }

​    else {

​      response.end(data);

​    }

# 5、使用path模块获取文件的后缀名 返回不同的响应头类型

  if (path.extname(filepath) === '.html')

​        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });

​      else if (path.extname(filepath) === '.css')

​        response.writeHead(200, { 'Content-Type': 'text/css;charset="utf-8"' });

​      else if (path.extname(filepath) === '.js')

​        response.writeHead(200, { 'Content-Type': 'text/javascript;charset="utf-8"' });

​      response.end(data);