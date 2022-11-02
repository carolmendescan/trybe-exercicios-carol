const a = 15;
const b = 5;

const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;

console.log(multiplicacao);

// ================================================================

const numero1 = 4;
const numero2 = 8;

let maiorNumero;

if (numero1 > numero2) {
    maiorNumero = numero1;
} else if (numero2 > numero1) {
    maiorNumero = numero2;
};

console.log(maiorNumero);

// ===================================================================

const numero1 = 4;
const numero2 = 55;
const numero3 = 22;

let maiorNumero;

if (numero1 > numero2 && numero1 > numero3) {
    maiorNumero = numero1 + '(a)';
} else if (numero2 > numero1 && numero2 > numero3) {
    maiorNumero = numero2 + '(b)';
} else {
    maiorNumero = numero3 + '(c)';
} 
console.log(maiorNumero);

// =====================================================================

const number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

// ===================================================================

const a = 30;
const b = 90;
const c = 60;

let angulos = 'true';

if (a < 0 || b < 0 || c < 0) {
    angulos = 'erro';
} else if ((a+b+c) === 180) {
    angulos = 'true';
} else {
    angulos = 'false';
};

console.log(angulos);


// GABARITO
// const degreeAngleA = 65;
// const degreeAngleB = 100;
// const degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }

// ==========================================================================

