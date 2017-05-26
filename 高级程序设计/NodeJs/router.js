var optfiles=require('./module/optfiles');
var url=require('url');
var querystring=require('querystring');
function getRecall(req,res){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
	function recall(data){ 
       res.write(data);
	   res.end('');
 
	}
	
	return recall;
}
module.exports={
	login:function(req,res){

		//get方式接受参数
		// var rdata=url.parse(req.url,true).query;
	 //    console.log(rdata);
		// if(rdata['email']!==undefined){
		// 	console.log(rdata['email']);
		// 	console.log(rdata['pwd']);
		// }
		// recall=getRecall(req,res);
		// optfiles.readfile('./views/login.html',recall); 
		

		

		// post方式
		var  post  ='';          //定义了一个post变量，用于暂存请求体的信息      
      
        req.on('data',  function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
            post  +=  chunk;      
        });      
        //-------注意异步-------------      
        req.on('end',  function(){        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。      
            post =querystring.parse(post);      
            // console.log('email:'+post['email']+'\n');        
            // console.log('pwd:'+post['pwd']+'\n');
            arr=['email','pwd'];

             function recall(data){
            	dataStr=data.toString();
            	for(var i=0;i<arr.length;i++){
            		re=new RegExp('{'+arr[i]+'}','g');
                    dataStr=dataStr.replace(re,post[arr[i]]);
            	}
            	res.write(data);
            	res.end('');

            }
               data  =  optfiles.readfile('./views/login.html',recall);      

        });      
        //---------------------------------------      
      
     
   
     
	},
	zhuce:function(req,res){
		
		 function recall(data){
        	  res.write(data);
              res.end('');//不写则没有http协议尾,但写了会产生两次访问
		}

		 optfiles.readfile('./views/zhuce.html',recall); 
	},
	writefile:function(req,res){
		function recall(data){
			res.write(data);
            res.end('');//不写则没有http协议尾,但写了会产生两次访问
		}

		 optfiles.writefile('./views/one.text','今天阳光灿烂',recall); 
	},
	writefileSync:function(req,res){
		function recall(data){
			res.write(data);
            res.end('');//不写则没有http协议尾,但写了会产生两次访问
		}

		 optfiles.writefile('./views/two.text','今天阳光灿烂',recall); 
	},
	showImg:function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg'});
		optfiles.readImg('./img/1.png',res);

	},
	


}