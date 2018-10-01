<template>
  <div class="todo-detail">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><router-link to="/home/123">Task(123)</router-link></li>
      <li><router-link to="/home/321">Task(321)</router-link></li>
      <li><router-link to="/home/333">Task(333)</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoDetail',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
