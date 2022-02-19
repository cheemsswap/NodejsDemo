/*
检测文件还是目录  fs.stat
创建目录 fs.mkdir
创建写入文件 fs.writeFile
追加文件 fs.appendFile
读取文件 fs.readFile
读取目录 fs.readdir
重命名 fs.rename
删除目录 fs.rmdir
删除文件  fs.unlink
*/
const fs = require('fs')
//检测file/abc.txt是文件还是目录
// fs.stat('./file/abc.txt', function (err, stats) {
//     if (stats.isFile()) {
//         console.log("是文件");
//     }
//     else {
//         console.log("是目录");
//     }
// })

//创建目录
// fs.mkdir("./file/test", function (err) {
//     if (err) {
//         console.log("目录创建失败");
//         return
//     }
//     console.log("目录创建成功。");
// });

// 创建(覆盖)写入文件
// fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function (err) {
//     if (err) {
//         console.log("数据写入失败！");
//     }
//     console.log("数据写入成功！");
// });

//追加(创建)文件
// fs.appendFile('input.txt', '我要追加内容', function (err) {
//     if (err) {
//         console.log("数据写入失败！");
//     }
//     console.log("数据写入成功！");
// });

//读取文件内容
// fs.readFile('input.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log("读取失败！");
//     }
//     else {
//         console.log(data);
//     }
// })

//读取目录
// fs.readdir('./', (error, files) => {
//     if (error) {
//         console.log("读取失败！");
//     }
//     else {
//         for (const iterator of files) {
//             console.log(iterator);
//         }
//     }
// })

//重命名
// fs.rename('./file', './files', (error) => {
//     if (error) {
//         console.log("重命名失败");
//     }
//     else {
//         console.log("重命名成功");
//     }
// })

//删除目录
// fs.rmdir('./files/a.txt', (error) => {
//     if (error) {
//         console.log("删除失败");
//     }
//     else {
//         console.log("删除成功");
//     }
// })

//删除文件
// fs.unlink('./files/a.txt', (error) => {
//     if (error) {
//         console.log("删除失败");
//     }
//     else {
//         console.log("删除成功");
//     }
// })