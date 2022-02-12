<?php    
    //Obtengo el parámetro de la URL con GET
    $var = $_GET["color"];
    //valido mis opciones y envio la respuesta mas adecuada
    if($var === "rojo" || $var === "ROJO" || $var === "Rojo"){
        echo "Tambien me gusta ese color :) <br>";
    }else if($var === "azul" || $var === "Azul" || $var === "AZUL"){
        echo "Es bonito pero no mi favorito :/<br>";
    }else{
        echo "No me gusta eso :| <br>";
    }
?>