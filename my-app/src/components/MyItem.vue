<template>
  <li v-text="item" class="item"></li>
</template>

<script>
export default {
    props: {
        item: String    // Boolean, Number, Array, Object, Function, Promise...
    }
}
</script>

<style scoped>
.item {
    color: red;
}
</style>