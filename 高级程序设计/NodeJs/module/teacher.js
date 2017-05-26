var User =require('./User');
function Teacher(name,age,id){
	User.apply(this,[name,age,id]);
	this.teach=function(res){
		res.write(this.name+"讲课");

	}
}

module.exports=Teacher;