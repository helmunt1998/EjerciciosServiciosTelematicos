var users = ['milena', 'pedro', 'juan', 'Helmunt', 'Daniel'];
var pass = ['1234', 'seqpass', 'Password', 'helt98mico', 'danPass16'];
var contadorVeces = 0;

function Active_a(){
    //var openWindow = document.getElementById('window_popup');
    var overlay = document.getElementById('overlay');
    var form2 = document.getElementById('ingresar');
    var closeWindow = document.getElementById('close_window');

    overlay.classList.add('active');
    overlay.style.top = "100px";

    closeWindow.addEventListener('click', function(){
        overlay.classList.remove('active');
    });
}

function normalizar(){
    const typeUser = document.querySelector("#name");
    typeUser.setAttribute('type','text');
    const typePass = document.querySelector("#password");
    typePass.setAttribute('type','text');
    const typeSubmit = document.querySelector("#ingresar");
    typeSubmit.setAttribute('type','submit');
    const labelPassword = document.querySelector("#pass_text");
    labelPassword.textContent = "Contraseña:";
    const label = document.querySelector("#name_text");
    label.textContent = "Nombre:";
}

function clear_entrace(){
    const ok = document.querySelector(".clear_entrace");
    ok.textContent = "Credenciales correctas, ingreso activado."
}

function bad_entrace(){
    const ok = document.querySelector(".clear_entrace");
    ok.textContent = "Credenciales incorrectas, posible intruso."
}

function Deactive_a(){
    const ok = document.querySelector(".clear_entrace");
    ok.textContent = "Alarma desactivada."
}

function send_data(){
    let nombreUser = document.getElementById('name').value;
    let passUser = document.getElementById('password').value;
    contadorVeces = contadorVeces + 1;
    for(let i=0;i<5;i++){
        if(nombreUser==users[i] && passUser==pass[i]){ //compara los valores ingresados por el usuario
                                                       //con la base de datos
            console.log("es correcto");
            overlay.classList.remove('active');
            clear_entrace(); //función para establecer elementos de entrada correctos
            contadorVeces = 0;
            break;
        }else{
            console.log("no es correcto.");
        }   
    }

    if(contadorVeces==3){
        //Para ocultar los campos se busca en su id (usando "#") o su clase (usando ".")
        //y poseriormente con setAttribute se reemplaza el atributo 'type' con el valor 'hidden' (oculto)
        const typeUser = document.querySelector("#name");
        typeUser.setAttribute('type','hidden');
        const typePass = document.querySelector("#password");
        typePass.setAttribute('type','hidden');
        const typeSubmit = document.querySelector("#ingresar");
        typeSubmit.setAttribute('type','hidden');
        const labelPassword = document.querySelector("#pass_text");
        labelPassword.textContent = "";
        const label = document.querySelector("#name_text");
        label.textContent = "";
        bad_entrace(); //función para establecer elementos de entrada incorrectos
        var timer = 30 
        var interval = setInterval(function() {  //timer de 30 seg para el aviso
            timer--;
           // $('.timer').text(timer); // usar esta forma para cambiar un una variable directamente
                                    // sobre la clase de alguna estructura html.
           label.textContent = "ATENCIÓN: ALARMA ACTIVADA, ESPERE "+ String(timer) +" SEGUNDOS PARA VOLVER A INTENAR."
            if (timer === 0){clearInterval(interval);
                            normalizar();} //función para reestablecer elementos html
        }, 1000);
        contadorVeces = 0;
    }else{
        console.log("AUN NO HAY ALARMA");
    }
}