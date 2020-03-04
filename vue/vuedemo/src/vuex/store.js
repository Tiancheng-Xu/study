import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.state在vuex中用于存储数据
var state={
    count:1
}

// 2.mutations里面放的是方法，主要用于改变state里面的数据

var mutations={

    incCount(){
        ++state.count
    }
}

// 3.有点类似计算属性，改变state里面的count数据时会触发fetters里面的方法 获取新的值

var getters ={
    computedCount:(state)=>{
        return state.count *2
    }
}
 
// 4.基本没用
// Action 类似于 mutation，不同在于
// Action 提交的是mutation，而不是直接变更状态。
// Action 可以包含任何异步操作。

var actions={
    incMutationsCount(context){    //调用context.commit 提交一个 mutation
        context.commit('incCount')  //执行 mutations 里面的 incCount() 给变state里面的数据
    }
}

//vuex  实例化Vuex.Store
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store
