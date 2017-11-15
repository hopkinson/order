/**
 * @Date:   2017-11-15T11:11:45+08:00
 * @Last modified time: 2017-11-15T17:19:48+08:00
 */
import Router from 'koa-router'
import compose from 'koa-compose'
import importDir from 'import-dir'
import generateRouter from './router'
import generateAction from './action'
import Admin from './admin'
const prefix = '/api'
const models = importDir('../logs')
export default() => {
  const router = new Router({prefix: prefix})
  // 依次循环
  Object.keys(models).forEach(key => generateRouter(key, router, Admin.permission, generateAction(models[key])))
  // 后台管理系统的登录登出接口
  router
    .post('/admin/login', Admin.login)
    // .post('/admin/loginOut', Admin.loginOut)
  return compose([router.routes(), router.allowedMethods()])
}
