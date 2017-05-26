var OptPool=require('./module/optpool');
var optpool=new OptPool();
var pool=optpool.getPool();
//从链接池中获取一个连接，异步操作
pool.getConnection(function(err,conn){

	var userAddSql = 'insert into user (uname,pwd) values(?,?)';
	var param = ['wang','321'];
	conn.query(userAddSql,param,function(err,rs){
    	if(err){
       	 console.log('insert err:',err.message);
       	 return;
   		 }	
        	console.log('insert success');
        	//conn.release();
	});

   //查询
   	conn.query('SELECT * from user',function(err,rs){
    	if(err){
       	 console.log('insert err:',err.message);
       	 return;
   		 }	


   		 else{

   		 	for(var i=0;i<rs.length;i++){
   		 		console.log(rs[i].uname);
   		 	}

   		 }
        	
        	conn.release();
	});
  

	

})