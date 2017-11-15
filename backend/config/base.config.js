/**
 * @Date:   2017-11-15T15:53:39+08:00
 * @Last modified time: 2017-11-15T17:07:22+08:00
 */
export default {
  port: process.env.PORT || 3000,
  token: {
    expiresIn: 60 * 60,
    secret: 'order'
  },
  redis: {
    host: '127.0.0.1',
    port: '6379',
    db: 0
  },
  mongoDB: 'mongoddb://localhost/blog'
}
