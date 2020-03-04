<template>
  <div>
    page/:id == {{id}}
    <br/>
    $route.params.id == {{$route.params.id}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){
    console.log('created')
    console.log('this.$route')
    console.log(this.$route)
    console.log('this.$route.params.id:s'+this.$route.params.id)
  },
  props:['id'],
  mounted(){
    console.log('mouted')
    console.log('this.id'+this.id)
  }
}
</script>

<style>

</style>