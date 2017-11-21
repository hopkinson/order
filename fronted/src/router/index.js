/**
 * @Date:   2017-11-15T17:26:23+08:00
 * @Last modified time: 2017-11-21T16:44:59+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import Token from '@/middleware/auth'
import store from '@/store'
const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const index = r => require.ensure([], () => r(require('@/page/index')), 'index')
Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

if (Token.get()) {
  store.commit('SET_TOKEN', Token.get())
  store.dispatch('getUserInfo')
}
routes.beforeEach((to, from, next) => {
  if (!store.state.user.token && to.path !== '/login') {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
export default routes
