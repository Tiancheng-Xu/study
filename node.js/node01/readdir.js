const fs = require('fs')

//同步读取文件，在关键位置捕获错误信息
// try {
//     //可能出错的代码
//     let dirs = fs.readdirSync('./111')
// } catch (err) {
//     console.log(111)
//     console.log(dirs)
// }

//异步读取
fs.readdir('.', (err, date) => {
    if (err) {
        console.log(err)
    } else {
        console.log(date)
    }
})
console.log(222)
    //错误的回调优先 在回调函数中第一个参数表示错误对象 默认为null 如果出现错误err 就是错对象

/*
    错误处理 同步：try catch 异步：错误回调优先
    文件夹的错误
    curd c(create)u(update)r(read)d(delate)
 */