//VALIDATE ON SUBMIT
function validateContact() {
    var form = document.getElementById("form2");
    var name = form.firstElementChild.firstElementChild.lastElementChild;
    var email = name.parentElement.nextElementSibling.lastElementChild;
    var perfilProfesional = form.children[1].firstElementChild.lastElementChild;
    var empresa = perfilProfesional.parentElement.nextElementSibling.lastElementChild;
    var pais = form.children[2].firstElementChild.lastElementChild;
    var codigoPostal = pais.parentElement.nextElementSibling.lastElementChild;
    var asunto = form.children[3].firstElementChild.lastElementChild;
    var telefono = form.children[3].children[1].lastElementChild;
    var mensaje = form.children[3].children[2].lastElementChild;
    var privacidad = form.children[7].firstElementChild;
    var booleanCheck = true;

    //NAME
    if(!name.value){
        missingInputInfo(name);
        booleanCheck = false;
    }
    else{
        okInputInfo(name);
    }

    //EMAIL
    if(!checkEmail(email)){
        booleanCheck = false;
    }

    //PERFIL PROFESIONAL
    if(!perfilProfesional.value){
        missingInputInfo(perfilProfesional);
        booleanCheck = false;
    }
    else{
        okInputInfo(perfilProfesional);
    }

    //EMPRESA
    if(!checkNull(empresa)){
        missingInputInfo(empresa);
        booleanCheck = false;
    }
    else{
        okInputInfo(empresa);
    }

    //PAÍS
    if(!pais.value){
        missingInputInfo(pais);
        booleanCheck = false;
    }
    else{
        okInputInfo(pais);
    }

    //CÓDIGO POSTAL
    if(!checkNumeric(codigoPostal)){
        missingInputInfo(codigoPostal);
        booleanCheck = false;
    }
    else{
        okInputInfo(codigoPostal);
    }

    //ASUNTO
    if(!asunto.value){
        missingInputInfo(asunto);
        booleanCheck = false;
    }
    else{
        okInputInfo(asunto);
    }

    //TELEFONO
    if(!checkNumeric(telefono)){
        missingInputInfo(telefono);
        booleanCheck = false;
    }
    else{
        okInputInfo(telefono);
    }

    //MENSAJE
    if(!checkNull(mensaje)){
        missingInputInfo(mensaje);
        booleanCheck = false;
    }
    else{
        okInputInfo(mensaje);
    }

    //PRIVACIDAD
    if(!checkPrivacy(privacidad)){
        booleanCheck = false;
    }

    if(!booleanCheck){
        return  false;
    }

    return true;
}