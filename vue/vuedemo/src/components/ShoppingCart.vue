<template>
    <div>
        <h1>{{msg}}</h1>
        <hr>
        <div>
            <h2>{{h2_1}}</h2>
            <div>
                <label for="">课程名称:</label>
                <input type="text" v-model="courseInfo.name">
            </div>
            <div>
                <label for="">课程价格</label>
                <input type="text" v-model="courseInfo.price">
            </div>
            <div>
                <button @click="addCourseToList()">添加到课程列表</button>
            </div>
        </div>

        <div>
            <h2>{{h2_2}}</h2>
            <table>
                <tr>
                    <th>课程名称</th>
                    <th>课程价格</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(item,index) of courseList" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>   
                    <td>
                        <button @click="addCourseToCart(index)">添加到购物车</button>
                    </td>
                </tr>
                <tr></tr>
            </table>
        </div>

        <div>
            <h2>{{h2_3}}</h2>
            <tr>
                <td>勾选</td>
                <td>课程名称</td>
                <td>课程价格</td>
                <td>数量</td>
                <td>价格</td>
            </tr>
            <tr v-for="(item,index) of courseItem" :key="item.id">
                <td>
                    <input type="checkbox" v-model="item.isActive">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button @click="minus(index)">-</button>
                    {{item.number}}
                    <button @click="add(index)">+</button>
                </td>
                <td>{{item.price*item.number}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{isActiveCourse}}/{{allCourseList}}</td>
                <td>{{allPrice}}</td>
            </tr>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            msg:'购物车',
            h2_1:'添加课程',
            h2_2:'课程列表',
            h2_3:'购物车',
            courseInfo:{
                name:'',
                price:''
            },
            courseItem:[],
            courseList:[],
        }
    },
    methods:{
        addCourseToList(){
            this.courseList.push(this.courseInfo)
            this.courseInfo={}
        },
        addCourseToCart(index){
            let item = this.courseList[index]
            let isHasCourse = this.courseItem.find(x=>x.id == item.id)
            if(isHasCourse){
                isHasCourse.number +=1
            }else{
                this.courseItem.push({
                    ...item,
                    number:1,
                    isActive:true
                })
            }
        },
        minus(index){
            let number = this.courseItem[index].number
            if(number>1){
                this.courseItem[index].number -= 1
            }else{
                if(window.confirm('确定要删除吗')){
                    this.remove(index)
                }
            }
        },
        add(index){
            this.courseItem[index].number += 1
        },
        remove(index){
            this.courseItem.splice(index,1)
        }
    },
    computed:{
        isActiveCourse(){
            return this.courseItem.filter(item=>item.isActive).length
        },
        allCourseList(){
            return this.courseItem.length
        },
        allPrice(){
            let num = 0
            this.courseItem.forEach(item=>{
                if(item.isActive){
                    num += item.price*item.number
                }
            })
            return num
        }
    }
}
</script>

