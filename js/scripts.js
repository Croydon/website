$(document).ready(function(){
    //Activate user slider
    $('.our-users-slider').slick({
        variableWidth: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        cssEase: 'linear',
        //gap: 0,
        arrows: false,
        dots: false,
        pauseOnHover: true
    });

    //Activate testimonials slider
    $('.testimonial-slider').slick({
        arrows: true,
        autoplay: false,
        dots: false,
        speed: 800,
        accessibility: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});
