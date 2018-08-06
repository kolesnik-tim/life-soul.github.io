import Swiper from 'swiper';


//home-shares
var swiper = new Swiper('.swiper-intro', {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
