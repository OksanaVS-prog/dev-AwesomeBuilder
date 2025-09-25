
const swiper = new Swiper('.swiper', {
  spaceBetween: 20,

  breakpoints: {
    0: { // мобильные
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: 'row',
      },
      loop: false, // ⚠️ обязательно выключить!
    },
    1024: { // десктоп
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      grid: {
        rows: 1, // иначе loop ломается
      },
    },
  },
});

const { log } = require("console");

const burgerBtn = document.querySelector('#burger');
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', ()=> {
  mobileContainer.classList.toggle('hidden')
  burgerBtn.classList.toggle('before:bg-purple')
  burgerBtn.classList.toggle('after:bg-purple')
  body.classList.toggle('overflow-hidden')
});



