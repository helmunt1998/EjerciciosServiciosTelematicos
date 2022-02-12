<html> 
<body>  
   <?php 
        $Variable = $_POST["UsName"]; //Podemos almacenar en otra variable
                                      //dentro del script
              
        echo "Radio esfera : ", pi()*($Variable**2); 
                
        echo "Volumen esfera: ",(4/3)*pi()*($Variable**3);    
    ?>
</body> 
</html>