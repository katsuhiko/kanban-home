<template>
  <div class="todo-list">
    <h1>{{ msg }}</h1>
    <h3>Todo List</h3>
    <ul>
      <li>
        <a href="javascript:void(0);" @click="$store.dispatch('setTodoId', { todoId: 123 })">Todo(123)</a>
        <div v-if="$store.state.todoId === 123">
          ID : 123
          <p>名鉄3400系電車は、名古屋鉄道が主に優等列車運用に供する目的で1937年（昭和12年）に導入した電車である。</p>
        </div>
      </li>
      <li>
        <a href="javascript:void(0);" @click="$store.dispatch('setTodoId', { todoId: 321 })">Todo(321)</a>
        <div v-if="$store.state.todoId === 321">
          ID : 321
          <p>ロイヤル・カリビアン・インターナショナル社がポストパナマックスクラスに適用させ建造したクルーズ客船で、全5隻からなるボイジャー級の一番船である。</p>
        </div>
      </li>
      <li>
        <a href="javascript:void(0);" @click="$store.dispatch('setTodoId', { todoId: 333 })">Todo(333)</a>
        <div v-if="$store.state.todoId === 333">
          ID : 333
          <p>本駅は茨城県土浦市の上坂田と下坂田が接するあたりにあった。</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
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
