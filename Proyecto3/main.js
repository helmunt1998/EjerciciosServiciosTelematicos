var datos=function(){
    var name=document.getElementById("name").value,
    apellidos1=document.getElementById("apellidos").value, genero1=document.getElementById("genero").value,
    edad1=document.getElementById("edad").value;
    document.getElementById("tabla").insertRow(-1).innerHTML = `<td>${name}</td><td>${apellidos1}</td><td>${edad1}</td>
    <td>${genero1}</td>`;    
}       