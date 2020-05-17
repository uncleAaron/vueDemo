<template>
  <div>
    <button @click="destroyClock = !destroyClock">{{ destroyClock ? "加载时钟" : "销毁时钟" }}</button>
    <Clock v-if="!destroyClock" />
  </div>
</template>
<script>
import Clock from "./Clock";

export default {
  components: {
    Clock
  },
  data() {
    return {
      destroyClock: false,
      name: "vue"
    };
  }
};
</script>
