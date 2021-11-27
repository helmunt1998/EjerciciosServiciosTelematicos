//Importe el módulos
const express = require("express");
const path = require('path'); 
const app = express();
const puerto = 5000;
//const puerto = process.env.PORT;

const bodyParser = require('body-parser');

let product_name = new Array(4);
let contador = 0;

app.use(bodyParser.urlencoded({extended: false}));
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
//app.set('views','/app/views');
app.use(express.static(__dirname + "/public"));  //Indicar dirección estática para el uso de los módulos css dentro de ejs.
//app.use(express.static("/app/public"));
//Atención de la solicitud
app.get('/', (req,res)=>{
   // var text_product = req.body.add;
    res.render("body",{NewElements:'',NewElements2:'',NewElements3:'',NewElements4:''})
                        /*, {titulo:"Titulo dinámico.",
                        parrafo:"Este es un parráfo de ejemplo.",
                        Variable_n:"Esta es la n-ésima variable."})*/
});
app.post('/', (req,res)=>{ //root
    //var local_name = req.body.name;
    //var bsButton = new bootstrap.Button(button)
   // m_product.push(product_name);

    if(contador == 0){
        product_name[0] = req.body.add;
        res.render("body",{NewElements:'<a class="nav-link" href="#tab5">'+ product_name[0] + '</a>', 
                        NewElements2:'',NewElements3:'',NewElements4:''})
        contador = contador + 1;
    }else if(contador==1){
        product_name[1] = req.body.add;
        res.render("body",{NewElements:'<a class="nav-link" href="#tab5">'+ product_name[0] + '</a>',
                            NewElements2:'<a class="nav-link" href="#tab6">'+ product_name[1] + '</a>',
                            NewElements3:'',NewElements4:''})
        contador = contador + 1;
    }else if(contador==2){
        product_name[2] = req.body.add;
        res.render("body",{NewElements:'<a class="nav-link" href="#tab5">'+ product_name[0] + '</a>',
                            NewElements2:'<a class="nav-link" href="#tab6">'+ product_name[1] + '</a>',
                            NewElements3:'<a class="nav-link" href="#tab7">'+ product_name[2] + '</a>',
                            NewElements4:''})
        contador = contador + 1;
    }else{
        product_name[3] = req.body.add;
        res.render("body",{NewElements:'<a class="nav-link" href="#tab5">'+ product_name[0] + '</a>',
                            NewElements2:'<a class="nav-link" href="#tab6">'+ product_name[1] + '</a>',
                            NewElements3:'<a class="nav-link" href="#tab7">'+ product_name[2] + '</a>',
                            NewElements4:'<a class="nav-link" href="#tab8">'+ product_name[3] + '</a>'})
        contador = 0;
    }

    console.log(product_name); 
});
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});
