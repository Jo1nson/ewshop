<template>
  <div>
    <nav-bar>
      <template v-slot:default>新用户注册</template>
    </nav-bar>

    <div style="margin-top: 50px;">
      <div style="text-align:center; padding-top:50px">
          <van-image
              width="10rem"
              height="8rem"
              fit="contain"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
      </div>
      <van-form @submit="onSubmit">
        <van-field
            v-model="name"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="email"
            name="电子邮箱"
            label="电子邮箱"
            placeholder="请输入正确的电子邮箱格式"
            :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="password_confirmation"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写一致密码' }]"
        />

        <div style="margin: 16px;">
          <div class="link-login" @click="$router.push({path:'/login'})">
            已有账号，立即登录
          </div>
          <van-button round block type="info" color='#44b883' native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {register} from "@/network/user";
import {ref, reactive, toRefs} from 'vue';
import {Notify, Toast} from 'vant';
import {useRouter} from 'vue-router'
export default {
  name: "Register",
  components:{
    NavBar
  },
  setup() {

    const router = useRouter();
    const userInfo = reactive({
      name:'',
      password: '',
      password_confirmation:'',
      email: '',
    })

    const onSubmit = (data) =>{
      if(userInfo.password != userInfo.password_confirmation){
        Notify('两次密码不一致！')
      } else {
        register(userInfo).then(res=>{
          if(res.status == '201'){
            Toast.success('注册成功');

            setTimeout(()=>{
              router.push({path:'/login'})
            },1000)
          }
          userInfo.password_confirmation='';
          userInfo.password = '';
        })
      }

 }

    return {
      ...toRefs(userInfo),
      onSubmit
    }
  }
}
</script>

<style scoped>
.link-login {
  font-size: 14px;
  margin-bottom:20px;
  color:#42b983;
  display: inline-block;
  text-align:left;
  float:left;
}
</style>
