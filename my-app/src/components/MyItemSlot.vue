<!-- 作用域插槽 -->
<template>
  <li class="item">
      <input type="checkbox" v-model="checked">
      <slot name="myitem" v-bind:checked="checked"></slot>
  </li>
</template>

<script>
export default {
    props: {
        item: String    // Boolean, Number, Array, Object, Function, Promise...
    },
    data() {
        return {
            checked: false
        }
    }
}
</script>

<style scoped>
.item {
    color: red;
}
</style>