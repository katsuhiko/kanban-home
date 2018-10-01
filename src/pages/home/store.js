import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoId: 0
  },
  mutations: {
    setTodoId (state, payload) {
      if (state.todoId === payload.todoId) {
        state.todoId = 0
      } else {
        state.todoId = payload.todoId
      }
    }
  },
  actions: {
    setTodoId (ctx, payload) {
      ctx.commit('setTodoId', payload)
    }
  }
})
