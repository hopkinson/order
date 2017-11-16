/**
 * @Date:   2017-11-15T17:26:23+08:00
 * @Last modified time: 2017-11-16T13:26:29+08:00
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './plugin/axios'
import mintUI from './plugin/mintUI'
Vue.config.productionTip = false
Vue.use(mintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
