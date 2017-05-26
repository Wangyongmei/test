function tab(obj){
     this.obj=obj;
     this.divs=obj.getElementsByTagName("div");
     this,inputs=obj.getElementsByTagName("input");

     this.init();

}
//原型模式封装对象
//原型：每一个函数都有一个原型，且原型是一个指针指向一个对象
//tab.prototype instanceof object 返回值为true
//这里的构造函数tab 就有一个原型 包含由特定类型的所有实例共享的属性和方法。
tab.prototype.init=function(){
	var _this=this;
	for(var i=0;i<this.inputs.length;i++){

		this.inputs[i].index=i;
		inputs[i].onclick=function(){
			_this.play(this.index);
            
		}
	}
}

tab.prototype.play=function(index){
     for(var j=0;j<this.inputs.length,j++){
     	this.inputs[j].className="";
     	this.divs[j].style.display="none";
     }

     this.inputs[index].className="active";
     this.divs[index].style.display="block";


}

tab.protoType.autoplay=function(){
     var n=0;
     var _this=this;
     timer=setInterval(function(){           // setInterval 对象指向window
        n++;
        if(n>_this.inputs.length){
     	n=0;
       }

        _this.play();


     },300)

}

