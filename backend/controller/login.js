/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-17T17:12:42+08:00
 */
import User from '../proxy/user'
import UserController from './user'
const LoginController = {
  /**
   * 登录
   */
  login: async ctx => {
    let data = ctx.request.body
    let message = {}
    message.status = false
    let userInfo = await User.getUserByEmail(data.email)
    if (!userInfo) {
      message.message = '邮箱不存在'
      ctx.body = message
      return
    }
    if (data.password !== userInfo.password) {
      message.message = '密码错误'
      ctx.body = message
      return
    }
    message.status = true
    message.data = userInfo
    ctx.body = message
  },
  /**
   * 注册
   */
  signup: async ctx => {
    try {
      let data = ctx.request.body
      let message = {}
      message.status = false
      let userInfo = {
        name: data.name,
        password: data.password
      }
      let {status} = await UserController.checkUser(data.name)
      if (!status) {
        return
      }
      await User.createUser(userInfo)
      message.data = userInfo
      message.status = true
      ctx.body = message
    } catch (err) {
      console.log(err)
    }
  }
}
export default LoginController
