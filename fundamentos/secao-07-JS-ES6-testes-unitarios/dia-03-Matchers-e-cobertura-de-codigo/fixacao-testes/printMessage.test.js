const {info, printMessage} = require('./printMessage.js');

it('Verifica propriedade personagem no objeto', () => {
  expect(info).toHaveProperty('personagem');
});
it('Verifica informação boas vindas', () => {
  expect(printMessage(info)).toMatch('Boas vindas, ');
  expect(printMessage(info)).toMatch(info.personagem);
});
it('teste fluxo de exceção função printMessage', () => {
  expect(() => printMessage('Margarida')).toThrow(Error);
});
