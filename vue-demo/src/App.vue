<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <component-demo></component-demo>
  </div>
</template>

<script>
import ComponentDemo from './views/ComponentDemo'

export default {
  name: 'App',
  components: {
   ComponentDemo
  },
  data () {
    return {

    }
  },
  methods: {

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
