/**
 * @Date:   2017-11-15T16:59:50+08:00
 * @Last modified time: 2017-11-15T17:07:09+08:00
 */
import redis from 'redis'
import bluebird from 'bluebird'
import config from '../config.base.config'
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
let redisConfig = Object({}, config.redis, {
  socket_keepalive: true,
  retry_unfulfilled_commands: true
})
const redisDB = redis.createClient(redisConfig)
export default redisDB
