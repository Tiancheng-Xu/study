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

// 邮件信息
let mailobj = {
    from: '"tc" <271251549@qq.com>', // sender address
    to: "271251549@qq.com", // list of receivers
    subject: "test", // Subject line
    text: "Hello world?", // plain text body
    // html: "<b>Hello world?</b>" // html body
}

//发送邮件
transporter.sendMail(mailobj, (err, date) => {
    console.log(err)
    console.log(date)
})