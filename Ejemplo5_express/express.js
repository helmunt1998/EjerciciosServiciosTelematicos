const express = require("express");
//Variable que almacena el objeto para usar los métodos de la clase
const app = express();
const puerto = 5000;
/* EJEMPLO 5 PARA DIRECCIONES EN EL SERVIDOR
//El primer atributo de get indica la ruta
//Solicitud 1 atendida por la raiz
app.get('/',(req,res)=>{
    res.send("Hola usando express");
});
//Solicitud 2 atendida en el espacio servidor
app.get('/curso',(req,res)=>{
    res.send("Seccion 2 server");
});
//Agrega oyente al servidor
app.listen(puerto,()=> {
    console.log("Ejecuantdo express");
})
*/
//EJEMPLO 6 FORMULARIO CON EXPRESS
const path = require('path'); 
//Extrae información de la solicitud entrante.              
const bodyParser = require('body-parser');
//Recupera información en forma de texto unicamente.
app.use(bodyParser.urlencoded({extended: false}));
//Solicitud atendida y redirigida al archivo formulario.
app.get('/', (req,res)=>{
    //__dirname indica la ubicación del proyecto
    res.sendFile(path.join(__dirname, '/formulario.html'));
});
//Captura de información usando post
app.post('/', (req,res)=>{
    var mensaje=req.body.name;
    var edad1 = req.body.age;
    var edad2 = edad1*2;
    console.log(mensaje);
    console.log(edad2);
    res.send('El mensaje era '+mensaje);
    res.send('La edad dos veces es  '+edad2);
    });
app.listen(puerto, () => {console.log("Ejecutando express");});