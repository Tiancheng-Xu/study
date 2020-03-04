<template>
  <div id="app">
    <router-link to='/home'>首页</router-link>
    <br/>
    <router-link to='/todoList'>备忘录</router-link>
    <br/>
    <router-link to="/news">新闻</router-link>
    <br/>
    <router-link to="/shoppingCart">购物车</router-link>
    <br>
    <router-link to="/form">element-表单</router-link>
    <hr>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
