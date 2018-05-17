const router = require('koa-router')()
const courseDoa = require('../src/doa/courseDoa.js');
const operationService = require('../src/service/operationService.js');
const courseService = require('../src/service/courseService.js');

router.prefix('/course')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/getCourseList' , async (ctx, next) => {
	let params = ctx.request.body;
	await courseDoa.findCourse({page:(params.page-1)*5,members:Number(params.members)})
	.then((res) => {
		ctx.body = resJson({code:"succese",body:res})
	})
	
})

router.post('/addCourseList', async (ctx, next) => {
	let params = ctx.request.body;
	let dataList = params.fields;
	let file = operationService.saveFile(params.files.figureUrl)
    dataList.figureUrl  = file
    await courseDoa.addCourse(dataList)
    .then( (res)=>{
    	ctx.body = resJson({code:"succese",body:res})
    } )
  	
})


router.post('/deteleCourse' , async (ctx, next) => {
	let params = ctx.request.body;
	await courseDoa.deleteCourse(params)
	.then((res) => {
		ctx.body = resJson({code:"succese",body:res})
	})
	
})
router.post('/changeCourse' , async (ctx, next) => {
	let params = ctx.request.body;
	let dataList = params.fields;
	let file = operationService.saveFile(params.files.figureUrl)
    dataList.figureUrl  = file
    await courseDoa.changeCourse(dataList)
    .then( (res)=>{
    	ctx.body = resJson({code:"succese",body:res})
    } )
	
})


module.exports = router


function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}
