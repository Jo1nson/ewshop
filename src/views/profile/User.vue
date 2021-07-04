<template>
  <div class="user-box">
    <nav-bar>
      <template v-slot:default>账号管理</template>
    </nav-bar>

    <div class="input-item">
      <van-field v-model="nickname" label="昵称" />
      <van-field v-model="email" label="邮箱" />
      <van-field v-model="password" type='password' label="修改密码" />
    </div>
    <van-button round class="save-btn" color="#44BA80" type="primary" @click="save" block>保存</van-button>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import NavBar from "@/components/common/navbar/NavBar";
import { useRouter } from 'vue-router'
import {getUser, modifyUser} from "@/network/user";
import {Toast} from 'vant'
import md5 from 'js-md5'

export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      nickname: '',
      password: '',
      email:''
    })

    onMounted(() => {
      getUser().then(res =>{
        state.nickname = res.name;
        state.email = res.email
      })
    });

    const save =  ()=>{
      const params ={
        name:state.nickname,
        email:state.email
      }
      if(state.password){
        params.passwordMd5 = md5(state.password)
      }
      modifyUser(params)
      Toast.success('保存成功')
    }

    return {
      ...toRefs(state),
      save
    }
  }
}
</script>

<style lang="scss" scoped>
.input-item{
  margin-top: 50px;
}
.save-btn {
  width: 80%;
  margin: 20px auto ;
}
</style>

