var dom={
	macthesSelector:function(element,selector){
       if(element.macthesSelector){
         return element.macthesSelector(selector);
       }else if(element.mozmacthesSelector){
           return element.mozmacthesSelector(selector);
       }else if(element.webkitmatchesSelector){
           return element.webkitmatchesSelector(selector);
       }else if(element.msmatchesSelector){
           return element.msmatchesSelector(selector);
       }else{
         throw new Error("Not Support");
       }
   },
   removeClassName:function(className,name){
        var pos,
            i,
            len;

            for(i=0,len=className.length;i<len;i++){
                if(className[i]==name){
                  pos=i;
                  break;
                }
            }

            className.splice(pos,1);
            return className;

      },
      contains:function(refNode,otherNode){
           if(typeof refNode.contains=="function"&&(!client.engine.webkit||client.engine.webkit>=522)){
            return refNode.contains(otherNode);
           }else if(typeof refNode.compareDocumentPosition=="function"){
            return !!(refNode.compareDocumentPosition(otherNode)&16);
           }else{
            var node=otherNode.parentNode;
            do{
               if(node==refNode){
                  return true;
               }else{
                  node=node.parentNode;
               }
            }while(node!==null);

            return false;
           }

      }
}