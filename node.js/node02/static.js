const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, './static')))
    // app.use('/balabala', express.static(path.join(__dirname, './static'))) //http://localhost:3000/balabala
    // 域名：端口号 直接指向规定的静态目录
app.listen(3000, () => {
    console.log('server start')
})