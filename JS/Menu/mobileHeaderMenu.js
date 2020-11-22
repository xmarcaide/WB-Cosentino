function onHeaderMenuClick(this_id){
    var menu = this_id.parentElement.nextElementSibling;
    var body = document.body;
    var closeFixedLi = document.getElementsByClassName("header_bottom_li_fixed");

    if(menu.classList.contains("menu_display")){
        menu.classList.remove("menu_display");
        body.classList.remove("body_no_scroll");
        body.classList.add("body_scroll");
        this_id.firstElementChild.classList.remove("header_menu_icon_rotated");
        this_id.children[1].classList.remove("header_menu_icon_rotated");
        this_id.lastElementChild.classList.remove("header_menu_icon_rotated");
        this_id.firstElementChild.classList.add("header_menu_icon");
        this_id.children[1].classList.add("header_menu_icon");
        this_id.lastElementChild.classList.add("header_menu_icon");
        closeFixedLi[0] != null && subMenuClick(closeFixedLi[0].firstElementChild);
    }
    else{
        menu.classList.add("menu_display");
        body.classList.remove("body_scroll");
        body.classList.add("body_no_scroll");
        this_id.firstElementChild.classList.remove("header_menu_icon");
        this_id.children[1].classList.remove("header_menu_icon");
        this_id.lastElementChild.classList.remove("header_menu_icon");
        this_id.firstElementChild.classList.add("header_menu_icon_rotated");
        this_id.children[1].classList.add("header_menu_icon_rotated");
        this_id.lastElementChild.classList.add("header_menu_icon_rotated");
    }
}

function subMenuClick(this_id){
    var ulSibling = this_id.nextElementSibling;
    var nav = this_id.closest("nav");
    var li = this_id.closest("li");
    var liClass = document.getElementsByClassName("header_bottom_li");

    if(!ulSibling.classList.contains("visible")){
        li.classList.add("header_bottom_li_fixed");
        ulSibling.classList.add("visible");
        this_id.classList.add("header_bottom_a_icon_inverse");
        nav.classList.add("display_left");
        // for (i = 0 ; i<liClass.length; i++){
        //     (liClass[i] != li) && liClass[i].classList.add("display_left");
        // }
    } else {
        li.classList.remove("header_bottom_li_fixed");
        ulSibling.classList.remove("visible");
        this_id.classList.remove("header_bottom_a_icon_inverse");
        nav.classList.remove("display_left");
        // for (i = 0 ; i<liClass.length; i++){
        //     liClass[i].classList.remove("display_left");
        // }
    }
}

// var logos = this_id.parentElement.nextElementSibling;
// var header = this_id.parentElement.parentElement.parentElement;
// var divHeader = this_id.parentElement.parentElement;
// var rights = this_id.parentElement.parentElement.lastElementChild;

// header.classList.remove("header_sticky");
// header.classList.add("header_menu");
// divHeader.classList.remove("header_bot");
// divHeader.classList.add("header_bot_menu");
// menu.classList.remove("header_bot_nav_1");
// menu.classList.add("header_bot_nav_1_display");
// logos.classList.remove("header_logos_row_not_displayed");
// logos.classList.add("header_logos_row_displayed");
// rights.classList.remove("header_bot_div_p_not_displayed");
// rights.classList.add("header_bot_div_p");


// header.classList.remove("header_menu");
// header.classList.add("header_sticky");
// divHeader.classList.remove("header_bot_menu");
// divHeader.classList.add("header_bot");
// rights.classList.remove("header_bot_div_p");
// rights.classList.add("header_bot_div_p_not_displayed");
// menu.classList.remove("header_bot_nav_1_display");
// menu.classList.add("header_bot_nav_1");
// logos.classList.remove("header_logos_row_displayed");
// logos.classList.add("header_logos_row_not_displayed");