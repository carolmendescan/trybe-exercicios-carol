const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o número passado, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('a')).toBe(false);
  })
})
