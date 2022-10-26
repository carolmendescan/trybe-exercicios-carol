// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
    
//     return reverse
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false




//   function verificaPalindrome(word) {
//     for(index in word) {
//       if(word[index] != word[(word.length - 1) - index]) {
//         return false;
//       }
//     }
//     return true;
//   }

