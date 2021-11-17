const http = require("http");
const yosay = require("yosay");
const servidor = http.createServer ;
const var2 = yosay("Helmunt Gomez");
const server = http.createServer((req, res)=>{
    res.end(var2);
});
const puerto=3000;
server.listen(puerto,() =>{
    console.log("El servidor esta corriendo en el puerto " + puerto);
});