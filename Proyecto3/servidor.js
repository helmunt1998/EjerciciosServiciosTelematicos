//const puerto = process.env.PORT;
const express = require("express");
const app = express();
const path = require('path'); 

const puerto = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//app.set('css','/app/css');
app.set('css',__dirname+'/css');
app.use(express.static(__dirname + "/css"));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/formulario.html'));
 });

app.post('/', (req,res)=>{ //root
    var datos=function(){
        var name=document.getElementById("name").value,
        apellidos1=document.getElementById("apellidos").value, genero1=document.getElementById("genero").value,
        edad1=document.getElementById("edad").value;
        document.getElementById("tabla").insertRow(-1).innerHTML = `<td>${name}</td><td>${apellidos1}</td><td>${edad1}</td>
        <td>${genero1}</td>`;    
    }       
    console.log("Estoy escuchando");
});
app.listen(puerto, () => {
    console.log("Ejecutando express");
});
