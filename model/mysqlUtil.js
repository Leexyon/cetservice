const mysql  = require('mysql');  

const mysqlConfig  = require('../config/config.local.js');  
var connection = mysql.createConnection({     
  host     : mysqlConfig.host,       
  user     : mysqlConfig.user,              
  password : mysqlConfig.password,       
  port: mysqlConfig.port,                   
  database: mysqlConfig.database, 
}); 
 
connection.connect();

// 查找
let querySql = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[quert ERROR] - ',err.message);
            reject( err )
            return;
        }
       console.log(result);
       resolve( result )
    });
  })
}
// 插入
let addSql = function( addSql , addSqlParams , values ) {
  return new Promise(( resolve, reject ) => {
    connection.query(addSql , addSqlParams ,function (err, result) {
        if(err){
            console.log('[addspl ERROR] - ',err.message);
            reject( err )
            return;
        }
       console.log(result);
       resolve( result )
    });
  })
}
// 更新
let updataSql = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            reject( err )
            return;
        }
       console.log(result);
       resolve( result )
    });
  })
}
// 删除
let deleteSql = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    connection.query(sql,function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            reject( err )
            return;
        }
       console.log(result);
       resolve( result )
    });
  })
}



module.exports = {
    querySql,
    addSql,
    updataSql,
    deleteSql
}
