var REGISTRO = (function () {
    var my = {};
    ////////////
    my.crearEnlaces=function(){
        //Enlaces Page registro
     $("body").append('<a id="irRegistro" href="#idRegistros"  class="style-31"></a>');  
     
         /* listitem  #listaPrueba */
    /* $(document).on("click", "#idRgistroL", function(evt)
        {
         
            DEPU=evt;
            var idAlumno=$(evt.target).attr('idalumno');
            CURSO.cargarCursos(idAlumno);
         */
        });      
    };
    
    my.cargarRegistros=function(){
       
        var param={};
        param.registro='I';
        
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
                
                    $("#idRegistros").empty();
                    for(var i=0;i<data.data.length;i++){
                    
                        $("#idRegistros").click();
                        
                        
                    }
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