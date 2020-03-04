<template>
    
    <div>
        {{msg}}


        <br />


        <button @click="run()">触发事件</button>

        <br>
        <br>
        <ul>
            <li v-for="(item,key) in list" :key="key" >
                    {{item}}
            </li>
        </ul>

        <img src="../../../static/images/home2.png" />        


    </div>
</template>


<script>
//注意：创建页面的时候必须 暴露 、    不然可能会卡死
    export default{

        data(){
            return{
                msg:'我是一个用户组件',
                list:[]
            }
        },
        methods:{

            run(){

                console.log('执行方法')

                const url = '../index/main'
                wx.switchTab({ url })
            }
        },
        /*生命周期函数：可以用vue的 也可以用小程序的*/

        created(){


            for(var i=0;i<10;i++){

                this.list.push('我是第'+i);
            }
        }

    }
</script>