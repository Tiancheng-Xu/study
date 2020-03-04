const express = require('express')
const app = express()
    // app.use((req,res,next)=>{  //和下一行一样
app.use('/', (req, res, next) => {
    let { token } = req.query
    if (token) {
        next()
    } else {
        res.send('缺少token')
    }
})

app.get('/test1', (req, res) => {
    res.send('test1')
})

app.get('/test2', (req, res) => {
    res.send('test2')
})

app.listen(3000, () => {
    console.log('server start')
})


/*中间件 middlewear
    + 内置中间件 static
    + 自定义中间件 (全局 局部)
    + 第三方中间件(body-parser) (拦截器)

    中间件使用 一定要注意next()
*/

/* 静态资源目录 static
    指定一个目录 目录可以被访问 apache (www)
*/