/**
 * @Date:   2017-11-16T17:42:08+08:00
 * @Last modified time: 2017-11-16T17:48:07+08:00
 */
import User from '../models/user'
const user = {
  getUserByEmail: async email => {
    if (!email) {
      return {}
    }
    await User.findOne({
      where: {
        email: email
      }
    })
  }
}
export default user
