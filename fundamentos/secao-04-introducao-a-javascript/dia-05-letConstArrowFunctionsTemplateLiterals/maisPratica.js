
 
 let motor = 'desligado';

 const ligarDesligar = () => (
   motor === 'desligado' ? motor = 'ligado' : motor = 'desligado'
 )

 console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
 console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
 console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado