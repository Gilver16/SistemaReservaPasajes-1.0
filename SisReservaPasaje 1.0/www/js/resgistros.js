var REGISTRO = (function () {
    var my = {};
    ////////////
    my.crearEnlaces=function(){
        //Enlaces Page registro
     $("body").append('<a id="irRegistro" href="#idRegistros"  class="style-31"></a>');  
          
    };
    
    my.cargarRegistros=function(){
       
        var param={};
        //param.registro='I';
        param.nombres='Gilver';
        param.dni='47119094';
        $.ajax({
            type:"POST",
            url:"http://192.168.149.1:9095/getRegistro",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                console.log(data.status);                
                if(data.status===1){                
                    $("#idRgistroL").empty();                    
                    //dato.data.lenght//;	
                    for(var i=0;i<data.data.length;i++){
                    $("#idRgistroL").append('<li>'+data.data[i].usuario+'</li>');
                    };
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
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