window.addEventListener('DOMContentLoaded', (event) => {
    (function () {
        var mql = window.matchMedia('(min-width: 1200px)');

        mql.addEventListener('change', function (evt) {
            document.body.classList.contains("body_no_scroll") && onHeaderMenuClick(document.body.children[1].firstElementChild.firstElementChild.lastElementChild);
            var footerDisplayed = document.querySelectorAll(".displayed_on")[0];
            if(footerDisplayed != null){
                footerDisplayed.classList.remove("displayed_on");
                footerDisplayed.classList.add("displayed_off");
            }
        })
    })();
});
