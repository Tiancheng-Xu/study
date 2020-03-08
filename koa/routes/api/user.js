const Router = require('koa-router')
const router = new Router()
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar');
const tools = require('../../config/tools')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
//引入User
const User = require('../../models/User')

//test
router.get('/test', async ctx => {
    ctx.status = 200
    ctx.body = { msg: 'users works...' }
})

/**
 * @route POST api/users/register
 * @desc    注册接口地址
 * @access  接口是公开的
 */

router.post('/register', async ctx => {
    console.log(ctx.request.body)

    //存储到数据库
    const findResult = await User.find({ "email": ctx.request.body.email })
    // console.log(findResult)

    if (findResult.length > 0) {
        ctx.status = 500
        ctx.body = {
            emial: '邮箱已被占用'
        }
    } else {
        const avator = gravatar.url(ctx.request.body.email, { s: '200', r: 'pg', d: 'mm' });
        //没查到
        const newUser = new User({
            name: ctx.request.body.name,
            email: ctx.request.body.email,
            avator,
            password: tools.enbcrypt(ctx.request.body.password)
        })

        // await bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(newUser.password, salt, (err, hash) => {
        //         console.log(hash)
        //         if (err) throw err
        //         newUser.password = hash
        //     });
        // });

        // console.log(newUser)
        //存储到数据库
        await newUser.save().then(user => {
            ctx.body = user
        }).catch(err => {
            console.log(err)
        })

        //返回json数据
        ctx.body = newUser
    }
})

/**
 * @route POST api/users/login
 * @desc    登录接口地址    返回token
 * @access  接口是公开的
 */
router.post("/login", async ctx => {
    //查询
    const findResult = await User.find({ email: ctx.request.body.email })
    const user = findResult[0]
    const password = ctx.request.body.password
    //判断查没查到
    if (findResult.length == 0) {
        ctx.status = 404
        ctx.body = { email: '用户不存在！' }
    } else {
        //查到后验证密码
        var result = bcrypt.compareSync(password, user.password)

        //验证通过
        if (result) {
            //返回token
            const payload = { id: user.id, name: user.name, avator: user.avator }
            const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 },'shhhhh')

            ctx.status = 200
            ctx.body = { success: true, token: 'Bearer ' + token }
        } else {
            ctx.status = 400
            ctx.body = { password: '密码错误！' }
        }
    }
})

module.exports = router.routes()