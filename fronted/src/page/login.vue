<template>
<div id="login">
  <mt-field label="用户名"
            placeholder="没有会自动注册哦"
            v-model="loginForm.name"></mt-field>
  <mt-field label="密码"
            placeholder="密码"
            type="password"
            v-model="loginForm.password"></mt-field>
  <mt-button type="default"
             @click="handleLogin">登 录</mt-button>
</div>
</template>
<script>
import {
  login,
  signup
} from '@/service/user'
export default {
  name: 'login',
  data: () => ({
    loginForm: {
      name: '',
      password: ''
    }
  }),
  methods: {
    handleSetToken (token) {
      this.$store.commit('SET_TOKEN', token)
    },
    // 去往主页
    handleGotoredirect () {
      let redirect = decodeURIComponent(this.$route.query.redirect || '/')
      this.$router.push({
        path: redirect
      })
    },
    async handleLogin () {
      let {
        status, token
      } = await login(this.loginForm)
      if (status === 404) {
        this.handleSignUp()
      } else if (status === 200) {
        this.handleSetToken(token)
        this.handleGotoredirect()
      }
    },
    async handleSignUp () {
      let {
        status, token
      } = await signup(this.loginForm)
      if (status === 200) {
        this.handleSetToken(token)
        this.handleGotoredirect()
      }
    }
  }
}
</script>
