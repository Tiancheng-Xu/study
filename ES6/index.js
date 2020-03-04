
// let [a,[b,c],d] =[0,[1,2],3]
// console.log('let [a,[b,c],d] =[0,[1,2],3]')
// console.log(a)  //  0
// console.log(b)  //  1
// console.log(c)  //  2
// console.log(d)  //  3

// let [a,b='xtc'] =  ['徐天成']   //  a='徐天成'  b='xtc'
// console.log(a+b)

// let {foo,bar} = {foo:'我是foo',bar:'我是bar'}
// console.log("let {foo,bar} = {foo:'我是foo',bar:'我是bar'}")
// console.log(foo+bar)

// let [q,w,e] = 'xtc'
// console.log('[q,w,e]="xtc",q='+q+',w='+w+',e='+e)

// let arr1=['www','xtc','com']
// // let arr2 = arr1  arr2变，arr1变
// let arr2 = [...arr1]    //arr2变，arr1不变
// console.log('arr2:'+arr2)
// arr2.push('xutiancheng')
// console.log('arr1:'+arr1)
// console.log('arr2:'+arr2)

// //rest运算符
// // rest参数作用： 将多余的逗号分隔的参数序列转换为数组参数
// // 注意： rest参数必须是最后一个参数，否则报错
// function xtc(a,b,...arg){
//     // console.log(arg.length)

//     // for(let i = 0;i<arg.length;i++){
//     //     console.log(arg[i])
//     // }

//     for(let val of arg){
//         console.log(val)
//     }
// }
// xtc(0,1,2,3,4,5,6,7)    //不输出a,b

// // includes()
// // startsWith()
// // endsWith()
// // repeat()
// let xtc="徐天成"
// let mail=`${xtc}字符串模板demo`
// console.log(mail)
// console.log(`${mail}中是否包含${xtc}`)
// console.log(mail.includes(xtc))

// // 二进制声明 Binary
// let binary = 0B010101
// console.log(`0B010101=${binary}`)
// // 八进制声明 Octal
// let Octal = 0O666
// console.log(`0O666:${Octal}`)

// // 数字判断 Number.isFine false:String,NAN,undefined
// // Number.isNaN
// // Number.isInteger    整数
// // Number.parseFloat   浮点
// let a=11/4
// console.log(`${a}isFinite:`+Number.isFinite(a))
// console.log(`${a}isNAN:`+Number.isNaN(a))
// console.log(`${a}isInteger:`+Number.isInteger(a))
// console.log(`${a}parseFloat:`+Number.parseFloat(a))
// console.log(`${a}parseInt:`+Number.parseInt(a))

// console.log(`Math.pow(2,53)-1 = ${Math.pow(2,53)-1}`)
// console.log(`Number.MAX_SAFE_INTEGER=${Number.MAX_SAFE_INTEGER}`)
// console.log(`Number.MIN_SAFE_INTEGER=${Number.MIN_SAFE_INTEGER}`)
// console.log(`Number.isSafeInteger(Math.pow(2,53)-1)=${Number.isSafeInteger(Math.pow(2,53)-1)}`)
// console.log(`Number.isSafeInteger(Math.pow(2,53))=${Number.isSafeInteger(Math.pow(2,53))}`)

// // json数组格式   
// let json={
//     '0':'xtc',
//     '1':'徐天成',
//     '2':'ES6',
//     length:3
// }
// let arr = Array.from(json)
// console.log(arr) // xtc,徐天成,ES6
// // Array.of
// let arr1 = Array.of(3,4,5,6)
// console.log(`${arr1}`)  //  arr1 = [3,4,5,6]

// JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}',(k,v)=>{
//     console.log(`${k}--${v}`)
// })

// // find()实例方法
// // let arr=[1,2,3,4,5,6,7,8,9]
// let arr=['xtc','徐天成','ES6']
// console.log(arr.find(function(value,index,arr){
//     // return value >5
//     return value == 'xtc'
// }))

