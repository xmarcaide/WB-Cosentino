
var slidesToShowVar = 0;

$(document).ready(function(){
    slidesToShowVar = 5;
    $('#slide .slide_class').slick({
        infinite: true,
        speed: 300,
        slidesToShow: slidesToShowVar,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
});



// window.addEventListener('DOMContentLoaded', (event) => {
//     (function () {
//         var mql = window.matchMedia('(max-width: 1250px)');
//         var mql1 = window.matchMedia('(max-width: 1000px)');
//         var mql2 = window.matchMedia('(max-width: 750px)');
//         var mql3 = window.matchMedia('(max-width: 500px)');
//
//         mql.addEventListener('change', function (evt) {
//             if(slidesToShowVar == 5){
//                 slidesToShowVar = 4;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             } else {
//                 slidesToShowVar = 5;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             }
//         })
//
//         mql1.addEventListener('change', function (evt) {
//             if(slidesToShowVar == 4){
//                 slidesToShowVar = 3;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             } else {
//                 slidesToShowVar = 4;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             }
//         })
//
//         mql2.addEventListener('change', function (evt) {
//             if(slidesToShowVar == 3){
//                 slidesToShowVar = 2;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             } else {
//                 slidesToShowVar = 3;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             }
//         })
//
//         mql3.addEventListener('change', function (evt) {
//             if(slidesToShowVar == 2){
//                 slidesToShowVar = 1;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             } else {
//                 slidesToShowVar = 2;
//                 $('#slide .slide_class').slick("slickSetOption", "slidesToShow", slidesToShowVar);
//             }
//         })
//     })();
// });