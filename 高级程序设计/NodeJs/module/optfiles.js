var fs = require('fs');

module.exports={
	//异步
	readfile:function(path,recall){
		fs.readFile(path,function(err,data){
			if(err){
				console.log('bbbb'+err);
				recall('文件不存在');
			}else{ 
				console.log(data.toString());
				recall(data);
			}

		});
		console.log('异步执行完毕.');
       
	},
	//同步
	readfileSync:function(path){
		var data=fs.readFileSync(path,'utf-8');
		console.log(data.toString());
		console.log('同步执行完毕');

	},

	writefile:function(path,data,recall){
		fs.writeFile(path,data,function(err,data){
			if(err){
				console.log(err);

			}else{
				console.log('It\'S saved');
				recall('写文件成功');
			}
		});

		

	},
	writefileSync:function(path,data){
		fs.writefileSync(path,data);
		recall('写文件成功')

	},
	readImg:function(path,res){
		fs.readFile(path,'binary',function(err,filedata){
			if(err){
				console.log(err);
			}else{
				res.write(filedata,'binary');
				res.end();
			}

		})

	}

}