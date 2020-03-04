<template>
  <div>
      <h2>{{msg}}--vuex--{{this.$store.state.count}}</h2>
      <br>
      <button @click="incCount()">增加</button>
      <hr>
      <input type="text" v-model='todo' @keydown='doAdd($event)' />

      <button @click="doAdd()">增加</button>

      <br>

      <hr>

      <br>

      <h2>进行中</h2>

      <ul>

        <li v-for="(item,key) in list" :key="key" v-show="!item.checked">

            <input type="checkbox" v-model="item.checked" @change="saveList()">

            {{item.title}} --- <button @click="removeDate(key)">删除</button>

        </li>

      </ul>

      <br>

      <h2>已完成</h2>

        <ul>

        <li v-for="(item,key) in list" :key="key" v-show="item.checked">

            <input type="checkbox" v-model="item.checked" @change="saveList()">
            {{item.title}}
            <button @click="removeDate(key)">删除</button>

        </li>

      </ul>

      <br>
  </div>
</template>

<script>
import store from '../vuex/store.js'
import storage from '../model/storage.js'
export default {
    data(){
        return{
            msg:'备忘录',
            todo:'',
            list:[]
        }
    },
    store,
    methods:{
        incCount(){
            //改变vuex store里面的数量
            this.$store.commit('incCount')//触发state里数据
        },
        doAdd(e){
            if(!e||e.keyCode===13){
                this.list.push({
                    title:this.todo,
                    checked:false
                })
                this.todo=''
                storage.set('list',this.list)
                console.log(this.list)
            }else{
                return false
            }
        },
        removeDate(key){
            this.list.splice(key,1)
            storage.set('list',this.list)
        },
        saveList(){
            storage.set('list',this.list)
        }
    }
}
</script>

<style>

</style>