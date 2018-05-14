/*
@lixiang
*/
const mysqlUtils = require('../../model/mysqlUtil.js');
let userDoa = {}


/*
  	注册用户添加信息
*/
userDoa.findClientUserList = (params) => {
	let _sql = `SELECT * FROM student`
  	return mysqlUtils.querySql( _sql)
}


userDoa.addClientUser = (params) => {
	let _addSql =  'INSERT INTO student(headUrl,nick,password,phone) VALUES(?,?,?,?)'
	let _addSqlParams =   [params.headUrl,params.nick,params.password,params.phone]
	return mysqlUtils.addSql(_addSql,_addSqlParams )
}


/*
	返回查寻的课程列表
*/ 
userDoa.findCourseList = ( name ) => {
  let _sql = `SELECT * FROM course`
  return mysqlUtils.querySql( _sql)
}




// 暴露对象ｕｓｅｒＤｏａ
module.exports =　userDoa