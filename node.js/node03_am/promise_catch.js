const fs = require('fs')
    //封装
function isEixt() {
    return new Promise((resolve, reject) => {
        fs.stat('./hehe.js', (err, stats) => {
            if (err) {
                reject('文件不存在')
            } else {
                resolve('文件存在')
            }
        })
    })
}

function delFile() {
    return new Promise((resolve, reject) => {
        fs.unlink('./hehe.js', (err) => {
            if (err) {
                reject('del failed')
            } else {
                resolve('del failed')
            }
        })
    })
}
isEixt()
    .then(() => {
        console.log('is exit 的成功处理')
        return delFile()
    })
    .then(() => {
        console.log('删除文件的成功处理')
        throw new Error('手动终止')
    })
    .then(() => {
        console.log('test1')
    })
    .then(() => {
        console.log('test2')
    })
    .catch((err) => {
        console.log('catch:' + err)
    })

//  链式调用    一组链式调用只需要一个catch
//  如何终止链式调用的执行