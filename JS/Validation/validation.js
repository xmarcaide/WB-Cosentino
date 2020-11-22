//Common validation functions
//CHANGE CURSOR
function changeCursorPointerNewsLetter(){
    var aceptar = document.getElementById("aceptar_newsletter");
    var enviar = document.getElementById("submit_newsletter");
    changeCursorPointer(aceptar, enviar);
}

function changeCursorPointerContact(){
    var aceptar = document.getElementById("aceptar_contact");
    var enviar = document.getElementById("submit_contact");
    changeCursorPointer(aceptar, enviar);
}

//REUSABLE FUNCTIONS
function changeCursorPointer(aceptar, enviar){
    if(!aceptar.checked){
        enviar.classList.add('div_a_disabled');
        enviar.classList.remove('div_a');
        enviar.style.cursor = "not-allowed";
        enviar.disabled = true;
        return;
    }

    enviar.classList.add('div_a');
    enviar.classList.remove('div_a_disabled');
    enviar.style.cursor = "pointer";
    enviar.disabled = false;
}

function checkEmail(email){
    var email_pat = new RegExp("(.+)@(.+)((\\.com)|(\\.es))");

    if(!email.value.match(email_pat)){
        missingInputInfo(email);
        return false;
    }
    else{
        okInputInfo(email);
        return true;
    }
}

function checkNumeric(number){
    var number_pat = new RegExp("[0-9]+");

    if(!number.value.match(number_pat)){
        missingInputInfo(number);
        return false;
    }
    else{
        okInputInfo(number);
        return true;
    }
}

function checkTwoInputs(input1, input2){
    if(!input1.checked && !input2.checked){
        input1.closest("div").classList.add("red_div_border");
        return false;
    }
    else{
        input1.closest("div").classList.remove("red_div_border");
        return true;
    }
}

function checkPrivacy(input){
    if(!input.checked){
        input.closest("label").classList.add("red_div_border");
        return false;
    }
    else{
        input.closest("label").classList.remove("red_div_border");
        return true;
    }
}

function checkNull(input){
    if(input.value.length < 3){
        missingInputInfo(input);
        return false;
    }
    okInputInfo(input);
    return true;
}

function missingInputInfo(input){
    input.classList.remove("default_input");
    input.classList.add("error_input");
}

function okInputInfo(input){
    input.classList.remove("error_input");
    input.classList.add("default_input");
}

//REAL TIME VALIDATION
function init() {
    // -- NewsLetter
    var emailInput = document.getElementById("email_newsletter");
    emailInput.addEventListener('keyup', (event) => {
        checkEmail(emailInput);
    });

    // -- Contact
    var name = document.getElementById("nombre_contact");
    name.addEventListener('keyup', (event) => {
        checkNull(name);
    });

    var email = document.getElementById("email_contact");
    email.addEventListener('keyup', (event) => {
        checkEmail(email);
    });

    var empresa = document.getElementById("empresa_contact");
    empresa.addEventListener('keyup', (event) => {
        checkNull(empresa);
    });

    var cp = document.getElementById("códigoPostal_contact");
    cp.addEventListener('keyup', (event) => {
        checkNumeric(cp);
    });

    var telefono = document.getElementById("telefono_contact");
    telefono.addEventListener('keyup', (event) => {
        checkNumeric(telefono);
    });

    var mensaje = document.getElementById("mensaje_contact");
    mensaje.addEventListener('keyup', (event) => {
        checkNull(mensaje);
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    init();
});
