# 1、安装cookie-parser插件

```bash
npm i cookie-parser
```

# 2、express 引入注册 cookie-parser插件

```bash
//引入cookie-parser
const cookieParser = require('cookie-parser')

//注册中间件cookie-parser   并设置签名
app.use(cookieParser('123456'))
```

# 3、设置 Cookie 

```bash
app.get('/login',(req,res)=>{
    //设置一个10秒会过期的cookie 并且经过签名也无法被dom获取
    res.cookie('age', "大白",{ maxAge: 1000*10,httpOnly:true,signed:true }); 
    
    //设置二级域名 可以共享cookie  例如 abc.qq.com   aaa.qq.com
    res.cookie("haipa","大白",{maxAge:1000*100,signed:true,domain:'.qq.com'})
    
    res.writeHead(200, {'Content-Type':'text/html;charset="UTF8"'});
    res.end("设置Cookie成功")
})
```

设置cookie的第三个参数如下

```jsx
   domain：cookie在什么域名下有效，类型为String,。默认为网站域名
   expires: cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
   httpOnly: 只能被web server访问，类型Boolean。
   maxAge: 实现expires的功能，设置cookie过期的时间，类型为String，指明从现在开始，多少毫秒以后，cookie到期。
   path: cookie在什么路径下有效，默认为'/'，类型为String
   secure：只能被HTTPS使用，类型Boolean，默认为false
   signed:使用签名，类型Boolean，默认为false。`express会使用req.secret来完成签名，需要cookie-parser配合使用`
```

# 4、获取Cookie

```bash
app.get('/',(req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html;charset="UTF8"'});
    
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
```





