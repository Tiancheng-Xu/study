/*
爬虫案例
1.获取目标网站  http.get
2.分析网站内容  cheerio 可以使用jq里的选择器
3.获取有效信息 下载或者其他操作

1.请求网站数据
2.将数据保存本地文件
*/

const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
let url = 'https://www.baidu.com/'
let json = 'http://nodejs.org/dist/index.json'
http.get(url, (res) => {
    //安全判断

    /*
    let obj = {name:123,age:456}
    let name = obj.name
    上面＝下面
    let {name} =obj
    */
    const { statusCode } = res; //状态码
    const contentType = res.headers['content-type']; //数据类型
    console.log(statusCode, '\n', contentType)

    let error
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected text/html but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory 
        res.resume();
        return;
    }

    //数据处理
    //数据分段，只要接受数据就会触发data事件 chunk 每次接受的数据片段
    let rawData = ''
    res.on('data', (chunk) => {
            console.log('——')
            rawData += chunk.toString('utf8')
                // console.log(chunk.toString('utf8'))
        })
        //数据流传输完毕
    res.on('end', () => {
        //将请求的数据保存到本地
        // fs.writeFileSync('./baidu.html', rawData)
        //通过cheerio 分析
        let $ = cheerio.load(rawData)
        $('img').each((index, el) => {
            console.log($(el).attr('src'))
        })
        console.log('数据传输完毕')
    }).on('error', (err) => {
        console.log('请求错误')
    })
})