
const burgerBtn = document.querySelector('#burger');
const mobileContainer = document.querySelector('#mobile-container')

burgerBtn.addEventListener('click', ()=> {
  mobileContainer.classList.toggle('hidden')
  burgerBtn.classList.toggle('before:bg-purple')
  burgerBtn.classList.toggle('after:bg-purple')
});



