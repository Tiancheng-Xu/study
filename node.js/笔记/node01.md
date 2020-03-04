### marckdown使用

# 标题1 
## 标题2
``` js
 console.log(111)
```
> 内容引用

+ 列表一
  + xxx
  - xxxx
+ 列表2
  1. 1111
  2. xxxx

[官网链接](http://www.baidu.com)

# node

## what 
  + chrome V8 runtime
  + 事件驱动
  + 非阻塞的i/0

  i/0 ：input  output 输入输出流 正常下i/0的操作都是阻塞的（ajax 同步）
  网络请求 数据库处理  文件的读写 。。。。
  优点：高并发特别好
## why
  1. 防止甩锅 ,明确数据交互的错误问题在谁
  2. 能够书写api 斜杠青年
  3. 了解前后端的交互流程 
  4. 全干
## api 接口
[api接口文档](http://47.95.207.1:3000/apidoc/)



### js运行环境
  + 浏览器
    - 基本语法
    - bom
    - dom
    - ajax
    - 系统文件数据库（不能 ，不是语言不能 处于安全性考虑不能）
  + 服务器
    - 基本语法
    - 能操作数据库
    - 能操作本地文件

  限制语言能力的不是语言本身，而是语言的运行环境（平台）

### nvm 
详见笔记文档

### node运行环境 REPL 

直接在命令行写代码

### 模块化
  + 内置模块（node 中提供的可以直接调用）
    - 文件操作
  + 第三方模块
  + 自定模块
    - 创建一个模块 （一个js文件一个模块）
    - 导出一个模块  (module.exports=name)
    - 引用一个模块并且调用

#### 打印当前目录的目录树  
1. 实现的效果
2. 分析功能点 
  + 当前目录结构
  + 分辨是文件还是文件夹

### 内置模块 fs

### 内置模块 url
url 统一资源定位符
https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao

### 爬虫案例
  1. 获取目标网站  http.get
  2. 分析网站内容  cheerio  可以使用jq里的选择器
  3. 获取有效信息 下载或者其他操作
### 邮箱验证码案例
  注册案例  1560000000  pass pass
  + nodemailer 可以实现发邮件
  + npm install  jquery --save
  + [npm 官网](https://www.npmjs.com/)
### 网络基本知识
   + web服务器
   + api服务器