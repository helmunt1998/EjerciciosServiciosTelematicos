const {nombre,edad,tiempo,veces} = require ('./datos_user');

var nombre_p = 'ANA';
for(var j=0;j<nombre.length;j++){
    console.log(nombre[j]);
    if(nombre[j] == nombre_p){
        console.log(edad[j] + ' '+ tiempo[j]);


    }
};