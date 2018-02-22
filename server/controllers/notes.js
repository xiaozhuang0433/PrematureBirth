const DAO = require('../tools/DAO.js')

// 登录授权接口
module.exports = async (ctx, next) => {
  DAO.select().from('cSessionInfo').then(function(rows) {
    console.log(rows)
  })
  ctx.state.data = {asd: 123}
}