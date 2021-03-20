$(function () {
    "use strict";

    $('.populer_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        navs: true,
        navText: ['<i class="fas fa-long-arrow-alt-left arrow_left"></i>', '<i class="fas fa-long-arrow-alt-right arrow_right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,

            },
            992: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    
    $('.testomonial_slide').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        navs: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,

            },
            992: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });
    
    
    /* venobox js*/
    $('.venobox').venobox({
        
    }); 


});