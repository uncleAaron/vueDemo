import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count: (state) => {
      return "getters: " + state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(state) {
      // state.count++ // 不要对state进行更改操作，应该通过commit交给mutations去处理
      state.commit('increment')
    }
  }
})

export default store;