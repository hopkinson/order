/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-17T17:09:45+08:00
 */
import User from '../proxy/user'
const UserController = {
  /**
   * 登录
   */
  checkUser: async ctx => {
    let data = ctx.request.body
    let message = {}
    message.status = false
    let userInfo = await User.getUserByName(data.name)
    if (!userInfo) {
      message.message = '用户名已经存在'
      ctx.body = message
      return
    }
    message.status = true
    message.data = userInfo
    ctx.body = message
  }
}
export default UserController
