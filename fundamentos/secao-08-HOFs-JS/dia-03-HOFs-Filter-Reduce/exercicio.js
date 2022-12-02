const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
 const numerosParesSomados = numbers.reduce((acc, curr) => {
  return acc + (curr % 2 === 0 ? curr : 0)
 }, 0)

 console.log(numerosParesSomados);