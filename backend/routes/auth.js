/**
 * @Date:   2017-11-15T11:11:45+08:00
 * @Last modified time: 2017-11-21T10:42:54+08:00
 */
'use strict'
import Router from 'koa-router'
import Login from '../controller/login'
const prefix = '/api/user'
const router = new Router({prefix: prefix})
router
/**
 * 登录
 */
  .post('/login', Login.login)
/**
  * 注册
  */
  .post('/signup', Login.signup)
/**
 * 找回密码
 */
  .post('/findPwd', Login.login)
export default router
