/**
 * @Date:   2017-11-16T17:42:08+08:00
 * @Last modified time: 2017-11-21T10:41:23+08:00
 */
import User from '../models/user'
const user = {
  /**
   * 通过姓名name获取用户
   * @param  {[type]}  name [name名字]
   */
  getUserByName: async name => {
    try {
      if (!name) {
        return {}
      }
      let res = await User.findOne({
        where: {
          name: name
        }
      })
      return res
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * 新建用户
   * @param  {[type]}  user [用户对象]
   */
  createUser: async(user) => {
    try {
      if (!user) {
        return {}
      }
      let res = await User.create(user)
      return res
    } catch (err) {
      console.log(err)
    }
  }
}
export default user
