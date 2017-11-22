/**
 * @Date:   2017-11-16T13:18:13+08:00
 * @Last modified time: 2017-11-22T11:25:16+08:00
 */
import axios from 'axios'
import {Toast} from 'mint-ui'
import Token from '@/middleware/auth'
// =============================================================================
axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
axios.defaults.validateStatus = (status) => {
  return true
}
axios.defaults.headers.common['Authorization'] = Token.get()
axios.interceptors.request.use((config) => {
  axios.defaults.headers.common['Authorization'] = Token.get()
  return config
})
axios.interceptors.response.use((response) => {
  let {data} = response
  if (data.status === 200) {
    if (data.message) {
      Toast({message: data.message, iconClass: 'iconfont icon-roundcheck'})
    }
    Promise.resolve(data.data)
    return data
  } else {
    Toast({message: data.message, iconClass: 'iconfont icon-information'})
    Promise.reject(data.message)
    return data
  }
})
export default axios
/* 1 根据process.env.NODE_ENV 获取对应的apiDomain
  * 2 处理ajax库axios，为了以后不重复引用，挂在原型对象上
  * 3 axios是封装在main.js里面的，是为了获取vue实例操作store、router
  * 4 组件里面使用this.$axios.get or  this.$axios.post 调用  使用debugger，查看接口返回数据的走向
  */
