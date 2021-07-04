<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:default> 我的收藏 </template>
    </nav-bar>
    <div class="collect-box">
      <div class="collect-body">
        <van-swipe-cell :right-width="50" v-for="(item, index) in list" :key="index">
          <van-card
              :num="item.goods.stock"
              :price='item.goods.price + ".00"'
              :title="item.goods.title"
              :desc="item.goods.description"
              class="goods-card"
              :thumb="item.goods.cover_url"
          />
          <template #right>
            <van-button square
                        text="删除"
                        type="danger"
                        class="delete-button"
                        @click="deleteCollect(item.goods.id)"
            />
          </template>
        </van-swipe-cell>
      </div>

      <div class="empty" v-if="!list.length">
        <img class="empty-cart" src="~assets/images/1.png" alt="空购物车" />
        <div class="title">收藏空空如也</div>
        <van-button round color="#44BA80" type="primary" block @click="goTo"
        >前往挑选</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {Toast ,Dialog} from "vant";
import {getCollects, modifyCollects} from "@/network/collect";
import {onMounted, reactive, toRefs} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
  name: "Collect",
  components:{
    NavBar
  },
  setup(){
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const state = reactive({
      list:[],
      page: 1,
    });

    const init =  () => {
      // 轻提示
      Toast.loading({ message: "加载中...", forbidClick: true });
      getCollects({
        page:state.page,
      }).then((res) => {
        state.list = res.data;
      })
      Toast.clear();

    };

    onMounted(() => {
      init();
    });

    const deleteCollect =(id)=>{
      Dialog.confirm({
        title: '确认',
        message: '确认取消收藏该商品？',
      })
          .then(() => {
            modifyCollects(id).then((res) => {
              if(res.status ===204){
                Toast.success("取消收藏成功！");
              }
              init();
              store.dispatch("updateCollect");
              Toast.clear();
          })
          .catch(() => {});
      })
    }

    const goTo = ()=>{
      router.push({ path: "/home" });
    }

    return {
      ...toRefs(state),
      deleteCollect,
      goTo
    }

  }
}
</script>

<style scoped lang="scss">
.collect-body{
  margin-top:45px;
  .goods-card {
    background-color:white;
  }

  .delete-button {
    height: 100%;
  }

  .van-card{
    font-size: 14px;
  }
}

.empty {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  .empty-cart {
    width: 150px;
    margin-bottom: 20px;
  }
  .van-icon-smile-o {
    font-size: 50px;
  }
  .title {
    font-size: 16px;
    margin-bottom: 20px;
  }
}

</style>
