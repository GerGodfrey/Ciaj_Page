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

var slideIndex = [1, 3];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["carousel1", "carousel2", "carousel3"]
showSlides(1, 0);
showSlides(2, 0);
showSlides(3, 0);
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}
function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
    }
