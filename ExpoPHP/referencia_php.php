<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola mundo con PHP</title>
</head>
<body>
    <?php //Inicio de un script PHP
        //Esto es un comentario en PHP
        #Esto también es un comentario en PHP
        /* Esto es un comentario 
        de múltiples líneas en PHP*/
        echo "<h1>Hola mundo en PHP</h1>"; //echo es una función para salida de texto en PHP
        print "<h2>Imprimo con print</h2>";//print es una función con un uso muy similar a echo
        //>>PHP no distingue entre mayúsuclas y minúsculas, las clases
        //  las funciones y as estructuras (if, else, while...) no distinguen de mayus
        ECHO "Esta salida es hecha por un echo en mayus<br>";
        echo "Esta salida es hecha por un echo en minus<br>";
        
        //>>Las variables son sensibles al mayus y se declaran con "$"
        $Nombre = "Daniel";
        echo "Mi nombre es ".$Nombre."<br>"; // el punto permiten concatenar variables

        //>>TIPOS DE DATOS ADMITIDOS EN PHP<<<
        $var_bool = true;  //dato tipo boolean
        $var_str = "string"; //dato tipo string
        $var_int = 2;      //dato tipo int
        $var_float = -1.56; //dato tipo float
        $array_php = array("dato1", "dato2", "dat3"); //array
        $null_val = null; //variable con valor nulo, si una 
                          //variable no tiene algo asignado, es null.

        //OPERADORES LÓGICOS Y MATEMÁTICOS
        $sum = $var_int + $var_float;  //suma
        $res = $var_int - $var_float; //resta
        $div = $var_int / $var_float; //division
        $mod = $var_int % $var_float; //modulo
        $exp = $var_int ** $var_float; //exponencial
        $var_int == $var_float; //igual que
        $var_int != $var_float;  //diferente que
        $var_int > $var_float;
        $var_int and $var_float; //operador and
        $var_int or $var_float; //operador or
        $var_int xor $var_float; //operaodr xor
        $var_int . $Nombre; //concatena var_int a Nombre
        $var_str .= $array_php[1]; //Agrega var_str a array_php(1)
        echo $var_str."<br>";

        //DECISIONALES, CICLOS Y CONDICIONALES
        //IF - ELSE
        $condicion = 0;
        if($condicion == 2){
            //código para la condición
        }elseif($condicion == 1){
           //código para otras condiciones 
        }else{
            //código si todas las condiciones son falsas
        }
        //SWITCH
        switch($condicion) {
            case 1:
                //codigo para el caso
                break;
            case 2:
                //codigo para n caso
                break;
            default:
                //codigo si ninguno de los n casos se cumplen
        }
        //WHILE
        while($condicion<=5){
            //codigo mientras se cumpla la condicion
            $condicion++; //iterador incremental
        }
        //DO WHILE
        do{
            //codigo a ejecutar 
            $condicion--; //iterador decremental
        }while($condicion >= -5); //condición
        //FOR
        for($i=0;$i<=10;$i++){ //(valor que inicializa el ciclo,
                                //iterador del ciclo,valor de prueba de cada ciclo)
            //codigo a ejecutar en cada iteración
        };

        //DECLARACIÓN DE FUNCIONES
        function myFuncion(){
            //código a ejecutar en la función
        }
        myFuncion(); //call a la función
        pi(); //devuelve el valor de pi
       // min(/*argumento1, argumento2, ...*/); 
         //devuelve el mínimo de los argumentos de entrada
       // max(/*argumento1, argumento2, ...*/); 
          //devuelve el mínimo de los argumentos de entrada
        abs($var_float); //devuelve el valor absoluto 
        sqrt($var_int); //devuelve la raiz cuadrada de un número
        strlen($var_str); //Devuelve la longitud de la cadena
        $num_str = "1234.56";
        $int_cast = (int)$num_str; //hace casting de string a integer
        $str_cast = (string)$var_int; //hace casting de integer a string
        $convert = intval($num_str); //convierte al valor entero de una variable
        echo $str_cast."<br>";

        //$_SERVER
        echo $_SERVER['PHP_SELF'];
        echo "<br>";
        echo $_SERVER['SERVER_NAME'];
        echo "<br>";
        echo $_SERVER['HTTP_HOST'];
        echo "<br>";
        echo $_SERVER['SERVER_PORT'];
        echo "<br>";
        echo $_SERVER['HTTP_USER_AGENT'];
        echo "<br>";
        echo $_SERVER['SERVER_ADDR'];
        echo "<br>";
        echo $_SERVER['REQUEST_METHOD'];
    ?>     
</body>
</html>