/*
 * @Author: JH
 * @Date:   2017-10-13 10:14:36
 * @Last modified by:
 * @Last modified time: 2017-11-21T16:46:02+08:00
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store
