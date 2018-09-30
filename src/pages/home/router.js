import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import Home2 from '@/views/home/Home2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home/2',
      name: 'home2',
      component: Home2
    }
  ]
})
