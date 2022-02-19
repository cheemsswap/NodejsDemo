const fs = require('fs')

fs.readdir('./upload', (error) => {
    if (error) {
        fs.mkdir('./upload', (error) => {
            if (error) {
                console.log("创建失败");
            }
        })
    }
})