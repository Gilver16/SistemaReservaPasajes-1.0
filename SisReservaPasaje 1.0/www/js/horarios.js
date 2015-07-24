var HORARIOS = (function () {
    var my = {};
    ////////////
    my.crearEnlaces=function(){
        //Enlaces Page registro
     $("body").append('<a id="irHorario" href="#idHorarios"  class="style-31"></a>');  
          
    };
    
    my.cargarHorarios=function(){
       
        var param={};
        //param.registro='I';
        param.nombres='Gilver';
        param.dni='47119094';
        $.ajax({
            type:"POST",
            url:"http://192.168.149.1:9095/getHorarios",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                //console.log(data.status);                
                if(data.status===1){                
                    $("#idHorariosH").empty();                    
                    //dato.data.lenght//;	
                    for(var i=0;i<data.data.length;i++){
                    $("#idHorariosH").append('<li>'+data.data[i].usuario+'</li>');
                    };
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',
                        function(){},         
                        'Mensaje',            
                        'Aceptar'                  
                    );
                    
                }
              
            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });
    
    };//////////////////////////////////////////////////////////////////////////////////
    
    //////////
    return my;
}());