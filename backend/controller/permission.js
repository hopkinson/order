/**
 * @Date:   2017-11-21T15:24:27+08:00
 * @Last modified time: 2017-11-22T12:30:55+08:00
 */
import Token from '../plugin/token'
import redis from '../plugin/redis'
const PermissionController = {
  /**
   * 登录
   */
  perimission: async(ctx, next) => {
    try {
      const token = ctx.request.headers['authorization'] || null
      // 1.不存在token
      if (!token) {
        ctx.body = {
          status: 100,
          message: 'token not found'
        }
        return ctx.body
      }
      // 2.token认证失败
      const result = Token.verifyToken(token)
      if (!result) {
        ctx.body = {
          status: 101,
          message: 'token verify failed'
        }
        return ctx.body
      }
      // 3.redis 获取TOKEN失败
      const reply = await redis.getAsync(token)
      if (!reply) {
        ctx.body = {
          status: 102,
          message: 'token invalid'
        }
        return ctx.body
      }
      ctx.session = {
        token: token,
        user: reply
      }
      // 最后next --作为中间件
      return next()
    } catch (err) {
      console.log(err)
    }
  }
}
export default PermissionController
