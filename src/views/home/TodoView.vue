<template>
  <div class="task">
    <router-link to="/home">Home</router-link>
    TodoView!!!
  </div>
</template>

<script>
// @ is an alias to /src
import TodoDetail from '@/components/TodoDetail.vue'

export default {
  name: 'todo',
  components: {
    TodoDetail
  }
}
</script>
