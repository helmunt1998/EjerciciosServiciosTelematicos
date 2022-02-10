<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") { //Valida si el método de petición es GET
    error_reporting(0); //usamos esta función para desactivar warnings de php
    if( $_GET["name"] || $_GET["age"] ) {  //Valida si hay algún dato
        echo "<h2>Su nombre es ". $_GET['name']. "<br>"; 
        echo "Y tiene ". $_GET['age']. " años.</h2>"; 
        exit();  //termina el script
    }
}
?>

<html>
   <body> 
       <!-- action indica la forma en como procesamos los datos, en este caso
            usamos $_PHP_SELF que valida un script php en el presente documento
            method indica el método de envío de los datos, GET-->
        <form action = "<?php $_SERVER['PHP_SELF']; ?>" method = "GET"> 
            Nombre: <input type = "text" name = "name">
            Edad: <input type = "text" name = "age">
            <input type = "submit"> 
      </form>
    </body>
</html>
      