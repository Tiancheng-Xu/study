<template>
    <div>
        <h2>{{list.title}}</h2>
        <div v-html="list.content">{{list.content}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },mounted(){
        console.log(this.$routerparams)//获取动态路由传值
        var aid = this.$route.params.aid
        this.requestDate(aid)
    },methods:{
        requestDate(aid){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid
            this.$http.jsonp(api).then((response)=>{
                console.log(response)
                this.list=response.body.result[0]
            },function(err){
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>