// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 1; index < numbers.length; index += 1) {
//     for(index2 = 0 ; index2 < index ; index2 +=1) {
//         if (numbers[index] < numbers[index2]){
//             let troca = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = troca;
//         };
//     };
// };
// console.log(numbers);

// // ========================================================

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index2 = 1; index2 < numbers.length; index2 += 1) {
//     for (let index = 0; index < index2 ; index += 1) {
//         if (numbers[index2] > numbers[index]){
//             let position = numbers[index2];
//             numbers[index2] = numbers[index];
//             numbers[index] = position;
//         };
//     };
// };
// console.log(numbers);

// ===========================================================
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
