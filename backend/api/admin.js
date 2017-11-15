/**
 * @Date:   2017-11-15T15:55:59+08:00
 * @Last modified time: 2017-11-15T17:15:22+08:00
 */
import config from '../config'
import log from '../plugin/log'
import redis from '../plugin/redis'
import Token from '../plugin/token'
const admin = {
  login: async ctx => {
    try {
      console.log(ctx.request.body)
      const token = Token.createToken({data: ctx.request.body.account})
      redis.set(token, ctx.request.body.account)
      redis.expire(token, Math.floor(Date.now() / 1000) + config.token.expiresIn)
      ctx.body = {
        status: 200,
        token: token,
        user: admin.name
      }
      return ctx.body
    } catch (err) {
      log.logError(ctx, err)
    }
  }
}
export default admin
