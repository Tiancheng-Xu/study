const express = require('express')
const router = express.Router()
const foodModel = require('../db/model/foodModel')

router.post('/add', (req, res) => {
    // let data = {
    //     name: '猛龙过江',
    //     price: '9999',
    //     desc: '好吃',
    //     typename: '凉菜',
    //     typeid: 1,
    //     img: '/static/img/1.jpg'
    // }
    let { name, price, desc, typename, typeid, img } = req.body
        //判断参数是否正确
    foodModel.insertMany({ name, price, desc, typename, typeid, img })
        .then((data) => {
            res.send({ err: 0, msg: '添加成功' })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '添加失败' })
        })
})

// 分类查询
router.post('/getInfoByType', (req, res) => {
    let { typeid } = req.body
    if (typeid == 0) {
        foodModel.find({})
            .then((data) => {
                res.send({ err: 0, msg: '查询成功', list: data })
            })
            .catch((err) => {
                res.send({ err: -1, msg: '查询失败' })
            })
    } else {
        foodModel.find({ typeid })
            .then((data) => {
                res.send({ err: 0, msg: '查询成功', list: data })
            })
            .catch((err) => {
                res.send({ err: -1, msg: '查询失败' })
            })
    }
})

//关键字查询
router.post('/getInfoByKw', (req, res) => {
    // $set $get $or $and $regex regexp
    let { kw } = req.body
    let reg = new RegExp(kw) //  创建一个正则表达式  匹配关键字
        // foodModel.find({age:{$gte:16}})
        // foodModel.find({name:{$regex:reg}}) 名字模糊
    foodModel.find({
            $or: [
                { name: { $regex: reg } },
                { desc: { $regex: reg } }
            ]
        })
        .then((data) => {
            res.send({ err: 0, msg: '查询成功', list: data })
        })
        .catch((err) => {
            res.send({ err: -1, msg: '查询失败' })
        })
})

// 删除
router.post('/del', (req, res) => {
    let { _id } = req.body
    foodModel.remove({ _id }) //单个删除

    // foodModel.remove({ _id: [id1, id2] }) //多个删除

    .then((data) => {
            res.send({ err: 0, msg: '删除成功' })
        })
        .catch(() => {
            res.send({ err: -1, msg: '删除失败' })
        })
})

// 修改
router.post('/update', (req, res) => {
    let { name, price, desc, typename, typeid, img, _id } = req.body
        //判断参数是否正确
    foodModel.updateOne({ _id }, { name, price, desc, typename, typeid, img })
        .then((data) => {
            res.send({ err: 0, msg: '修改成功' })
        })
        .catch(() => {
            res.send({ err: -1, msg: '修改失败' })
        })
})

// 分页
router.post('/getInfoByPage', (req, res) => {
    let pagesize = req.body.pageSize || 2 //设置默认值
    let page = req.body.page || 1
    let count = 0
    foodModel.find()
        .then((list) => {
            count = list.length //获取总的数据条数
            return foodModel.find().limit(Number(pagesize)).skip(Number((page - 1) * pagesize))
        })
        .then((data) => {
            let allpage = Math.ceil(count / pagesize)
            res.send({
                err: 0,
                msg: '分页成功',
                info: {
                    list: data,
                    count: count,
                    allpage: allpage
                }
            })

        })
        .catch(() => {
            res.send({ err: -1, msg: '分页失败' })
        })
})

module.exports = router