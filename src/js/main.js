import '../css/style.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const DESKTOP_BREAKPOINT = 1024;

const swiper = new Swiper('.swiper', {
  spaceBetween: 0,
  speed: 3000,

  // ❗ autoplay должен быть в корне
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: 'row',
      },
      loop: false,
      freeMode: false,
    },

    [DESKTOP_BREAKPOINT]: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
      loop: true,
      freeMode: true,
      freeModeMomentum: false, // 🔥 ОБЯЗАТЕЛЬНО для постоянного движения
    },
  },

  on: {
    breakpoint(swiper) {
      const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

      if (isDesktop) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    },
  },
});

const burgerBtn = document.querySelector('#burger');
const mobileContainer = document.querySelector('#mobile-container')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', ()=> {
  mobileContainer.classList.toggle('hidden')
  burgerBtn.classList.toggle('before:bg-purple')
  burgerBtn.classList.toggle('after:bg-purple')
  body.classList.toggle('overflow-hidden')
});

  const installTabs = ()=> {
  const tabsButtons = document.querySelectorAll('[data-tab-content]')
  const tabContent = document.querySelectorAll('.tab-content')

  const removeActiveClassForNav =()=> {
    tabsButtons.forEach(item=> item.classList.remove('bg-purple'))
  }

  const hiddenContentTabs =()=> {
    tabContent.forEach(item=> item.classList.add('hidden'))
  }


  tabsButtons.forEach((item, index, array)=>{
    const tabsButton = item.getAttribute('data-tab-content');

    item.addEventListener('click', ()=> {
      const showContent = document.getElementById(tabsButton)
      removeActiveClassForNav()
      item.classList.add('bg-purple')

      hiddenContentTabs()
      showContent.classList.remove('hidden')
    })
  })
}


document.querySelectorAll('.tabs').length ? installTabs() : null;


