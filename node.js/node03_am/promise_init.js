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
    })
    .catch((err) => {
        console.log('catch:' + err)
    })

/*promise

大量的异步操作  如果需要顺序执行    通过回调函数执行    回调地狱

通过promise解决回调地狱
    1.封装promise 函数
    ···
    function test(){
        //返回promise
        return new Promise((resolve,reject)=>{
            //需要的异步处理
            成功的时候  resolve
            失败    reject
        })
    }
    ···
    2.链式调用    一组链式调用只需要一个catch
        test().then().then().catch()
    3.如何终止链式调用的执行    捕获错误 throw error  见promise_catch.js
 */