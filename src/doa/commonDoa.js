/*
@lixiang
*/
const mysqlUtils = require('../../model/mysqlUtil.js');
let commonDoa = {}


/*
  	注册用户添加信息
*/
commonDoa.findClientUserList = (params) => {
	let biaoming = params.dabaseBiao
	let _sql = `SELECT * FROM student`
  	return mysqlUtils.querySql( _sql)
}




// 暴露对象ｕｓｅｒＤｏａ
module.exports = commonDoa