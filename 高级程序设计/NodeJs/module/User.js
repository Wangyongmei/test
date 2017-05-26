function User(name,age,id){
	this.name=name;
	this.age=age;
	this.id=id;
	this.enter=function(){
		console.log(this.name+'进入图书馆');
	}
}

module.exports=User;