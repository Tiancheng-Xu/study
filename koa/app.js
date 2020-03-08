const koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')

// 实例化koa
const app = new koa()
const router = new Router()

app.use(bodyParser())

//引入users.js
const users = require('./routes/api/user')

//路由
router.get('/', async ctx => {
    ctx.body = { msg: 'Hello Koa Interfaces' }
})

//config
const mongodb = require('./config/keys').mongoURI
//连接数据库
mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//  连接数据库
var db = mongoose.connection; //  数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db ok')
});

//配置路由地址 localhost:5000/api/users
router.use('/api/users',users)

//配置路由
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server started on ${port}`)
})