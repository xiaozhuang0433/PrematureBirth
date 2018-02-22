/**
 * 腾讯云微信小程序解决方案
 * 数据库基类
 * @author wangxiaoz
 */
const { mysql: config } = require('../config')
console.log('\n======================================')
console.log('开始建立数据库连接...')

const DB = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pass,
    database: config.db,
    charset: config.char,
    multipleStatements: true
  }
})

console.log('数据库已连接...')
console.log('\n======================================')

module.exports = DB