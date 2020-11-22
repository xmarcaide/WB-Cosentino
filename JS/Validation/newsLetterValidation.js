function validateNewsLetter() {
    var form = document.getElementById("form");
    var email = form.firstElementChild.lastElementChild;
    var proyectoProfesional = form.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild;
    var miVivienda = form.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild;

    if(checkEmail(email)){
        if(!checkTwoInputs(proyectoProfesional, miVivienda)){
            return false;
        }
        return true;
    }
    else{
        checkTwoInputs(proyectoProfesional, miVivienda);
        return false;
    }
}
