const router = require('koa-router')()
const userDoa = require('../src/doa/userDoa.js');
const userService = require('../src/service/userService.js');

router.prefix('/users')

router.post('/registor', async (ctx, next) => {
	let params = ctx.request.body;
    //查询已注册用户列表
    await userDoa.findClientUserList("")
    .then( res =>{
        //userService处理数据   同步
        let req = userService.getCourse(res)
        
        //处理结束后返回给用户端
      
    })
    //异步从doa文件中加载数据
    await userDoa.addClientUser("")
    .then( res =>{
        //userService处理数据   同步
        
        //处理结束后返回给用户端
      
    })
    console.log(222);
    
	
})

module.exports = router

// 私有函数
function resJson(params){
	return {
  		resCode : params.code,
  		body:params.body
  	}
}
