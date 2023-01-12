import './style.css';

const getDogButton = document.querySelector('#random-dog');
const getCatButton = document.querySelector('#random-cat');
const surpriseMe = document.querySelector('#surprise-me');

const petImage = document.querySelector('#random-pet-image');

getDogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const petUrl = data.message;

      petImage.src = petUrl;
    });
});

getCatButton.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
      const petUrl = data.file;

      petImage.src = petUrl;
    });
});

surpriseMe.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petUrl = data.file || data.message;

      petImage.src = petUrl;
    });
});