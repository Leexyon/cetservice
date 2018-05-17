/*
@lixiang
*/
const mysqlUtils = require('../../model/mysqlUtil.js');
let commonDoa = {}

/*
* 获取推荐
*/
commonDoa.findCourse = (params) => {
	let _sql = `SELECT * FROM course WHERE members = ${params.members} limit ${params.page},5 `
  	return mysqlUtils.querySql( _sql)
}
/*
*添加推荐
*/ 
commonDoa.addCourse = (params) => {
	let _addSql =  'INSERT INTO course(title,chapter,discription,figureUrl,members,teacher) VALUES(?,?,?,?,?,?)'
	let _addSqlParams =   [params.title,params.chapter,params.discription,params.figureUrl,params.members,params.teacher]
	return mysqlUtils.addSql(_addSql,_addSqlParams )
}
/*
*删除推荐
*/ 
commonDoa.deleteCourse = (params) => {
	var idDet = params.id
	let _delSql =  'DELETE FROM course where id='+idDet
	return mysqlUtils.deleteSql(_delSql )
}

/*
*修改推荐
*/ 
commonDoa.changeCourse = (params) => {
	let _changeSql =  'UPDATE course SET title = ?,chapter = ?,discription = ?,figureUrl = ?,members = ?,teacher = ? WHERE Id = ?'
	let _changeSqlParams =   [params.title,params.chapter,params.discription,params.figureUrl,params.members,params.teacher,params.id]
	return mysqlUtils.updataSql(_changeSql,_changeSqlParams )
}


// 暴露对象ｕｓｅｒＤｏａ
module.exports = commonDoa