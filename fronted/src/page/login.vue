<template>
<div id="login">
  <mt-field label="用户名"
            placeholder="请输入用户名"
            v-model="login.name"></mt-field>
  <mt-field label="密码"
            placeholder="请输入密码"
            type="password"
            v-model="login.password"></mt-field>
  <mt-button type="default"
             @click="handleLogin">登 录</mt-button>
</div>
</template>
<script>
export default {
  name: 'login',
  data: () => ({
    login: {
      name: '',
      password: ''
    }
  }),
  methods: {
    async handleLogin() {
      let {
        status
      } = await login(this.login)
      if (status) {
        Toast({
          message: '登录成功',
          iconClass: 'icon icon-success'
        })
        this.$router.push('/')
      }
    }
  }
}
</script>
