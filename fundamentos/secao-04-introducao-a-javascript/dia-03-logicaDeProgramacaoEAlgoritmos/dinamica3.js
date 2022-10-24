// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

const carolzita = 22;
const murilo = 28;
const baeta = 18;
​
if (carolzita<murilo && carolzita<baeta) {
    console.log('Carolzita é a mais nova!')
}
else if (murilo<carolzita && murilo<baeta) {
    console.log('Murilo é o mais novo!')
}
else {
    console.log('Baeta é a pessoa mais nova!')
}