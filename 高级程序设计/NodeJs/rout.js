var  http  =  require('http');  
var url=require('url');
var router=require('./router');
http.createServer(function  (request,  response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    if(request.url!=="/favicon.ico"){ 

         var pathName=url.parse(request.url).pathname;
         
         pathName=pathName.replace(/\//,'');
         console.log(pathName);
         router[pathName](request,response);
         response.end('');
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  