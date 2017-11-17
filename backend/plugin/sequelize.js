/**
 * @Date:   2017-11-16T17:26:11+08:00
 * @Last modified time: 2017-11-17T09:33:52+08:00
 */
'use strict'
import Sequelize from 'sequelize'
import dbConfig from '../config/database.json'

const sequelize = new Sequelize(dbConfig.databaseName, dbConfig.userName, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  protocol: dbConfig.dialect,
  port: dbConfig.port,
  underscored: true, // 以下划线_分割.
  timezone: dbConfig.timezone, // 东八区
  dialectOptions: {
    ssl: dbConfig.ssl
  }
})
export default sequelize