// // fill()    array.fill(value, start, end)   end默认我array.length
// let arr=['xtc','徐天成','ES6']
// console.log('arr:'+arr) //  arr:xtc,徐天成,ES6
// arr.fill('web',1,3)
// console.log(`arr.fill('web',1,3):${arr}`)   //  arr.fill('web',1,3):xtc,web,web

// // 数组循环
// let arr=['xtc','徐天成','ES6']
// for(let [key,value]  of arr.entries()){
//     console.log(`${key}:${value}`)
// }

// // entries
// let arr=['xtc','徐天成','ES6']
// let list = arr.entries()
// console.log(`arr=['xtc','徐天成','ES6']
// list = arr.entries()`)
// console.log(`list.value:${list.value}`)
// console.log(`list.next().value:${list.next().value}`)
// console.log(`list.next().value:${list.next().value}`)
// console.log(`list.next().value:${list.next().value}`)

// function add(a,b=2){
//     return a+b
// }
// console.log(`1+2=${add(1)}`)
// console.log(`add.length:${add.length}`)
// var add=(a,b=1)=>a+b
// console.log(`var add=(a,b=1)=>a+b
// add(1):${add(1)}`)

// // 对象的函数结构json
// let json={
//     a:'xtc',
//     b:'徐天成'
// }
// function fun({a,b}){
//     console.log(`a:${a}b:${b}`)
// }
// fun(json)

// // 数组结构
// let arr=['xtc','徐天成','ES6']
// function fun(a,b,c){
//     console.log(a,b,c)
// }
// fun(...arr)

// // in  的用法
// let obj={
//     a:'xtc',
//     b:'徐天成'
// }
// console.log('c' in obj) //false

// let arr = [,2,,]
// // console.log(arr.length)  //老的判断是否有值的方法，只能判断有几个空位，不能判断是否为空
// console.log(1 in arr)    //in 判断arr[n]是否有值

// // 数组遍历    forEach
// let arr=['xtc','徐天成','ES6']
// arr.forEach((val,index)=>{
//     console.log(`${index}:${val}`)
// })

// // 数组遍历    filter
// let arr=['xtc','徐天成','ES6']
// arr.filter(x=>console.log(x))

// // 数组遍历    some
// let arr=['xtc','徐天成','ES6'] 
// arr.some(x=>console.log(x))

// // 数组遍历    map
// let arr=['xtc','徐天成','ES6']
// console.log(arr.map(x=>x))
// console.log(arr.map(x=>(x,'web')))

// // 数组转换字符串
// let arr=['xtc','徐天成','ES6']
// console.log(arr.toString())
// console.log(arr.join('-'))

// // 对象赋值
// let name = 'xtc'
// let skill = 'web'
// // let obj = {name:name,skill:skill}   //ES5
// let obj = {name,skill}   //ES6
// console.log(obj)

// // key值得构建
// let key = 'skill'
// var obj = {
//     [key]:'web'
// }
// console.log(obj)

// // 自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b
//     }
// }
// console.log(obj.add(1,2))

// // is()
// let obj1={name:'xtc'}
// let obj2={name:'xtc'}
// console.log(obj1.name === obj2.name)    //ES5
// console.log(Object.is(obj1.name,obj2.name))    //ES6

// // === 同值相等    is() 严格相等
// console.log(`+0===-0${+0===-0}`)
// console.log(`NAN===NAN${NaN===NaN}`)
// console.log(`Object.is(+0,-00${Object.is(+0===-0)}`)
// console.log(`Object.is(NAN,NAN)${Object.is(NaN,NaN)}`)

// // assign 合并对象
// let a={a:'xtc'}
// let b={b:'web'}
// let c={b:{a:'a',b:'b'},c:'vue'}
// let d=Object.assign(a,b,c) 
// console.log(d) 
// // {
// //     a:'a',
// //     b:{
// //         a:'a',
// //         b:'b'
// //     },
// //     c:'vue'
// // }

// // Symbol

// let f = Symbol()
// console.log(typeof(f))  //Symbol
// let xtc = Symbol('徐天成')
// console.log(xtc)    //红字 Symbol类型
// console.log(xtc.toString()) //黑字  字符串 

// let name = Symbol('')
// let obj = {
//     [name]:'vue'
// }
// console.log(obj[name])
// obj[name]='react'
// console.log(obj[name])

