const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// ==========================exercise1========================================
const autorAno1947 = () => {
  return books.find((books) => books.author.birthYear === 1947).author.name
};
// assert.strictEqual(autorAno1947(), 'Stephen King');
// ============================exercise2======================================
const menorNomeLivro = () => {
  let nomeLivro;

  books.forEach((book) => {
    if (!nomeLivro || book.name.length > nomeLivro.length) { 
      nomeLivro = book.name;
    }
  });
  return nomeLivro;
}
// ============================exercise3======================================

  const getNamedBook = () => {
    return books.find((book) => book.name.length === 26);
  }

// ============================exercise4======================================
const pessoasSecXX = () => {
  return books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);
}
// ============================exercise5======================================
const livroLancadoDec80 = () => {
  books.forEach((book) => {
    if(book.releaseYear > 1979 && book.releaseYear < 1990) {
    return true
  }
    return false
  });
};
// Outra Opção:
// const expectedResult = true;

// const someBookWasReleaseOnThe80s = () => {
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// }

// ============================exercise6======================================

