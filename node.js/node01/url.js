const url = require('url')
    // let urlString = 'https:47.96.207.1:3000/fcj/rer/hot/hehe?us=123&ps=567#nihao'
    // let urlObj = url.parse(urlString)
    // console.log(urlObj)

let obj = {
    protocol: 'https:',
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: '#nihao',
    search: '?us=123&ps=567',
    query: 'us=123&ps=567',
    pathname: '47.96.207.1:3000/fcj/rer/hot/hehe',
    path: '47.96.207.1:3000/fcj/rer/hot/hehe?us=123&ps=567',
    href: 'https:47.96.207.1:3000/fcj/rer/hot/hehe?us=123&ps=567#nihao'
}

let string = url.format(obj)
console.log(string)

/*
url 类比 json 记忆 
url.parse 将url字符串转成对象
url.format 将url对象转成字符串
*/