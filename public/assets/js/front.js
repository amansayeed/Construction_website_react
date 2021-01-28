$(function () {


    // ================================================
    //  HERO SLIDER
    // ================================================
    $('.hero-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true
    });

    // ================================================
    //  TESTIMONIALS SLIDER
    // ================================================
    $('.testimonials-slider').owlCarousel({
        items: 1,
        margin: 30,
        dots: true,
        responsive: {
            991: {
                items: 2
            }
        }
    });
});
