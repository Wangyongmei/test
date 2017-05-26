var event=require('event');
var http=require('http');

function UserBean(){
	this.eventEmit=new events.EventEmitter();
	this.zhuce=function(req,res){
       console.log('注册');
     //  req['uname']="aaa";
     //  req['pwd']="bb";
       this.eventEmit.emit('zhuce','aaa','bb');
	},
	this.login=function(req.res){
		console.log("登录");
		res.write('用户名：'+req['uname']);
		res.write('密码：'+req['pwd']);
		res.write('登录');

	}
}

module.exports =UserBean;