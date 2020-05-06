<template>
  <div>
      <router-link to="/foo">Go to /Foo</router-link>
      <br/>
      <router-link to="/user/12">Go to /user/12</router-link>
      <br/>
      <!-- Vue-Router的API -->
      <button @click="$router.push('/foo')">Go to /Foo</button>
      <p>id: {{id}}</p>
      <p>{{routerInfo}}</p>
  </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        // this.$router：提供的路由实例信息，可以在开发中根据其做逻辑判断
        routerInfo() {
            const { fullPath, path, name, params, query, meta } = this.$router
            return {
                fullPath, path, name, params, query, meta
            }
        }
    }
    // data() {
    //     return {
    //         routerInfo: ""
    //     }
    // },
    // watch: {
    //     $route (to, from) {
    //         console.info(from)
    //         console.info(to)
    //         const { fullPath, path, name, params, query, meta } = to
    //         return {
    //             fullPath, path, name, params, query, meta
    //         }
    //     }
    // }
}
</script>

<style>

</style>