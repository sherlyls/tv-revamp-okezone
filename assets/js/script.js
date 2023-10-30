var swiperStorynews = new Swiper(".slider-storynews", {
  slidesPerView: "auto",
  spaceBetween: 12,
});
var swiperTvstreaming = new Swiper(".grup-streaming", {
  slidesPerView: "auto",
});
var swiperRadio = new Swiper(".grup-radio", { slidesPerView: "auto" });
var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  effect: "coverflow",
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
    360: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
    370: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
    376: { slidesPerView: 1.25, coverflowEffect: { stretch: 229 } },
    385: { slidesPerView: 1.27, coverflowEffect: { stretch: 230 } },
    390: { slidesPerView: 1.28, coverflowEffect: { stretch: 230 } },
    400: { slidesPerView: 1.3, coverflowEffect: { stretch: 231 } },
    413: { slidesPerView: 1.39, coverflowEffect: { stretch: 218 } },
    414: { slidesPerView: 1.39, coverflowEffect: { stretch: 218 } },
    500: {
      slidesPerView: 1.34,
      coverflowEffect: { stretch: 283 },
      modifier: 2,
    },
    550: {
      slidesPerView: 1.47,
      coverflowEffect: { stretch: 270 },
      modifier: 2,
    },
    600: {
      slidesPerView: 1.65,
      coverflowEffect: { stretch: 250 },
      modifier: 2,
    },
  },
});
$(document).ready(function () {
  $(".burger-tv").click(function () {
    $(".menu-header").toggleClass("open");
    $(".menu-header").hasClass("open")
      ? $(".menu-header").animate({ top: "0px", padding: "56px 16px" })
      : $(".menu-header").animate({ top: "-120%" });
    $("html").toggleClass("test");
    $(".burger-tv.expand").toggleClass("collapse");
  });
  $('.ads-footer .close').on('click', function () {
    $('.ads-footer').css("display", "none");
  });
});
function sharelinkfacebook() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + linksharevideo + "",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400"
  );
}
function sharelinktwitter() {
  window.open(
    "https://twitter.com/share?url=" +
      linksharevideo +
      "&text=" +
      titlesharevideo +
      "&via=okezonenews",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400"
  );
}
function copyToClipboard(element) {
  const textToCopy = $(element).val();
  navigator.clipboard.writeText(textToCopy);
}
if ($(".grup-share .copy-link").hasClass("copy-link")) {
  $(".grup-share .copy-link").on("click", function () {
    $(".grup-share .notif").addClass("notif-show");
    $(".grup-share .notif").fadeIn(500);
    $(".grup-share .notif").fadeOut(5000);
  });
}
