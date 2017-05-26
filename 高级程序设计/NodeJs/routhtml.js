var http=require('http');
var url=require('url');
var router=require('./router');

http.createServer(function(request,response){
	if(request.url!=="/favicon.icon"){
        
		pathname=url.parse(request.url).pathname;
		pathname=pathname.replace(/\//,'');
		router[pathname](request,response);

	}
}).listen(8000);
console.log('Sever running at http://127.0.0.1:8000');


