/**BARRA DE NAVEGACION */

let navbar =$(".navbar");
let navl =$(".nav-link");
let navi =$(".nav-item");


$(window).scroll(function(){
    let oTop = $(".section-2").offset().top - window.innerHeight;

    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky");
        navl.removeClass("nav-link");
        navi.addClass("nav-item");
    }else{
        navbar.removeClass("sticky");
        navl.addClass("nav-link");
        navi.removeClass("nav-item");
    }
})