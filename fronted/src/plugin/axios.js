/**
 * @Date:   2017-11-16T13:18:13+08:00
 * @Last modified time: 2017-11-17T16:47:26+08:00
 */
import axios from 'axios'
// import qs from 'qs'
// import { Notification } from 'element-ui'
// =============================================================================
axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
// axios.defaults.transformRequest = [function (data) {
//   // 数据序列化
//   return qs.stringify(data)
// }]
axios.defaults.validateStatus = (status) => {
  return true
}
axios.interceptors.request.use((config) => {
  return config
})
axios.interceptors.response.use((response) => {
  let data = response.data
  let status = response.status
  return status === 200
    ? Promise.resolve(data)
    : Promise.reject(response)
})
export default axios
/* 1 根据process.env.NODE_ENV 获取对应的apiDomain
  * 2 处理ajax库axios，为了以后不重复引用，挂在原型对象上
  * 3 axios是封装在main.js里面的，是为了获取vue实例操作store、router
  * 4 组件里面使用this.$axios.get or  this.$axios.post 调用  使用debugger，查看接口返回数据的走向
  */
