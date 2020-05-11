<template>
   <div>
       <p>name: {{name}}</p>
       <p>type: {{type}}</p>
       <p>list: {{list}}</p>
       <p>isVisiable: {{isVisiable}}</p>
       <button @click="handleClick">change type</button>
   </div>
</template>

<script>
export default {
    name: "PropDemo",
    // inheritAttrs: false,
    // props: ['name', 'type', 'list', 'isVisiable'],
    props: {
        name: String,
        type: {
            // 返回boolean
            validator: function (value) {
                return ["success", "warning", "danger"].includes(value)
            }
        },
        list: {
            type: Array,
            // 对象或者数组默认值必须从一个工厂函数中获取
            default: () => []
        },
        isVisiable: {
            type: Boolean,
            default: false
        },
        onChange: {
            type: Function,
            default: () => {}
        },
    },
    methods: {
        handleClick() {
            // 这样做是错误的，prop是单向数据流，子组件改变不了父组件的值
            // this.type = "warning";

            this.onChange(this.type === "success" ? "warning" : "success")
        }
    }
}
</script>

<style>

</style>