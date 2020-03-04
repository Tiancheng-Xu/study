<template>
  <div>
      <h2>{{msg}}--vuex--{{this.$store.state.count}}</h2>
      <br>
      <button @click="incCount()">增加</button>
      <ul>
          <li v-for="(item,key) of list" :key='key'>
              <router-link :to="'/content/'+item.aid">{{key}}--{{item.title}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
    data(){
        return{
            msg:'新闻组件',
            list:[]
        }
    },
    store,
    methods:{
        incCount(){
            //改变vuex store里面的数量
            this.$store.commit('incCount')//触发state里数据
        },
        requestDate(){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'

            this.$http.jsonp(api).then((response)=> {
            
                console.log(response)

                this.list=response.body.result
            
            }, function(err){
                console.log(err)
            })
        }
    },mounted(){
        this.requestDate()
    }
}
</script>

<style>

</style>
