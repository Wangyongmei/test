var mysql=require('model.deleteById({
    class: 'user',
    id: 'A0000000001'
}, function(ret, err){
    if( ret ){
         alert( JSON.stringify( ret ) );
    }else{
         alert( JSON.stringify( err ) );
    }
});')