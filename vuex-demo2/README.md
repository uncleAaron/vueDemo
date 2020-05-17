# Vuex最佳实践

+ 使用 Vuex 的 mapXXX 特性

  + State —— this.$store.state.xxx —— mapState 取值
  + Getter —— this.$store.getters.xxx —— mapGetters 取值
  + Mutation —— this.$store.commit(“xxx”) —— mapMutations 赋值
  + Action —— this.$store.dispatch(“xxx”) —— mapActions 赋值

  

+ 使用常量替代 Mutation 事件类型



+ 使用Vuex 的 Module 特性做模块化的状态拆分（需开启命名空间namespaced: true）

