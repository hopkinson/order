/**
 * @Date:   2017-11-15T11:04:20+08:00
 * @Last modified time: 2017-11-15T17:10:56+08:00
 */
import log4js from 'log4js'
import LogConfig from '../config/log.config.js'
// const env = process.env.NODE_ENV
// if (env == 'production') {
log4js.configure(LogConfig)
let logUtil = {}
let errorLogger = log4js.getLogger('errorLogger')
let resLogger = log4js.getLogger('resLogger')
// }
/**
 * 格式化
 */
// 1.格式化请求日志
const formatReqLog = (req, resTime) => {
  let logText = ''
  let method = req.method
  logText += 'request method: ' + method + '\n'
  logText += 'request originalUrl:  ' + req.originalUrl + '\n'
  logText += 'request client ip:  ' + req.ip + '\n'
  if (method === 'GET') {
    logText += 'request query:  ' + JSON.stringify(req.query) + '\n'
  } else {
    logText += 'request body: ' + '\n' + JSON.stringify(req.body) + '\n'
  }
  if (resTime) {
    logText += 'response time: ' + resTime + '\n'
  }
  return logText
}
// 2.格式化错误日志
const formatError = (ctx, err, resTime) => {
  var logText = ''
  logText += '\n' + '*************** error log start ***************' + '\n'
  logText += formatReqLog(ctx.request, resTime)
  logText += 'err name: ' + err.name + '\n'
  logText += 'err message: ' + err.message + '\n'
  logText += 'err stack: ' + err.stack + '\n'
  logText += '*************** error log end ***************' + '\n'
  return logText
}
// 2.格式化响应日志
const formatRes = (ctx, resTime) => {
  var logText = ''
  logText += '\n' + '*************** response log start ***************' + '\n'
  logText += formatReqLog(ctx.request, resTime)
  logText += 'response status: ' + ctx.status + '\n'
  logText += 'response body: ' + '\n' + JSON.stringify(ctx.body) + '\n'
  logText += '*************** response log end ***************' + '\n'
  return logText
}
/**
 * 封裝
 */
// 封装错误日志
logUtil.logError = (ctx, error, resTime) => {
  errorLogger.error(formatError(ctx, error, resTime))
}
// 封装响应日志
logUtil.logResponse = (ctx, resTime) => {
  if (ctx) {
    resLogger.info(formatRes(ctx, resTime))
  }
}
export default logUtil
