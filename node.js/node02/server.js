const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    //express实例化
app.get('/user/login', (req, res) => {
    // 接受get参数 req.query
    console.log(req.query)
        //处理数据
    let { us, ps } = req.query
    if (us === '123' && ps === '456') {
        res.send({
            err: 0,
            msg: 'regist ok'
        })
    } else {
        res.send({
            err: -1,
            msg: 'us ps no ok'
        })
    }

})
app.post('/user/reg', (req, res) => {
    //接受post 数据 消息体 请求体 req.body
    let { us, ps } = req.body

    console.log(req.body)
        //express 不能直接解析消息体
        //通过第三方插件实现解析 body-parse
    if (us === '123' && ps === '456') {
        res.send({
            err: 0,
            msg: 'regist ok'
        })
    } else {
        res.send({
            err: -1,
            msg: 'us ps no ok'
        })
    }
})
app.get('/movie/del', (req, res) => {
    res.send('del success')
})

app.listen(3000, () => {
    console.log('server start')
})

/*服务器相关

服务器
    1.服务器就是一台电脑
    2.服务器软件(apach tomcat iis ngnix node)
    3.服务器ip和端口号(80)

局域网:服务器通过网络连接 每一个电脑都会有一个ip
外网:
ip:确定服务器主机的位置
port:确定服务器里某一个程序

postman post接口测试
*/

/*api 接口的构成要素
ip
port
pathname
method get post
接受用户传递数据 数据格式是由后端确定
*/

/*api接口的书写
+接受数据
    -get req.query
    -post req.body 需要body-parser 插件进行解析
        + 注意数据格式 json x-www-form-urencode formdata
*/