import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const getLoremImage = () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(item => {
        if (!item.getAttribute('src')) {
            fetch('https://picsum.photos/640/360')
                .then(response => response.blob())
                .then(blob => item.src = URL.createObjectURL(blob))
                .catch(error => item.src = "assets/img/cat-scottish.webp");
        }
    });
};

document.querySelectorAll('img').length > 0 ? getLoremImage() : null;
