<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:default> 关于我们 </template>
    </nav-bar>

    <div class="content">
      <p>本项目是采用Vue3的新版全家桶技术基于vue3.x的电商项目</p>
    </div>


  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "About",
  components: {
    NavBar
  },
}
</script>
<style scoped lang="scss">
.content {
  margin: 70px;
  align-items: center;
  text-align: center;
  word-wrap:break-word;
  p{
    font-size:16px;
    display:inline-block;
  }
}
</style>
