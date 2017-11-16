/**
 * @Date:   2017-11-15T11:11:45+08:00
 * @Last modified time: 2017-11-16T17:25:30+08:00
 */
'use strict'
import Router from 'koa-router'
import Login from '../controller/login'
const router = new Router()
router.post('/login', Login.login)
export default router
