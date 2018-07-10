 import vue from 'vue'
 import Vuex from 'vuex'

 vue.use(Vuex)
 const store = new Vuex.Store({
    state:{
        count:0
    }
 })

 export default store;