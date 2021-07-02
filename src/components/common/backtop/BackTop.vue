
<template>
  <div class="backTop" @click="backtop"></div>
</template>

<script>
export default {
  name: "BackTop",
  setup(props, { emit }) {
    // 参数：props 接收属性，emit 上下文里的一个属性
    return {
      //返回父类方法
      backtop: () => {
        emit("bTop"); // 子组件通过 emit 方法调用父组件自定义的事件 bTop ，传索引
      },
    };
  },
};
</script>

<style scoped>
  .backTop {
    width:40px;
    height:40px;
    position:fixed;
    bottom: 80px;
    right:30px;
    z-index:20;
    box-shadow: 5px 5px 5px #888;
    border-radius:50%;
    background:#fcfcfc url('~assets/images/up.png') no-repeat center center;
  }
</style>
