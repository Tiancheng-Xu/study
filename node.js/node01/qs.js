const qs = require('querystring')
    // let string = 'name=23423&pass=1231&sex=1'
    // let obj = qs.parse(string)
    // let string = 'name#23423@pass#1231@sex#1'
    // let obj = qs.parse(string, '@', '#') //以@切换键，以#切换键和值
    //将query字符串变成query对象，等同split
    // console.log(obj)

//stringify
// let obj = { name: 'xutiancheng', pass: '123', sex: '0' }
// let string = qs.stringify(obj)
// let string = qs.stringify(obj, '^', '?')
// console.log(string)

//编码
let strinfg = 'w=你好&foo=bar'
let result = qs.escape(strinfg)
console.log(result)

//解码
let escape = 'w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
console.log(qs.unescape(escape))