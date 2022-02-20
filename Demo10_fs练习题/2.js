// P7的第二题稍微改了改，匹配指定目录下所有文件
const fs = require('fs')
const path = require('path');
const getAllregFile = (dir, reg) => {
    return new Promise((resolve, rejects) => {
        fs.stat(dir, (err, stats) => {
            if (err) rejects(err);
            if (stats.isFile()) {
                {
                    const regexp = new RegExp(reg)
                    if (regexp.test(dir)) {
                        const parse = path.parse(dir)
                        resolve([{ dir: parse.dir, base: parse.base }])
                    }
                    else
                        resolve([])
                }
            }
            else {
                fs.readdir(dir, (err, files) => {
                    if (err) rejects(err)
                    else {
                        let promiseList = []
                        let list = []
                        for (const iterator of files) {
                            promiseList.push(
                                getAllregFile(dir + '/' + iterator, reg)
                                    .then(data => {
                                        list = [...list, ...data]
                                    })
                                    .catch(error => {
                                        rejects(error)
                                    })
                            )
                        }
                        Promise.all(promiseList)
                            .then(_ => {
                                resolve(list)
                            })
                            .catch(error => {
                                rejects(error)
                            })
                    }
                })
            }
        })
    })
}
var reg = /(?:js|css|html)$/;
var fileputh = 'C:/Users'
getAllregFile(fileputh.replace(/\/*$/, ''), reg)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
