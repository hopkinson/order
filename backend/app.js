/**
 * @Date:   2017-11-15T10:59:49+08:00
 * @Last modified time: 2017-11-16T14:18:15+08:00
 */
import Koa from 'koa'
import log from './plugin/log'
import api from './api'
import middleware from '../middleware'
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
app.use(middleware())
app.use(api())
app.listen(3000)
console.log('程序运行在3000端口')
export default app
