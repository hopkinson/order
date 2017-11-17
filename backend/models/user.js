/**
 * @Date:   2017-11-16T17:37:48+08:00
 * @Last modified time: 2017-11-17T13:26:17+08:00
 */
'use strict'
import Sequelize from 'sequelize'
import sequelize from '../plugin/sequelize'
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})
// 如果是第一次运行的话,需要用sync方法创建表
User.sync()
export default User
