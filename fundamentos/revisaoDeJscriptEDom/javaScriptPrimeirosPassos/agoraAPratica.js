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
const pecaXadrez = 'Rainha';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Rei -> Uma casa para qualquer direção');
        break;
    case 'bispo':
        console.log('Bispo -> diagonal');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('erro: peça inválida');
};
// =================================================================================================
const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// =================================================================================
const a = 3;
const b = 7;
const c = 9;

let isEven = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
isEven = true;
};
 console.log(isEven);

 // =================================================================================
 const a = 3;
 const b = 7;
 const c = 9;
 
 let isOdd = false;
 
 if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
 isOdd = true;
 };
  console.log(isOdd);

// =================================================================================

const custo = 9;
const venda = 40;
const imposto = custo * 0.2
const lucro = (venda - (custo +imposto)) * 1000;

if (custo < 0 || venda < 0) {
    console.log('Erro');
} else {
    console.log(lucro);
}
// GABARITO
// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };

// =================================================================================

