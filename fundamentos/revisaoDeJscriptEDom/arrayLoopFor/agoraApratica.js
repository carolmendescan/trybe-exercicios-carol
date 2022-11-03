// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index +=1){
//     let numerosDoArray = numbers[index]
//     console.log(numerosDoArray);
// };
// // ========================================================
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
   
// };
// console.log(soma);
// // ========================================================
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index +=1){
// soma += numbers[index];
// media = soma / numbers.length;
// }
// console.log(media);

// // GABARITO
// // let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let sum = 0;

// // for (let index = 0; index < numbers.length; index += 1) {
// //   sum += numbers[index];
// // }

// // let average = sum / numbers.length;

// // console.log(average);

// // ========================================================

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero =numbers[0];

// for (let index = 0; index < numbers.length; index +=1) {
//     if(numbers[index] > maiorNumero){
//         maiorNumero = numbers[index];
//     }
// }
// console.log(maiorNumero);

// // ========================================================
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let odd = 0;

// for (let index = 0; index < numbers.length; index +=1) {
// if (numbers[index] % 2 !== 0){
//     odd +=1;
//     };
// };
//     if (odd === 0){
//     console.log('nenhum valor ímpar encontrado');
//     } else {
// console.log(odd);
//     };
// ========================================================
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] < menorNumero){
        menorNumero = numbers[index];
    };
};
    console.log(menorNumero);

// ========================================================
const array = [];

for (let index = 1; index <= 25; index +=1) {
array.push(index);
};
console.log(array);


for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
  };

// ========================================================

