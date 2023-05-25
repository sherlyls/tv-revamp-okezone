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
    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //   }


})

$(document).ready(function () {
    $(".burger-tv").click(function () {
        $('.menu-header').toggleClass('open');
        $('html').toggleClass('test');

        $('.burger-tv.expand').toggleClass('collapse');
    });




});



