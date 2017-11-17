/**
 * @Date:   2017-11-15T10:59:49+08:00
 * @Last modified time: 2017-11-17T17:03:02+08:00
 */
import Koa from 'koa'
import log from './plugin/log'
import auth from './routes/auth'
import middleware from './middleware'
import onerror from 'koa-onerror'
const app = new Koa()
onerror(app)
app.use(middleware())
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
app.use(auth.routes())
app.listen(3000)
export default app
