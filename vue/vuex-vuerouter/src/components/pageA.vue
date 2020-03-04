<template>
  <div>
    <button @click="add">+</button>
    {{$store.state.count}}
    <button @click="minus">-</button>
  </div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$store.dispatch('increment')
    },
    minus(){
      this.$store.dispatch('decrement')
    }
  }
}
</script>