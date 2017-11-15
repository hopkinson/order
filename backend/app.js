/**
 * @Date:   2017-11-15T10:59:49+08:00
 * @Last modified time: 2017-11-15T14:40:47+08:00
 */
import Koa from 'koa'
import log from './plugin/log'
import api from './api'
const app = new Koa()
app.use(async(ctx, next) => {
  const start = new Date()
  const ms = new Date() - start
  try {
    await next()
    log.logResponse(ctx, ms)
  } catch (err) {
    log.logError(ctx, err.ms)
  }
})
api.use(api())
app.listen(3000)
console.log('程序运行在3000端口')
export default app
