/*la sintaxis de jQuery es bastante simple
  > $(selector).accion('argumentos')
  > $ define el acceso a jQuery
  > un (selector) busca elementos HTML
  > .accion() define un evento o acción que JavaScript realizará
    a los elementos seleccionados
  > siempre cierra con ; */

  $(this).hide(); //.hide() es una acción de ocultar el elemento
  //this selecciona el elemento actual
$("p").hide(); //ocultar todos los elementos del tipo <p>
$(".clase1").hide(); //ocultar todos los elementos de class="clase1"
$("#id1").hide(); //ocultar todos los elementos de id="id1"

//SELECTORES EN JQUERY
//Son usados para buscar elementos HTML segun ciertas propiedades que tenga
$("h1").click(); //Busca por elemento <h1>
$("#CloseWindow").click(); //Busca por id="CLoseWindow"
$(".ident").click(); //Busca por class="ident"
$('input[type="text"]').click(); //Busca todos los elementos <input>
                  //con el atributo type="text"
$("ul li").click(); //Busca todos los elementos <li> dentro de una lista <ul>                                
$("h1.ident").click(); //Busca en todos los <h1> con class="ident"
$("#ident span").click(); //Busca en todoslos elementos <span> dentro 
            //de un elemento con id="ident"
$("p:first").click(); //selecciona el primer elemento de <p>
$("form :text").click(); //Busca en todos los input con un type="text" dentro
           // del form

//EVENTOS EN JQUERY
// >>>Eventos hechos por click
$("h1").click(); //Se activa al hacer un click sobre el elemento
$("h1").dblclick(); //Asocia el evento de hacer doble click
$("h1").hover(); //Evento de pasar el puntero del mouse sobre un elemento
   //o también cuando el punto deja el elemento
$("h1").mouseenter(); //Evento solo cuando el mouse entra al elemento
$("h1").mouseleave(); //Evento solo cuando el mouse sale al elemento
// >>>Eventos del teclado
$('input[type="text"]').keypress(); //Evento cuando se pulsa una tecla
                      //dentro del input
$('input[type="text"]').keydown(); //cuando se presiona por primera vez
                     //la tecla (al pulsar) 
$('input[type="text"]').keyup(); //cuando se suelta la tecla (tras pulsar)
// >>>Eventos del documento o la ventana
$(document).ready(); //Es una forma segura de validar objetos en JavaScript
      //Este evento se ejecuta cuando todos los elementos del
      //del DOM han sido cargados correctamente.
$(window).resize(); //Se activa al ser reajustado el tamaño de la ventana
$(window).scroll(); //Cuando se ha realizado un scroll dentro de la ventana
                                                        
$("p").hide(); //oculta
$("p").show();  //muestra

$(".texto").text("Hola mundo"); //Coloca el texto
$(".texto").text();  //Obtiene el texto
$("form :text").val(); //obtiene el valor del input form

//EJEMPLOS
$("#Overlay").addClass("active");

$("#CloseWindow").click(function(){
$("#Overlay").removeClass("acive");
}); 

$("#name_text").text("Nombre:");

$("#ingresar").attr("type", "hidden");

$("form .inernal_submit").css({"width":"50%", 
              "margin-bottom": "20px",
              "margin-left": "7px",
              "height": "20px",
              "border": "1px solid slategrey"});


            $.ajax({
            type: "method",
            url: "url",
            data: "data",
            dataType: "dataType",
            success: function (response) {
            
            }
    });             