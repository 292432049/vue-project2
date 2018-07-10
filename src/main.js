
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from "axios";

//全局注册vue
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// vue 实例化
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