// Symbol()  默认不被遍历，需要obj[symbol]输出
// let obj={
//     name:'xtc',
//     skill:'web'
// }
// let age = Symbol()
// obj[age]=18
// //for in 遍历数组的索引(key)    
// //for of 遍历数组的值(value),不能遍历对象
// for(let item in obj){
//     console.log(obj[item])
//     console.log(obj[age])
// }

// // Set set中的数组不允许重复
// let setArr = new Set(['xtc','徐天成','web'])
// setArr.add('前端')
// console.log(setArr)

// // has
// console.log(setArr.has('xtc'))
// setArr.delete('web')
// console.log(setArr)

// // for of
// for(let item of setArr){
//     console.log(item)
// }

// // forEach
// setArr.forEach((value)=>{
//     console.log(value)
// })
// // size
// console.log(setArr.size)

// // WeakSet  放对象 不能重复 内存空间不同，可以打印相同的对象
// let weakObj = new WeakSet()
// let obj={a:'xtc',b:'vue',c:'react'}
// let obj1={a:'xtc',b:'vue',c:'react',d:'babel'}
// weakObj.add(obj)
// weakObj.add(obj1)
// console.log(weakObj)

// // map数据结构
// let json={
//     name:'xtc',
//     skill:'web'
// }
// console.log(json.name)
// //=>    
// var map = new Map()
// // map.set(key,value)
// map.set(json,'iam')
// console.log(map)
// map.set('xtc',json)
// console.log(map)

// // map 增删查
// // get
// console.log(map.get(json)) //iam
// console.log(map.get('xtc')) //{json}

// // delete
// // map.delete(json)
// console.log(map)
// // map.clear()
// console.log(map.size)
 
// //has   true    false
// console.log(map.has('xtc'))

// // set get has delete clear size

// // proxy   代理    ES6 增强    对象和函数（方法）   生命周期 预处理
// let obj={
//     add:function(val){
//         return val + 100
//     },
//     name:'xtc'
// }
// // console.log(obj.add(100))
// // console.log(obj.name)

// let pro = new Proxy({
//     add:function(val){
//     return val + 100
//     },
//     name:'xtc'
// },{
//     //get set apply
//     get:function(target,key,property){
//         console.log('come in get')
//         return target[key]
//     },
//     set:function(target,key,value,receiver){
//         console.log(`setting ${key}=${value}`)
//         return target[key]=value    //return 才改变值
//     }
// })

// console.log(pro.name)
// pro.name='徐天成'
// console.log(pro.name)

// let target=function(){
//     return 'I am xtc'
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply')
//         return Reflect.apply(...arguments)
//     }
// }
// let pro = new Proxy(target,handler)
// console.log(pro())

// // promise 解决ES5 回调地狱 
// let state=1

// function step1(resolve,reject){
//     if(state==1){
//         resolve('step1')
//     }else{
//         reject('!step1')
//     }
// }
// function step2(resolve,reject){
//     if(state==1){
//         resolve('step2')
//     }else{
//         reject('!step2')
//     }
// }
// function step3(resolve,reject){
//     if(state==1){
//         resolve('step3')
//     }else{
//         reject('!step3')
//     }
// }
// new Promise(step1).then(function(val){
//     console.log(val)
//     return new Promise(step2)
// }).then(function(val){
//     console.log(val)
//     return new Promise(step3)
// }).then(function(val){
//     console.log(val)
//     return new Promise(step3)
// })

// // class
// class Coder {
//     name(val){
//         console.log(val)
//         return val
//     }
//     skill(val){
//         console.log(this.name('徐天成')+':'+'skill-'+val)
//     }
//     constructor(a,b){   //构造函数
//         this.a=a
//         this.b=b
//     } 
//     add(){
//         return this.a + this.b
//     }
// }
// let xtc = new Coder(1,2)
// xtc.name('徐天成')
// xtc.skill('web')
// console.log(xtc.add())

// class htmler extends Coder{}
// let dq = new htmler
// dq.name('丁琪')

// 模块化操作 export 输出   import 引入
