<template>
  <div>
    <router-link to="/foo">Go to /Foo</router-link>
    <br />
    <router-link to="/user/12">Go to /user/12</router-link>
    <br />
    <router-link to="/user/12/profile">Go to /user/12/profile</router-link>
    <br />
    <router-link to="/other">Go to 404</router-link>
    <br />
    <router-link to="/a">Go to a 重定向到 Bar</router-link>
    <br />
    <a href="#/foo">Go to Foo</a>
    <br />
    <!-- Vue-Router的API -->
    <!-- 踩坑:vue-router 3.1 以上 同路径使用push跳转会报错 -->
    <button @click="$router.push('foo')">Go to Foo</button>
    <p>id: {{id}}</p>
    <p>{{routerInfo}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    // this.$router：提供的路由实例信息，可以在开发中根据其做逻辑判断
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        name,
        params,
        query,
        meta
      };
    }
  }
  //   data() {
  //     return {
  //       routerInfo: ""
  //     };
  //   },
  //   watch: {
  //     $route(to, from) {
  //       console.info(from);
  //       console.info(to);
  //       const { fullPath, path, name, params, query, meta } = to;
  //       this.routerInfo = {
  //         fullPath,
  //         path,
  //         name,
  //         params,
  //         query,
  //         meta
  //       };
  //     }
  //   }
};
</script>

<style>
</style>