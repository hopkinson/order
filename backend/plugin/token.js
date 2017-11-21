/**
 * @Date:   2017-11-15T16:04:29+08:00
 * @Last modified time: 2017-11-21T17:13:13+08:00
 */
import jwt from 'jsonwebtoken'
import tokenConfig from '../config/token.json'

/*
jwtToken json web token
1.createToken   jwt生成token
2.verifToken    解密token
 */
const jwtToken = (() => {
  const createToken = (info) => {
    return jwt.sign(info, tokenConfig.secret, {expiresIn: tokenConfig.expiresIn})
  }
  const verifyToken = (token) => {
    if (!token) {
      return false
    }
    return jwt.verify(token, tokenConfig.secret)
  }
  return {createToken: createToken, verifyToken: verifyToken}
})()
export default jwtToken
