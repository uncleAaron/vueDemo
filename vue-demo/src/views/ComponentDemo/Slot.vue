<template>
  <div>
    <slot />
    <slot name="title"></slot>
    <!-- 作用域插槽通过v-bind的形式，将属性传递出去 -->
    <slot name="item" v-bind="{value: 'vue'}"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotDemo"
};
</script>

<style>
</style>