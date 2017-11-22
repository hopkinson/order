/**
 * @Date:   2017-11-15T11:11:45+08:00
 * @Last modified time: 2017-11-22T12:37:42+08:00
 */
'use strict'
import Router from 'koa-router'
import User from '../controller/user'
import Permission from '../controller/permission'
const prefix = '/api/user'
const router = new Router({prefix: prefix})
router
/**
 * 获取当前用户信息
 */
 .get('/getInfo', Permission.perimission, User.getInfoByCurrent)
 /**
  * 根据name获取用户信息
  */
 .get('/getInfoByName', Permission.perimission, User.getInfoByName)
export default router
