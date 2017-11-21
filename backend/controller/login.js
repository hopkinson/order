/**
 * @Date:   2017-11-16T17:48:29+08:00
 * @Last modified time: 2017-11-21T17:00:45+08:00
 */
import User from '../proxy/user'
import redis from '../plugin/redis'
import token from '../plugin/token'
import tokenConfig from '../config/token.json'
const LoginController = {
  /**
   * 登录
   */
  login: async ctx => {
    let data = ctx.request.body
    let message = {}
    message.status = 0
    // 1.检查用户是否存在
    try {
      let userInfo = await User.getUserByName(data.name)
      if (!userInfo) {
        message.message = '用户不存在'
        message.status = 404
        ctx.body = message
        return
      }
      // 2.检查密码是否正确
      if (data.password !== userInfo.password) {
        message.message = '密码错误'
        message.status = 201
        ctx.body = message
        return
      }
      // 3.登录成功
      message.status = 200
      message.message = '登录成功'
      message.data = userInfo
      const createToken = token.createToken({data: userInfo.name})
      redis.set(createToken, userInfo.name)
      redis.expire(createToken, Math.floor(Date.now() / 1000) + tokenConfig.expiresIn)
      message.token = createToken
      ctx.body = message
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * 注册
   */
  signup: async ctx => {
    try {
      let data = ctx.request.body
      let message = {}
      message.status = 0
      let userInfo = {
        name: data.name,
        password: data.password
      }
      // 1.检查用户是否存在
      let checkUser = await User.getUserByName(data.name)
      if (checkUser) {
        message.message = '用户名已经存在'
        message.status = 201
        ctx.body = message
        return
      }
      // 2.注册新用户
      await User.createUser(userInfo)
      message.data = userInfo
      message.status = 200
      message.message = '注册成功'
      const createToken = token.createToken({data: userInfo.name})
      redis.set(createToken, userInfo.name)
      redis.expire(createToken, Math.floor(Date.now() / 1000) + tokenConfig.expiresIn)
      message.token = createToken
      ctx.body = message
    } catch (err) {
      console.log(err)
    }
  }
}
export default LoginController
