const router = require('koa-router')()


router.prefix('/course')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/getCourseList', function (ctx, next) {
	let params = ctx.request.body;
	let courseList = [
		{
			title:'课程名字一'
		},
		{
			title:'课程名字一'
		},
		{
			title:'课程名字一'
		}
	]
	ctx.body = resJson({code:"succese",body:{courseList:courseList}})
})

router.post('/registor', function (ctx, next) {
	let params = ctx.request.body;

  	ctx.body = resJson({code:"succese",body:{email:params.email}})
})

module.exports = router


function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}
