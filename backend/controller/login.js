/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-16T17:55:21+08:00
 */
import User from '../proxy/user'
export default {
  login: async ctx => {
    let data = ctx.body
    let message = {}
    message.status = false
    const userInfo = await User.getUserByEmail(data.email)
    if (!userInfo) {
      message.message = '邮箱错误'
      ctx.body = message
      return
    }
    if (data.password !== userInfo.password) {
      message.message = '密码错误'
      ctx.body = message
      return
    }
    ctx.session.user = userInfo
    message.result = true
    ctx.body = userInfo
  }
}
