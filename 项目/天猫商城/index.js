
$(function(){
    



        $(".banner_ol li").click(function(){
                    
          clearInterval(timer);

            var index=$(this).index();
            var src="image/banner"+index+".jpg";
            $(".banner_ul li").css({
               background:"url(images/banner0"+index+".jpg)" ,
            });

          timer=setInterval(function(){
           
           if(index<6){
           
            $(".banner_ul li").css({
               background:"url(images/banner0"+index+".jpg)" ,
            });

             $(".banner_ol li a").each(function(){
              $(this).css({
                background:"#000",
              })
           })

           $(".banner_ol li a").eq(index).css({
                
                background:"white",
            })

             index++;

          }else{
            
             index=0;
          }

    
         },2000)


          $(".banner_ol li a").each(function(){
              $(this).css({
                background:"#000",
              })
           })

           $(this).find("a").css({
             background:"white",
           })


       
        });

        
        var timer=0;
        var i=0
        timer=setInterval(function(){
            
          if(i<6){
           
            $(".banner_ul li").css({
               background:"url(images/banner0"+i+".jpg)" ,
            });

             $(".banner_ol li a").each(function(){
              $(this).css({
                background:"#000",
              })
           })

           $(".banner_ol li a").eq(i).css({
                
                background:"white",
            })

           i++;

          }else{
            
             i=0;
          }

    
        },2000)


     

     $(".live_item").click(function(){
         var index=$(this).index();
       
         var src="images/live/img-0"+(index+1)+".png";
         $(".show_img").attr('src',src);
     })
      
      $(".live_item").hover(function(){
            var index=$(this).index();
            var _this=this;
             $(_this).find(".img_msk").css('display','block');
             $(_this).find(".waitplay").css('display','block');

            $(_this).find(".waitplay").click(function(){
               $(this).css('display','none');
               $(_this).find(".isplaying").css('display','block');
            })

            $(_this).find(".isplaying").click(function(){
               $(this).css('display','none');
               $(_this).find(".waitplay").css('display','block');
            })


        },function(){
           $(this).find(".img_msk").css('display','none');
              $(this).find(".waitplay").css('display','none');
              $(this).find(".isplaying").css('display','none');
        })


     $(".live_next").click(function(){

         $(".live_lis").animate({
            'left':'-488px'
         },500)
     })

      $(".live_pre").click(function(){

         $(".live_lis").animate({
            'left':'0px'
         },500)
     })
     

     $(".pics2_item").hover(function(){
         var index=$(this).index();
         for(var i=0;i<24;i++){
           $(".up_mask").eq(i).css({
            "display":"none"
         })
         }
         $(".up_mask").eq(index).css({
            "display":"block"
         })
     },function(){
         for(var i=0;i<24;i++){
           $(".up_mask").eq(i).css({
            "display":"none"
         })
         }
      })


     $(".roate").hover(function(){
        $(".roate .icon-fresh").css({
             'transform':'rotate(-180deg)',
             '-o-transform':'rotate(-180deg)',
             '-webkit-transform':'rotate(-180deg)',
             '-moz-transform':'rotate(-180deg)',
        })
     })
     

     $("#right_column li").hover(function(){
           $(this).find("div").animate({
             'right':'36px',
             'opacity':'1'
       
           },500)

           
           $(this).find("div").css({
            'display':'block'
       
           })

       },function(){
    
           $(this).find("div").css({
            
             'display':'none'
         
            })

             $(this).find("div").animate({
               'right':'72px',
                'opacity':'0'

       
           },500)

           
       })

     $(".section .li_con").hover(function(){
         

        $(this).find("img").css({
          'width':'140px',
          'height':'140px',
          'margin-left':'0'
        })
     },function(){

        $(this).find("img").css({
          'width':'100px',
          'height':'100px',
          'margin-left':'20px'
        })
     })


     $('.column a').hover(function(){

         $(this).find('img').css({
            'marginLeft':'100px'
         })
     },function(){
         $(this).find('img').css({
            'marginLeft':'130px'
         })
     })
 



  

   })


   