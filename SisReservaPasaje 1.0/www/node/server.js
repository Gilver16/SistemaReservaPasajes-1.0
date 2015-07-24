var IPADDRESS="192.168.149.1";
var PORT=9095
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);
app.post('/getLogeo', function(req, res){
	var data=req.param('data');
    data=JSON.parse(data);

    if(data.usuario==="Gilver" && data.contrasena==="Damiano" && data.perfil==="Cliente"){
    	var user={}
    	user.id=1;
    	user.usuario='Gilver';
    	user.contrasena='Damiano';
    	user.perfil='Cliente';

    	var msn={};
    	msn.data=user;
    	msn.status=1;
    	msn.message=null;
    }else{
    	var msn={};
    	msn.data=null;
    	msn.status=0;
    	msn.message="NO AUTENTICADO";
    }
    res.json(msn);
});

app.post('/getReservar', function(req, res){
	var data=req.param('data');
		data=JSON.parse(data);
      if(data.nombres!==null && data.dni!==null && data.origen!==null && data.fecha!==null && data.horaSalida!==null && data.numeroAsiento!==null){
         var msn={}; 	      
        msn.status=1;
        msn.message="Pasage Reservado para la fecha: "+data.fecha+" usuario: "+data.nombres;
      }else{
        msn.status=0;
        msn.message="Error";
      }
		res.json(msn);
});


app.post('/getRegistro',function(req,res){
	var data=req.param('data');
		data=JSON.parse(data);

		var registro=data.registro;	
	
	if(data.nombres=="Gilver"&& data.dni=="47119094"){
	  nombres="Gilver Damiano";
	
    	var user={}
    	user.id=1;
    	user.usuario='Lunes 18/07/2015';
	user.registro=registro;
    
	var user1={}
    	user1.id=2;
    	user1.usuario='martes 19/07/2015';
	user1.registro=registro;
    	
	var user2={}
    	user2.id=3;
    	user2.usuario='miercoles 20/07/2015';
	user2.registro=registro;

	var user3={}
		user3.id=4;
		user3.usuario='jueves 21/07/2015';
		user3.registro=registro;
    
	var users=[];
	users[0]=user;
	users[1]=user1;
	users[2]=user2;
	users[3]=user3;

	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	}
	res.json(msn);	
});
app.post('/getHorarios',function(req,res){
	var data=req.param('data');
		data=JSON.parse(data);

		var horarios=data.horarios;	
	
	if(data.nombres=="Gilver"&& data.dni=="47119094"){
	  nombres="Gilver Damiano";
	
    	var user={}
    	user.id=1;
    	user.usuario='Lunes 18/07/2015';
	user.horarios=horarios;
    
	var user1={}
    	user1.id=2;
    	user1.usuario='martes 19/07/2015';
	user1.horarios=horarios;
    	
	var user2={}
    	user2.id=3;
    	user2.usuario='miercoles 20/07/2015';
	user2.horarios=horarios;

	var user3={}
		user3.id=4;
		user3.usuario='jueves 21/07/2015';
		user3.horarios=horarios;
    
	var users=[];
	users[0]=user;
	users[1]=user1;
	users[2]=user2;
	users[3]=user3;

	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	}
	res.json(msn);	
});
app.post('/getDetalleRegistro',function(req,res){
	var data=req.param('data');
		data=JSON.parse(data);

		if(data.origen!==null&&data.detino!==null&&data.hora!==null){
			var msn={};
				msn.status=1;
				msn.message="registro del viaje";
		}else{
			msn.status=0;
			msn.message="error";
		}
		res.json(msn);
});
app.post('/getRegistrarse', function(req, res){
	var data=req.param('data');
		data=JSON.parse(data);
      if(data.nombres!==null && data.dni!==null && data.usuario!==null && data.contrasena!==null && data.sexo!==null && data.edad!==null){
         var msn={}; 	      
        msn.status=1;
        msn.message="Registrado exitosamente: "+data.nombres+" usuario: "+data.usuario;
      }else{
        msn.status=0;
        msn.message="Error al registrarse";
      }
		res.json(msn);
});
