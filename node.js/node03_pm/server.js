const express = require('express')
const db = require('./db/connect')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

//引入路由
const userRouter = require('./router/userRouter')

app.use('/user', userRouter)



app.listen(3000, () => {
    console.log('server start')
})