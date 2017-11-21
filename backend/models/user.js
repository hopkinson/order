/**
 * @Date:   2017-11-16T17:37:48+08:00
 * @Last modified time: 2017-11-21T09:47:24+08:00
 */
'use strict'
import Sequelize from 'sequelize'
import sequelize from '../plugin/sequelize'
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
// 如果是第一次运行的话,需要用sync方法创建表
User.sync()
export default User
