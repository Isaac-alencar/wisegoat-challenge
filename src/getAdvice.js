import './assets/css/global.css';
import './assets/css/advices.css';

// Getting advice from api;
const url = 'https://api.adviceslip.com/advice';

const body = document.querySelector('body');
const text = document.querySelector('.generated__text');

let advice = '';
fetch(url, { method: 'GET', mode: 'cors' })
  .then(
    (response) => { response.json()
    .then((data) => {
      if (data) {
        text.innerText = data.slip.advice;
      }
    })
});
