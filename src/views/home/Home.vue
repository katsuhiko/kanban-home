<template>
  <div class="home">
    <div>
      <router-link to="/home">Home</router-link> |
      <router-link to="/home/2">Home2</router-link>
    </div>
    <!--
    <img alt="Vue logo" src="@/assets/logo.png">
    -->

    <TodoList msg="Task List(Vue.js)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
