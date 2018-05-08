const router = require('koa-router')()
const mysqlQuery = require('../model/mysqlUtil.js');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/registor', function (ctx, next) {
	let params = ctx.request.body;
	let mysqlOptions = {
        sql : 'select * from table_user where title = ?',
        args : [params.email]
    };

    var users =  mysqlQuery.execQuery(mysqlOptions);
    if(users.length == 0) {
        return null;
    } else {
        return users;
    }
    console.log(users)
  	ctx.body = resJson({code:"succese",body:{email:params.email}})
})

module.exports = router


function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}
