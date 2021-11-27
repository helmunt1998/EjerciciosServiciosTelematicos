//Importe el módulos
const express = require("express");
const app = express();
const puerto = 5000;
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
//Atención de la solicitud
app.get('/', (req,res)=>{
    res.render("index", {nombre:"Helmunt Gomez.",
                        edad:"23 años.",
                        telefono:"3157696838.",
                        comida_f:"lasagna"})
});

app.get('/pag-2', (req,res)=>{
    res.render("alterna", {nombre:"Pepito Perez.",
                        edad:"21 años.",
                        telefono:"1234567.",
                        comida_f:"awa de uwu"})
});
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

