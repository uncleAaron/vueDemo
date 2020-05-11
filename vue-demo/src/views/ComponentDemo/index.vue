<template>
  <div>
    <my-prop 
      name="nihao"
      :type="type"
      :is-visiable="false"
      :on-change="handlePropChange"
      />
    <my-event :name="eventName" @change="handleNameChange"></my-event>
    <div>
      <h2>2.6新语法</h2>
      <my-slot>
        <p>default slot</p>
        <template v-slot:title>
          <h2>二级标题</h2>
        </template>
        <template v-slot:item="property">
          <p>{{property.value}}</p>
        </template>
      </my-slot>
    </div>

    <div>
      <h2>老语法</h2>
      <my-slot>
        <p>default slot</p>
        <h2 slot="title">二级标题</h2>
        <p slot="item" slot-scope="property">{{property.value}}</p>
      </my-slot>
    </div>
  </div>
</template>

<script>
import myProp from './Props.vue'
import myEvent from './Event.vue'
import mySlot from './Slot.vue'

export default {
  components: {
    myProp,
    myEvent,
    mySlot
  },
  data () {
    return {
      type: "warning",
      eventName: "哈哈"
    }
  },
  methods: {
    handlePropChange(value) {
      this.type = value
    },
    handleNameChange(value) {
      this.eventName = value
    }
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
