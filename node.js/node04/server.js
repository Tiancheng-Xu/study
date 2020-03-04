const express = require('express')
const db = require('./db/connect')
const app = express()
const Mail = require('./Utils/mail')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 引入公共文件
app.use('/static', express.static(path.join(__dirname, './static')))

//引入路由
const userRouter = require('./router/userRouter')
const fooodRouter = require('./router/foodRouter')
const fileRouter = require('./router/fileRouter')
app.use('/user', userRouter)
app.use('/food', fooodRouter)
app.use('/file', fileRouter)

//通过cors 解决跨域
const cors = require('cors')
app.use(cors())

app.get('/cors', (req, res) => {
    // 发送一个服务器请求
    console.log('cors.html 的 ajax')
    request('https://www.baidu.com/', (err, response, body) => {
        if (!err) {
            res.send(body)
        }
    })
})


app.listen(3000, () => {
    console.log('server start')
})