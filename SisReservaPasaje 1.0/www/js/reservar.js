var RESERVARP=(function(){
 var my={};
    ////////////////7
    my.reserverPasaje=function(param){
      $.ajax({
         type:"POST",
            url:"http://192.168.149.1:9095/getReservar",
            data:"data="+JSON.stringify(param),
            dataType:'text',            
            success:function(data){
             var data=JSON.parse(data);
              if(data.status){
              alert(""+data.message);
              }else{
              alert(""+data.message);
              }
            },
            error:function(data){
            console.log("ERROR "+data);
            }
      });
    };
    ////////////////
return my;    
}());