/**
 * @Date:   2017-11-15T11:11:40+08:00
 * @Last modified time: 2017-11-21T11:04:44+08:00
 */
import compose from 'koa-compose'
import convert from 'koa-convert'
import helmet from 'koa-helmet'
import cors from 'koa-cors'
import logger from 'koa-logger'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import RedisStore from 'koa-redis'

export default() => {
  return compose([
    helmet(),
    convert(bodyParser()),
    compress({threshold: 2048, flush: require('zlib').Z_SYNC_FLUSH}),
    convert(cors()),
    convert(logger()),
    convert(session({store: new RedisStore()}))
  ])
}
