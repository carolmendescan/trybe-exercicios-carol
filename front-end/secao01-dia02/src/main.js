import Swal from "sweetalert2";

const image = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const BASE_URL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.ramdom() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
  .then((result) => result.json())
  .then((data) => {
    image.src = data.image.url;
    name.innerHTML = data.name;
  })
  .catch((error) => Swal.fire({
    title: 'Hero not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool',
  }));
});