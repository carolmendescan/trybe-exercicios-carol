const sum = require('./sum.js');

  describe('testa a função sum', () => {

    it('Testa o retorno de sum', () => {
      expect(sum(4, 5)).toBe(9);
      expect(sum(0, 0)).toBe(0);
    })
    it('Testa se a função sum lança um erro quando os parâmetros são number 4 e string 5', () => {
      expect(() => sum(4, '5')).toThrowError();
    })
    it('Testa se a mensagem de erro é parameters must be numbers quando realizar a chamada sum 4 string 5', () => {
      expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
  });
