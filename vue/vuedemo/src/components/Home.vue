<template>
  <div>
      <h2>{{msg}}--vuex--{{this.$store.state.count}}--{{this.$store.getters.computedCount}}</h2>
      <br>
      <button @click="incCount()">增加</button>
      <hr/>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  data(){
    return{
      msg:'首页组件'
    }
  },
  store,
  methods:{
    incCount(){
      //改变vuex store里面的数量
      // this.$store.commit('incCount')//触发state里数据

      this.$store.dispatch('incMutationsCount')
    }
  }
}
</script>

<style>

</style>