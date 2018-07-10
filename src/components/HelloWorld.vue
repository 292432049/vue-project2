<template>
  <div class="hello">
      这里是首页
      <div class="">

      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components:{
    axios
  },
  created(){
    this.$axios.get("../../jsonData/index.json").then(res=>{
      console.log(res)
    })
  }
}
</script>
<style>
  @import "../assets/css/style.css";
</style>
