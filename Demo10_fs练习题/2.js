const fs = require('fs')

var jsFileList = [];
var cssFileList = [];
var htmlFileList = [];

var reg = /(?:js|css|html)$/;
var regofjs = /(?:js)$/;
var regofcss = /(?:css)$/;
var regofhtml = /(?:html)$/;



function readAddir(dir) {
    fs.readdir(dir, (error, files) => {
        if (error) {
            return
        }
        else {
            if (files.length == 0) return
            for (const i of files) {
                let dirs = dir + '/' + i
                fs.stat(dirs, function (err, stats) {
                    if (stats.isFile()) {
                        if (reg.test(i)) {
                            if (regofjs.test(i)) {
                                jsFileList.push({
                                    path: dirs,
                                    name: i
                                })
                            }
                            else if (regofcss.test(i)) {
                                cssFileList.push({
                                    path: dirs,
                                    name: i
                                })
                            }
                            else if (regofhtml.test(i)) {
                                htmlFileList.push({
                                    path: dirs,
                                    name: i
                                })
                            }
                        }
                    }
                    else {
                        readAddir(dirs)
                    }
                })
            }
        }

    })
}
readAddir('./dist')
setTimeout(() => {
    console.log(jsFileList);
}, 6000);
