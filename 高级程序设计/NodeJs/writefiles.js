var  http  =  require('http');  
var url=require('url');
var router=require('./router');

http.createServer(function  (request,response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){  //清除第2此访问  
        
        var pathName=url.parse(request.url).pathname;
         
         pathName=pathName.replace(/\//,'');
         router[pathName](request,response);

        //optfiles.readfileSync('./views/login.html'); 
       
  //       function recall(data){
  //       	  response.write(data);
  //             response.end('ok');//不写则没有http协议尾,但写了会产生两次访问
		// }
  //        optfiles.readfile('./views/login.html',recall); 
  //       console.log('主程序执行完毕');  
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  