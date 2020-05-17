<template>
  <div id="app">{{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
      <ul>
        <my-item v-for="(item, index) in list" :key="`Aitem${index}`" :item="item"></my-item>
      </ul>
      <!-- 使用插槽 -->
      <ul>
        <my-item-with-slot v-for="(item, index) in list" :key="`Bitem${index}`" :item="item">
          <!-- 2.5以前语法，指定的插槽用slot="name" -->
          <!-- <span slot="myitem" style="font-size:20px">{{item}}</span> -->
          <!-- 2.6新语法，使用v-slot，写在template下  -->
          <template v-slot:myitem="itemProps">
             <span :style="{fontSize:'20px', color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
          </template>
        </my-item-with-slot>
      </ul>
    </div>
  </div>
</template>

<script>
import MyItem from './components/MyItem.vue'
import MyItemWithSlot from './components/MyItemSlot.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    MyItem,
    MyItemWithSlot
  },
  data() {
      return {
        msg: "hello world",
        info: '',
        list: [],
      }
  },
  methods: {
    handleClick() {
      this.list.push(this.info)
      this.info = ''
    }
  }
}
</script>

<style>

</style>
