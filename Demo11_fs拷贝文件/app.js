const fs = require('fs')

//读流fs.createReadStream
//写流fs.createWriteStream

//在读前注意要确保文件存在
const readGif = fs.createReadStream('1.gif')
const writeGif = fs.createWriteStream('2.gif')

//普通拷贝
// readGif.on('data', (data) => {
//     console.log("正在读写");
//     writeGif.write(data)
// })
// readGif.on('close', () => {
//     writeGif.end()
// })
// writeGif.on('finish', () => {
//     console.log("完成拷贝");
// })


//管道流
readGif.pipe(writeGif)
writeGif.on('finish', () => {
    console.log("完成拷贝");
})
