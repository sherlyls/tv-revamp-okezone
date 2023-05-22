var swiperStorynews = new Swiper('.slider-storynews', {
    slidesPerView: "auto",
    spaceBetween: 12,
});

var swiperTvstreaming = new Swiper('.grup-streaming', {
    slidesPerView: "auto",
    spaceBetween: 12,
});

var swiperRadio = new Swiper('.grup-radio', {
    slidesPerView: "auto",
    spaceBetween: 12,
});

// var swiper = new Swiper(".mySwiper", {
//     effect: "cards",
//     grabCursor: true,
//     cardsEffect: {
//         perSlideOffset: 17, // Space between cards in px
//         perSlideRotate: 0, // Rotation of cards in degrees
//     },
//     initialSlide: 2,
// });

// var swiper = new Swiper('.mySwiper', {
//     // loop: true,
//     speed: 1000,
//     // autoplay: {
//     //     delay: 3000,
//     // },
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 2,
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 120,
//         depth: 200,
//         modifier: 1,
//         slideShadows: false,
//     },
//     initialSlide: 2,

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

// })

var mySwiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    initialSlide: 2,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})


$(document).ready(function () {
    $(".burger-tv").click(function () {
        $('.menu-header').toggleClass('open');
        $('html').toggleClass('test');

        $('.burger-tv.expand').toggleClass('collapse');
    });
});



