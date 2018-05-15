const router = require('koa-router')()
const operationDoa = require('../src/doa/operationDoa.js');
const operationService = require('../src/service/operationService.js');
const formidable = require("formidable");

router.prefix('/operation')


router.get('/', function (ctx, next) {
  ctx.body = 'this is a operation response!'
});


router.get('/getBannerList', async (ctx, next) => {
	let params = ctx.request.body;
	await operationDoa.findBannerList()
	.then( (res)=>{
		ctx.body = resJson({code:"succese",body:res})
	})
	
});

router.get('/deleteBanner', async (ctx, next) => {
	let params = ctx.request.body;
	console.log(ctx);
	console.log(params);
	await operationDoa.deleteBanner(params)
	.then( (res)=>{
		ctx.body = resJson({code:"succese",body:res})
	})
	
});


router.post('/addBannerList', async (ctx, next) => {
	
    let params = {};
    const file = ctx.request.body.files.bannerUrl;
	let fields = ctx.request.body.fields;
	//保存到本地
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


module.exports = router


function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}


