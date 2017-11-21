/**
 * @Date:   2017-11-15T16:59:50+08:00
 * @Last modified time: 2017-11-21T11:05:42+08:00
 */
import redis from 'redis'
import bluebird from 'bluebird'
import token from '../config/token.json'
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
let redisConfig = Object({}, token, {
  socket_keepalive: true,
  retry_unfulfilled_commands: true
})
const redisDB = redis.createClient(redisConfig)
redisDB.on('ready', () => {
  console.log('====redis ready====')
})
export default redisDB
