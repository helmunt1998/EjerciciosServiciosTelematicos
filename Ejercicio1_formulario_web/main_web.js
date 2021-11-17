const express = require("express");
const path = require('path'); 
const app = express();
const puerto = 5000;

let nombres= new Array();
let edad= new Array();
let sexo = new Array();
let telf= new Array(); 

//Extrae información de la solicitud entrante.              
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//Solicitud atendida y redirigida al archivo formulario.
app.get('/', (req,res)=>{
    //__dirname indica la ubicación del proyecto
    res.sendFile(path.join(__dirname, '/datos.html'));
});
//Captura de información usando post
app.post('/', (req,res)=>{ //root
    //var local_name = req.body.name;
    nombres.push(req.body.name); //Push agrega elementos al array progresivamente (desde el ultimo elemento)
    edad.push(req.body.age);
    sexo.push(req.body.sex);
    telf.push(req.body.phone);

    if(nombres.length > 10){  //Evalua solo para nombres[] suponiendo que se llena el formulario completo siempre
        nombres.splice(0,10);  //Splice para borrar elementos del array, desde elemento 0
        edad.splice(0,10);     //y borra los siguientes 10 elementos del array 
        sexo.splice(0,10);
        telf.splice(0,10);
    }
    console.log(nombres);
});

app.get('/all', (req,res)=>{ //all info
    console.log("Esta es toda la información almacenada en los formularios (máximo 10 usuarios): \n");
    for(var i=0; i<nombres.length;i++){
        console.log(nombres[i]+' '+edad[i]+' '+sexo[i]+' '+telf[i]);
    }
    res.send("Revisa el Terminal!\nEso es todo, ya puedes reenviar datos al formulario principal :)");
});

app.get('/names', (req,res)=>{ //Nombres registrados
    res.send('Datos disponibles por Nombre: \n'+ nombres);
});

app.get('/name-sex', (req,res)=>{ //Nombre y sexo registrados    //¿POR QUÉ NO FUNCIONA CON POST?
    res.send('Datos disponibles por Nombre y género: \n'+'\r'+ nombres + ' '+sexo);
});

app.get('/name-phone', (req,res)=>{ //Nombre y telefono registrados
    console.log("La información de Nombres y teléfonos asociados es: \n");
    for(var i=0; i<nombres.length;i++){
        console.log(nombres[i]+'  '+telf[i]);
    }
    res.send("Revisa el Terminal! \n Eso es todo, ya puedes reenviar datos al formulario principal :)");
});

app.listen(puerto, () => {console.log("Ejecutando express");}); //Listener

