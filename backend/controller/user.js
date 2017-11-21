/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-21T17:27:15+08:00
 */
import User from '../proxy/user'
import redis from '../plugin/redis'
const UserController = {
  /**
   * 登录
   */
  getInfo: async ctx => {
    try {
      let data = ctx.request.body
      let message = {}
      message.status = false
      console.log(data)
      let userInfo = await User.getUserByName(data.name)
      console.log(userInfo)
      if (!userInfo) {
        message.message = '用户不存在'
        ctx.body = message
        return
      }
      message.status = 200
      message.data = userInfo
      ctx.body = message
    } catch (err) {
      console.log(err)
    }
  }
}
export default UserController
