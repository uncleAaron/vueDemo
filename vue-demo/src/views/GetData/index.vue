<template>
  <div>{{option}}</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      option: {
        resData: ""
      }
    };
  },
  mounted() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData()
    }, 1000);
  },
  methods: {
    getData() {
      axios
        .get("/api/table/name", { params: { ID: 12345 } })
        .then(response => {
          this.option.resData = response.data.optionData;
        });
    }
  }
};
</script>

<style>
</style>