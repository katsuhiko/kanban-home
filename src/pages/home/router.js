import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import TodoView from '@/views/home/TodoView.vue'

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
      path: '/home/:todoId',
      name: 'todo-view',
      component: TodoView
    }
  ]
})
