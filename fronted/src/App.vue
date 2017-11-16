<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div id="app">
  <img src="./assets/logo.png">
  <router-view/>
  <mt-field label="用户名"
            placeholder="请输入用户名"
            v-model="login.account"></mt-field>
  <mt-field label="邮箱"
            placeholder="请输入邮箱"
            type="email"
            v-model="login.password"></mt-field>
  <mt-button type="default"
             @click="handleLogin">登录</mt-button>
</div>
</template>

<script>
import {
  login
} from '@/service/user'
export default {
  name: 'app',
  data: () => ({
    login: {
      account: '',
      password: ''
    }
  }),
  methods: {
    async handleLogin () {
      let res = await login(this.login)
      console.lo(res)
    }
  }
}
</script>
