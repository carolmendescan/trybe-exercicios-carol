const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");


const pai = document.getElementById("elementoOndeVoceEsta").parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Adicionei um texto aqui!';

const primeiroFilho = pai.firstElementChild;

const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
