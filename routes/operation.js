const router = require('koa-router')()
const operationDoa = require('../src/doa/operationDoa.js');
const operationService = require('../src/service/operationService.js');
const formidable = require("formidable");

router.prefix('/operation')


router.get('/', function (ctx, next) {
  ctx.body = 'this is a operation response!'
});

//获取bannerlist
router.get('/getBannerList', async (ctx, next) => {
	let params = ctx.request.body;
	await operationDoa.findBannerList()
	.then( (res)=>{
		ctx.body = resJson({code:"succese",body:res})
	})
	
});
//删除bannerlist
router.post('/deleteBanner', async (ctx, next) => {
	let params = ctx.request.body;
	console.log(params);
	await operationDoa.deleteBanner(params)
	.then( (res)=>{
		ctx.body = resJson({code:"succese",body:res})
	})
	
});
//修改bannerlist
router.post('/changeBanner', async (ctx, next) => {
	let params = {};
    const file = ctx.request.body.files.bannerUrl;
	let fields = ctx.request.body.fields;
	//保存到本地
	let fileName =  operationService.saveFile(file)
	params.id = fields.id;
	params.title = fields.title;
	params.bannerLink = fields.bannerLink;
	params.bannerUrl = fileName;


	// 插入
	await operationDoa.changeBanner(params)
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:params})
	})
	
});
//添加bannerlist
router.post('/addBannerList', async (ctx, next) => {
	
    let params = {};
    const file = ctx.request.body.files.bannerUrl;
	let fields = ctx.request.body.fields;
	//保存到本地
	//事务处理同步
	let fileName =  operationService.saveFile(file)
	params.title = fields.title;
	params.bannerLink = fields.bannerLink;
	params.bannerUrl = fileName;
	// 插入
	await operationDoa.addBanner(params)
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:params})
	})
});
/* 
*段子
*/
router.post('/addDuanziList', async (ctx, next) => {
	let params = ctx.request.body
	console.log(params)
	// 插入
	await operationDoa.addDuanzi(params)
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:params})
	})
});
router.post('/getDuanziList', async (ctx, next) => {
	// 插入
	await operationDoa.getDuanzi()
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:res})
	})
});
router.post('/deleteDuanziList', async (ctx, next) => {
	let params = ctx.request.body
	// 插入
	await operationDoa.deleteDuanzi(params)
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:res})
	})
});

router.post('/changeDuanziList', async (ctx, next) => {
	let params = ctx.request.body
	// 插入
	await operationDoa.changeDuanzi(params)
	.then(res =>{
	    ctx.body = resJson({code:"succese",body:res})
	})
});


module.exports = router


function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}


