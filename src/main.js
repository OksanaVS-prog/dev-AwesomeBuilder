
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

const getLoremImage = () => {
        const images = document.querySelectorAll('img');

        images.forEach(item => {
            if (!item.getAttribute('src')) {
                fetch('https://picsum.photos/332/420')
                    .then(response => response.blob())
                    .then(blob => item.src = URL.createObjectURL(blob))
                    .catch(error => item.src = "assets/img/cat-scottish.webp");
            }
        });
    };

 document.querySelectorAll('img').length ? getLoremImage() : null;