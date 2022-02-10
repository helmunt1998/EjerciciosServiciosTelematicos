<html> 
<body>  
   <?php 
        $Variable = $_POST["UsName"]; //Podemos almacenar en otra variable
                                      //dentro del script
        echo "<p>". $Variable; 
    ?>
    su número de teléfono es: 
    <?php 
        echo $_POST["telf"],"</p>"; //podemos tomar el dato de forma directa
        $var = $_POST["telf"];
        var_dump($var);           //Las variables siempre vendran como string
    ?>
</body>
</html>