"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", //发送方邮箱 通过lib/well-know/service.json查找
    port: 465, //端口号
    secure: true, // true for 465, false for other ports
    auth: {
        user: '271251549@qq.com', // 发送方邮箱
        pass: 'tbtsojfetwcabhde' // mtp验证码
    }
});

function send(mail, code) {
    // 邮件信息
    let mailobj = {
        from: '"tc" <271251549@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "test", // Subject line
        text: `您的验证码是${ code }，有效期五分钟`, // plain text body
        // html: "<b>Hello world?</b>" // html body
    }
    return new Promise((resolve, reject) => {
        //发送邮件
        transporter.sendMail(mailobj, (err, data) => {
            if (err) {
                reject()
            } else {
                resolve()
            }
        })
    })

}

// let obj={
//     send:send
// }
// module.exports=obj

// 上=下

module.exports = { send }