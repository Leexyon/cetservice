const fs = require('fs');
let 　userService = {};

userService.registorUser = (params)=>{
	let result = params[0];
	return result
}	

userService.saveFile = ( file )=>{

 	const reader = fs.createReadStream(file.path);    // 创建可读流
    const ext = file.name.split('.').pop();        // 获取上传文件扩展名
    let fileName = `${Math.random().toString()}.${ext}`
    // 存储到本地静态服务器读取静态文件资源
    const upStream = fs.createWriteStream(`../../nginx-1.4.7/html/heyh/img/${fileName}`);        // 创建可写流
    reader.pipe(upStream);

    return fileName
}


userService.getCourse = (params)=>{
	let result = params[0];
	return result
}	

// 暴露对象ｕｓｅｒＤｏａ
module.exports =　userService