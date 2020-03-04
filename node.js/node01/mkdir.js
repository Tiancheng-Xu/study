const fs = require('fs')
    // fs.mkdir('./test', (err) => {
    //     console.log(err)
    // })
    // fs.rename('./test', './test01', (err) => {
    //     console.log(err)
    // })
fs.rmdir('./test01', (err) => {
    if (err) {
        console.log('删除失败')
        console.log(err)
    } else {
        console.log('删除成功')
    }
})