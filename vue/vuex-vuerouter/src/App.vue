<template>
  <div id="app">
    <router-link :to="{name:'pageA'}">pageA</router-link><br>
    <router-link to="/b/123">b/123</router-link><br>
    <router-link to="/b/123/test">b/123/test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
