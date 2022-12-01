const verificaNumeros = (numeroApostado, numeroAleatorio) => numeroApostado === numeroAleatorio

const sorteio = (numeroApostado, callback) => {
const numeroAleatorio = Math.ceil(Math.random() * 5);
return callback(numeroApostado, numeroAleatorio) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(sorteio(2, verificaNumeros));
