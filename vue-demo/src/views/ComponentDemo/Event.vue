<template>
  <div>
    name: {{ name }}
    <br />
    <input :value="name" @input="handleChange" />
    <!-- v-model和上面的语句是一样的效果，而v-model只是语法糖 -->
    <!-- <input v-model="inputValue" /> -->
    <br />
    <div @click="handleDivClick">
      <button @click="handleClick">重置成功</button>
      <button @click.stop="handleClick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    handleDivClick() {
      this.$emit("change", "");
    },
    handleClick() {
      // 阻止事件冒泡
      // e.stopPropagation()
    }
  }
};
</script>

<style>
</style>