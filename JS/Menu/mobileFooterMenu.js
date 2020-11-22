function toggleMenu(thisValue) {
    if (matchMedia("(max-width: 1200px)").matches) {
        var nextUL = thisValue.nextElementSibling;
        if (nextUL.classList.contains("displayed_off")) {
            if(document.getElementsByClassName("displayed_on").length != 0){
                document.getElementsByClassName("displayed_on")[0].classList.add("displayed_off");
                document.getElementsByClassName("displayed_on")[0].classList.remove("displayed_on");
            }
            nextUL.classList.remove("displayed_off");
            nextUL.classList.add("displayed_on");
        } else {
            nextUL.classList.remove("displayed_on");
            nextUL.classList.add("displayed_off");
        }
    }
}
