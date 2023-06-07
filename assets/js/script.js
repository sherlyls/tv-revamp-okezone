var swiperStorynews = new Swiper('.slider-storynews', {
    slidesPerView: "auto",
    spaceBetween: 12,
});

var swiperTvstreaming = new Swiper('.grup-streaming', {
    slidesPerView: "auto",
});

var swiperRadio = new Swiper('.grup-radio', {
    slidesPerView: "auto",
});

var mySwiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.24,
    coverflowEffect: {
        rotate: 0,
        stretch: 232,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        360: {
            slidesPerView: 1.27,
            coverflowEffect: {
                stretch: 230,
            },
        },
        370: {
            slidesPerView: 1.27,
            coverflowEffect: {
                stretch: 230,
            },
        },
        376: {
            slidesPerView: 1.25,
            coverflowEffect: {
                stretch: 229,
            },
        },
        385: {
            slidesPerView: 1.27,
            coverflowEffect: {
                stretch: 230,
            },
        },
        390: {
            slidesPerView: 1.28,
            coverflowEffect: {
                stretch: 230,
            },
        },
        400: {
            slidesPerView: 1.3,
            coverflowEffect: {
                stretch: 231,
            },
        },
        413: {
            slidesPerView: 1.39,
            coverflowEffect: {
                stretch: 218,
            },
        },
        414: {
            slidesPerView: 1.39,
            coverflowEffect: {
                stretch: 218,
            },
        },
        600: {
            slidesPerView: 1.65,
            coverflowEffect: {
                stretch: 250,
            },
            modifier: 2,
        }
    }
})

$(document).ready(function () {
    $(".burger-tv").click(function () {
        $('.menu-header').toggleClass('open');
        $(".menu-header").hasClass("open") ? ($(".menu-header").animate({
            top: "56px", 
        })) : $(".menu-header").animate({
            top: "-120%"
          })
        $('html').toggleClass('test');
        $('.burger-tv.expand').toggleClass('collapse');
    });
});



