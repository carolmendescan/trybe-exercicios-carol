const biggestWord = texto => {
    const frase = texto.split(' ');
    let maiorComprimento = 0;
    let maiorpalavra = '';

    for (const word of frase) {
        if (word.length > maiorComprimento){
            maiorComprimento = word.length;
            maiorpalavra = word;
        }
    }
    return maiorpalavra;
}

console.log(biggestWord('Deus é bom em todo o tempo'));

// const longestWord = text => {
//     const wordArray = text.split(' ');
//     let maxLength = 0;
//     let result = '';
  
//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }
  
//     return result;
//   }
  
//   console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));