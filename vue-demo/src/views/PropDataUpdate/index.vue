<template>
    <div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>
    <PropsAndData :name="name" :info="info" :list="list" />
  </div>
</template>

<script>
import PropsAndData from "./PropsAndData";
let name = name;
export default {
  components: {
    PropsAndData
  },
  data() {
      this.name = name;
    return {
      // 此处由于只声明了info为响应式，vue不会对info中的字段做响应式的处理，所以如info.number不会触发组件更新
      info: {},
      // 需要实现info.number更新到组件，可用下面这段
      // info: {
      //   number: undefined
      // },
      list: []
    }
  },
  handleNameChange() {
      this.name = "vue" + Date.now();
      console.log("this.name 发生了变化，但是并没有触发子组件更新，因为name声明在data return外，没有做响应式处理。可以把name的声明放入data return 解决", this.name);
    },
    handleInfoChange() {
      // vue通过实现所有Object.defindeProperty中的get/set方法，实现对象的响应式
      this.info.number = 1;
      // vm.$set(object, key, value)将响应属性添加到嵌套的对象
      // this.$set(this.info, 'number', 1)
      console.log("this.info 发生了变化", this.info);
    },
    handleListChange() {
      // vue对数组变异函数进行重写，从而实现数组的响应式
      this.list.push(1, 2, 3);
      console.log("this.list 并没有发生变化", this.list);
    }
}
</script>

<style>

</style>