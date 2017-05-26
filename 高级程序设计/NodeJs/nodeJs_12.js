//异步流控制
var async = require('async');  
// function oneFun(){
//         var i=0;
// 		setInterval(function(){

//         console.log('aaa='+ new Date());
//         i++;
//         if(i==3){
//         	clearInterval(this);
//         }
// 	},1000);
// 	console.log('oneFun');
// }
// function twoFun(){
// 	var j=0;
// 	setInterval(function(){
//         console.log('bbb='+ new Date());
//         j++;
//         if(j==3){
//         	clearInterval(this);
//         }
// 	},1000);
// 	console.log('oneFun执行完毕');
// }

// oneFun();
// twoFun();
// console.log('执行完毕');



// function exec(){
//   async.parallel(

//   {

//   	one:function(done){
//   		  var i=0;
// 		setInterval(function(){

//          console.log('aaa='+ new Date());
//            i++;
//            if(i==3){
//         	 clearInterval(this);
//         	   done('ddd','one完毕')
//            }
// 	   },1000);
        
//   	},
//   	two:function(done){
//   			var j=0;
// 	       setInterval(function(){
//               console.log('bbb='+ new Date());
//               j++;
//               if(j==3){
//         	    clearInterval(this);
//         	    done(null,'two完毕')
//   	          }
          
// 	       },1000);
// 	 },
// 	 	three:function(done){
//   			var k=0;
// 	       setInterval(function(){
//               console.log('ccc='+ new Date());
//               k++;
//               if(k==3){
//         	    clearInterval(this);
//         	    done('null','three完毕')
//   	          }
          
// 	       },1000);
// 	 }
         
//   },function(err,rs){

//   	console.log(err);
//   	console.log(rs);
//   }


//   )
// 	 }


exec();
console.log('执行完毕');



function exec(){
  async.waterfall(

  [

  	function(done){
  		  var i=0;
		setInterval(function(){

         console.log('aaa='+ new Date());
           i++;
           if(i==3){
        	 clearInterval(this);
        	   done(null,'one完毕')
           }
	   },1000);
        
  	},
  	function(pre,done){
  			var j=0;
	       setInterval(function(){
              console.log(pre+'='+ new Date());
              j++;
              if(j==3){
        	    clearInterval(this);
        	    done(null,pre+',two完毕')
  	          }
          
	       },1000);
	 },
	 function(pre,done){
  			var k=0;
	       setInterval(function(){
              console.log(pre+'='+ new Date());
              k++;
              if(k==3){
        	    clearInterval(this);
        	    done('null',pre+',three完毕')
  	          }
          
	       },1000);
	 }
         
  ],function(err,rs){

  	console.log(err);
  	console.log(rs);
  }


  )
	 }