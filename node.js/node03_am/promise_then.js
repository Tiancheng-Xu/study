const fs = require('fs')

// fs.stat('./hehe.js', (err, stats) => {
//     if (err) {
//         console.log('文件不存在')
//     } else {
//         fs.unlink('./hehe.js', (err) => {
//             console.log(err)
//             fs.writeFile('./test.js', 'DQ', () => {

//             })
//         })
//     }
// })

// 异步操作需要保持一定的执行顺序   回调函数的嵌套  回调地狱

// promise  asyc/await (ES7)    bluebird插件... 

function delfile() {
    return new Promise((reslove, reject) => {
        // reslove('success')  //  外部走then的处理函数    表示成功
        // reject('failed') //  外部走catch的处理函数   表示失败
        //异步操作
        fs.unlink('./hehe.js', (err) => {
            if (err) {
                reject('failded')
            } else {
                reslove('success')
            }
        })
    })
}
delfile()
    .then((msg) => {
        console.log('then:' + msg)
    })
    .catch((err) => {
        console.log('err:' + err)
    })