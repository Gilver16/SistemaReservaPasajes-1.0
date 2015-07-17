(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    $("body").append('<a id="irlista" href="#idMenu"></a>');
     $("body").append('<a id="irHorario" href="#idHorariosRotas"></a>');
    $("body").append('<a id="irRegistros" href="#idRegistros"></a>');
    $("body").append('<a id="irReservarP" href="#idReservarPasaje"></a>');
     $("body").append('<a id="irSalir" href="#mainpage"></a>');
     /* button  #idEntrar */
    $(document).on("click", "#idEntrar", function(evt)
    {
        /* your code goes here */ 
        var user=$("#idUser").val();
        var pass=$("#idPass").val();
        var Perfil=$("#idPerfil").val();
       
        var param={};
            param.usuario=user;
            param.contrasena=pass;
            param.perfil='Cliente';
        
        $.ajax({
            type:"POST",
            url:"http://192.168.149.1:9095/getLogeo",
            data:"data="+JSON.stringify(param),
            dataType:'text',
            
            success:function(data){
                var dato=JSON.parse(data); 
                 
                if(dato.status===1){
                  $("#irlista").click();  
                /*
                user.usuario='Gilver';
    	user.contrasena='Damiano';
    	user.perfil='Cliente';        
                */
                    var usuari=dato.data.usuario;
                    var perfil=dato.data.perfil;
                    var cajadetexto=document.getElementById('idRUsuario');
                    cajadetexto.value=usuari+' '+perfil;
                }else{
                    navigator.notification.alert(
                        'ACCCESO DENEGADO',  
                        function(){},         
                        'Mensaje',          
                        'Aceptar'    
                    );
                }
            }
        });
    });
    
   
    
        /* button  #idRegistro */
    $(document).on("click", "#idRegistro", function(evt)
    {
        /* your code goes here */ 
        $("#irRegistros").click();
        REGISTRO.cargarRegistros();
    });
    
        /* button  #idHorario */
    $(document).on("click", "#idHorario", function(evt)
    {
        /* your code goes here */ 
        $("#irHorario").click();
    });
    
        /* button  #idRegistrar */
    
    
        /* button  #idSalir */
    $(document).on("click", "#idSalir", function(evt)
    {
         $("#irSalir").click();
    });
    
        /* button  #idReservarP */
    $(document).on("click", "#idReservarP", function(evt)
    {
        /* your code goes here */ 
        var param={};
        param.nombres=$("#idNOmbresR").val();
        param.dni=$("#idDNIR").val();
        param.origen=$("#idOrigenR").val();
        param.destino=$("#idDestinoR").val();
        param.fecha=$("#idFSalidaR").val();
        param.salida=$("#idHsalidaR").val();
        param.numeroAsiento=$("#idNHasientoR").val();
                
        RESERVARP.reserverPasaje(param);
       // data.nombres!==null && data.dni!==null && data.origen!==null && data.fecha!==null && data.horaSalida!==null && data.numeroAsiento!==null
        
    });
    
    
    
        /* button  #idReservar */
    $(document).on("click", "#idReservar", function(evt)
    {
        $("#irReservarP").click();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
