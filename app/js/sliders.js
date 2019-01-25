window.onload = function() {

    $('.partners').slick({
                infinite: true,
                arrows: false,
                slidesToShow: 6,
                vertical: false,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                variableWidth:true,
                draggable: true,

                responsive: [{
                    breakpoint: 640,
                    settings: "unslick"

                }]
            });

    $('.slider-section__wrapper').slick({
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        cssEase: 'ease',
        pauseOnHover: true,

        responsive: [{

            breakpoint: 820,
            settings: "unslick"

        }]

    });
};