<template>
  <div id="app">
    <p v-text="getterCount"></p>
    <p v-text="count"></p>
    <button @click="handleIncrease">increase</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    getterCount() {
      return this.$store.getters.count
    },
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    handleIncrease() {
      this.$store.commit("increment")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
