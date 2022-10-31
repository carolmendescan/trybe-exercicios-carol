const replaceX = (nome) => {
    const frase = 'Tryber x aqui!';
    const word = frase.split(' ');
    
    for (let index = 0; index < word.length; index+= 1){
        if (word[index] === 'x'){
            word[index] = nome;
        }
    }
    return word.join(' ');
    };

console.log(replaceX('Ana'));

// const substituaX = (nome) => {
//     const frase = 'Tryber x aqui!';
//     const fraseArray = frase.split(' ');
//     for (let index = 0; index < fraseArray.length; index += 1) {
//       if (fraseArray[index] === 'x') {
//         fraseArray[index] = nome;
//       }
//     }  
//     return fraseArray.join(' ');
//   };
  
//   console.log(substituaX('Bebeto'));