<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<script>
import {onMounted} from 'vue';
import {getHomeAllData} from "@/network/home";

export default {
  name: 'Home',
  setup(){
    onMounted(()=>{
      getHomeAllData().then(res=>{
        console.log(res)
      }).catch(err=>{

      })
    })
  },
  components: {

  }
}
</script>
<style>
  .demo1{
    color:var(--color-high-text)
  }
</style>
