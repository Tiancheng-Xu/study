const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shier', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//  连接数据库
var db = mongoose.connection; //  数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // console.log('db ok')
});

//  schema  对象

//  创建一个和集合相关的schema对象  类似表头
// var Schema = mongoose.Schema;
// 获取schema 对象
var userSchema = new mongoose.Schema({
    us: { type: String, required: true },
    ps: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 },
    mail: { type: String, required: false }
});
//  将schema 对象转化为数据模型
var User = mongoose.model('user', userSchema) //该数据对象和集合关联('集合名'，schema对象)

//  操作数据库
// 插入
// User.insertMany({ us: 'wangyi', ps: '123', age: 16, mail: '271251549@qq.com' })
//     .then((data) => {
//         console.log(data)
//         console.log('插入成功')
//     }).catch((err) => {
//         console.log('插入失败')
//     })

// 查询
User.find({ age: 17 })
User.find({})
    .then((data) => {
        console.log(data)
        console.log('查询成功') //有查到没数据，不报错
    }).catch((err) => {
        console.log('查询失败')
    })

//删除
// User.deleteMany({ us: 'wangyi' })
//     .then((data) => {
//         console.log(data)
//         console.log('删除成功') //
//     }).catch((err) => {
//         console.log('删除失败')
//     })

// 修改
// User.update({ us: '123' }, { $set: { mail: '123@456.org' } })
//     .then((data) => {
//         console.log(data)
//         console.log('修改成功') //
//     }).catch((err) => {
//         console.log('修改失败')
//     })