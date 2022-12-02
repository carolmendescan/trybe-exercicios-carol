const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const expectedResult = 20;

const letras = names.join('').toLowerCase().split('');

const countA = () => {
return letras.reduce((acc, cur) => cur === 'a' ? acc += 1 : acc, 0 )
}
console.log(countA());