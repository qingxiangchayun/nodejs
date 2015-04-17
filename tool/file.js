var fs = require('fs');


fs.readdir('C:/Users/Administrator/github/qingxiangchayun.github.io/source/demo',function(err,files){
	if(err){
		console.log(err);
	}else{
		console.log(files)
	}
});