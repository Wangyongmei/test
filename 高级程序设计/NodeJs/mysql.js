
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'test',
	port:'3306'
});  // 创建链接

connection.connect(function(err){  
    if(err){         
        console.log('[query] - :'+err);  
        return;  
    }  
    console.log('[connection connect]  succeed!');  
}); 

//插入
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['wang','123'];
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
        console.log('insert success');
});

//查询
connection.query('SELECT * from user where uid=?',[2], function(err, rs,fields) {  
    if (err) {  
        console.log('[query] - :'+err);  
        return;  
    } 
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname); 
       
    }
}); 

//删除
var userAddSql = 'delete from user where uid=?';
var param=2;
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('delete err:',err.message);
        return;
    }
        console.log('delete success');
});

//更新


var userAddSql = 'update user';
connection.query(userAddSql,function(err,rs){
    if(err){
        console.log('update err:',err.message);
        return;
    }
        console.log('update success');
});



connection.end(function(err){  
    if(err){ 
        console.log(err.toString());
        return;  
    }  
    console.log('[connection end] succeed!');  
});