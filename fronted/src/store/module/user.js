/*
* @Author: JH
* @Date:   2017-10-16 10:46:56
 * @Last modified by:
 * @Last modified time: 2017-11-21T16:31:53+08:00
*/
import {getUserInfo} from '@/service/user'
import Token from '@/middleware/auth'
const state = {
  // 用户信息
  userInfo: {},
  // token
  token: null
}

const mutations = {
  GET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
    localStorage['userInfo'] = userInfo
  },
  CLEAR_USERINFO (state, userInfo) {
    state.userInfo = {}
  },
  SET_TOKEN (state, token) {
    state.token = token
    Token.set(token)
  },
  REMOVE_TOKEN (state) {
    state.token = null
    Token.remove()
  }
}
const actions = {
  async getUserInfo ({commit}) {
    try {
      let res = await getUserInfo()
      commit('GET_USERINFO', res)
    } catch (e) {
      console.error('获取用户信息失败', e)
    }
  }
}
const getters = {
  userInfo: (state) => state.userInfo,
  token: (state) => state.token
}
export default {
  state,
  actions,
  getters,
  mutations
}
