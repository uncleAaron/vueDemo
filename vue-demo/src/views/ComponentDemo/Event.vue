<template>
  <div>
      name: {{ name }}
      <br/>
      <input :value="name" @change="handleChange" />
      <br/>
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
            this.$emit("change", event.target.value)
        },
        handleDivClick() {
            this.$emit("change", "")
        },
        handleClick() {
            // 阻止事件冒泡
            // e.stopPropagation()
        }
    }
}
</script>

<style>

</style>