/*
* @Author: admin
* @Date:   2017-10-17 09:38:48
 * @Last modified by:
 * @Last modified time: 2017-11-21T16:41:10+08:00
*/
import Cookies from 'js-cookie'
const TokenKey = 'token'
const Token = (function () {
  const getToken = () => {
    return Cookies.get(TokenKey)
  }
  const setToken = (token, day = 3) => {
    return Cookies.set(TokenKey, token, {expires: day})
  }
  const removeToken = () => {
    return Cookies.remove(TokenKey)
  }
  return {get: getToken, set: setToken, remove: removeToken}
})()
export default Token
