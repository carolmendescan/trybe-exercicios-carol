const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmao';
pai.appendChild(irmao);

// =================================================

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('section');
filho.id = 'filho';
elementoOndeVoceEsta.appendChild('filho');


// ===============================================

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// =====================================================

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
