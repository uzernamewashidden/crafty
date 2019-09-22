$(document).ready(function(){

    $('.burger').on('click', function(){
        $('.nav').toggleClass('nav-active');
        $(this).toggleClass('toggle');
    });



    $('.testimonials-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots'
       
    });
});
