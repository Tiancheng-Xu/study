const express = require('express')
const router = express.Router() //获取路由的实例

router.get('/add', (req, res) => {
    res.send('user add ok')
})

router.get('/del', (req, res) => {
    res.send('user del ok')
})

module.exports = router