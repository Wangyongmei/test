var navlist=document.getElementById("nav_list");
var lis=navlist.getElementsByTagName("li");
var Img=navlist.getElementsByTagName("img");
var classify=document.getElementById("classify").getElementsByTagName("li");
var conbox=document.getElementById("classify_conbox").getElementsByTagName("div");

var n=lis.length;
navtouch();

function navtouch(){

  for(var i=0;i<n;i++){
      lis[i].index = i;
  	lis[i].onmouseover=function(){
  	  play(this.index);

  	  	lis[this.index].onmouseout=function(){
         	for( var j = 0; j < n; j++ ){
  				  Img[j].style.top ='0px';
  		  	}
        }
       
    }
  	}
}
  function play(index){

		for( var j = 0; j < n; j++ ){
				Img[j].style.top ='0px';
			}
    
	Img[index].style.top="-10px";
    

}

//silder();
function silder(){
   var column=document.getElementById("right_column");
   var Clis=column.getElementsByTagName("li");
 
  setTimeout(function(){
     column.style.display="block";
  },2000);

  for(var i=0;i<Clis.length;i++){
     
  }
}


Classify();
function Classify(){
   for(var i=0;i<16;i++){
      classify[i].index = i;
    classify[i].onmouseover=function(){
        for(var j=0;j<16;j++){
          conbox[j].style.display="none";
          conbox[this.index].style.display="block";
        }
    }

    classify[i].onmouseout=function(){
        for(var j=0;j<16;j++){
          conbox[j].style.display="none";
         
        }
    }

  }

}

var yulis=document.getElementById("yugao").getElementsByTagName("ul");
var titlectn=document.getElementById("title-ctn").getElementsByTagName("div");

autoplay(yulis);

autoplay(titlectn);

function autoplay(play){
  var timer=0;
  var i=0;
  if(play==yulis){

   timer=setInterval(function(){
   
    if(i<5){
        play[0].style.top=-i*40+"px"; 
        i++; 
    }else{
      i=0;
    }
     


  },1500)

 }else{ 

   timer=setInterval(function(){
   
    if(i<3){
        play[0].style.marginTop=-i*30+"px"; 
        i++; 
    }else{
      i=0;
    }
     


  },1500)


 }


}