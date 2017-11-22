/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-22T13:04:45+08:00
 */
import User from '../proxy/user'
const UserController = {
  /**
   * 登录
   */
  _getInfo: async(ctx, user) => {
    try {
      // let data = ctx.request.body
      let message = {}
      message.status = false
      let userInfo = await User.getUserByName(user)
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
  },
  getInfoByCurrent: async ctx => {
    let user = ctx.session.user
    return UserController._getInfo(ctx, user)
  },
  getInfoByName: async ctx => {
    if (!ctx.request.body) {
      let message = {
        status: 300,
        message: '请输入关键字'
      }
      ctx.body = message
      return
    }
    return UserController._getInfo(ctx, ctx.request.body.name)
  }
}
export default UserController
