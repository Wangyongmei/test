var  http  =  require('http');  
var Teacher=require('./moudle/teacher.js');
http.createServer(function  (request,  response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){  //清除第2此访问  
         
         teacher=new Teacher('wang',20,20);
         teacher.enter();
         teacher.teach(response);



        response.end('');//不写则没有http协议尾,但写了会产生两次访问  
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  