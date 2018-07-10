import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import From from '@/components/from'
const From = () => import('@/components/from')//两种写法都可以
const PagesView=()=>import('@/views/pagesView')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',name: 'HelloWorld',component: HelloWorld
    }, 
    {
      path: '/From', name: 'from',component: From
    },{
      path:'/pages',
      component:PagesView,
    }
  ],
  mode:'history'
})
