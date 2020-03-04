const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const Mail = require('../Utils/mail')

let codes = {} //通过内存保存验证码

router.post('/reg', (req, res) => {
    //获取数据
    let { us, ps, code } = req.body
    if (us || ps || code) {
        //验证码是否ok
        if (codes[us] != code) { return res.send({ err: -4, msg: '验证码错误，请重试' }) }
        //用户名是否存在
        User.find({ us })
            .then((data) => {
                if (data.length === 0) {
                    //用户名不存在
                    return User.insertMany({ us: us, ps: ps })
                } else {
                    res.send({ err: -3, msg: '用户名已存在' })
                }
            })
            .then(() => {
                res.send({ err: 0, msg: '注册成功' })
            })
            .catch((err) => {
                res.send({ err: -2, msg: '注册err' })
            })

    } else {
        return res.send({ err: -1, msg: '参数错误' })
    }
    console.log(us, ps)
        //数据处理
        //返回数据
        // res.send('test ok')
})

router.post('/login', (req, res) => {
    let { us, ps } = req.body
    if (!us && !ps) { return res.send({ err: -1, msg: '参数错误' }) }
    // { us: us, ps: ps } === { us, ps }
    User.find({ us, ps })
        .then((data) => {
            if (data.length > 0) {
                res.send('登录成功')
            } else {
                res.send('登录失败')
            }
        })
        .catch((err) => {
            res.send({ err: -1, msg: '内部错误' })
        })
})

//发送邮箱验证码
router.post('/getMailCode', (req, res) => {
    let { mail } = req.body
    let code = parseInt(Math.random() * 10000) //产生随机验证码
    codes[mail] = code
        //将邮箱和邮箱验证码保存到缓存中
    Mail.send(mail, code)
        .then(() => {
            codes[mail] = code
                //将邮箱和香油匹配的验证码保存到缓存中
            res.send({ err: 0, msg: '验证码发送成功' })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '验证码发送失败' })
        })
})
module.exports = router