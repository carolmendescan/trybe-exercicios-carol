const pessoaEstudante = {};
// email, telefone, github e linkedIn

const adicionaKey = (objeto, propriedade, valor) => {
  objeto[propriedade] = valor;
}

let key = 'email';
const email = 'anacpersonal@gmail.com';

adicionaKey(pessoaEstudante, key, email);
// console.log (pessoaEstudante);

key = 'telefone';
const fone = 123456789;

adicionaKey(pessoaEstudante, key, fone);
// console.log (pessoaEstudante);

key = 'gitHub';
const github = 'carolmendes';

adicionaKey(pessoaEstudante, key, github);
console.log (pessoaEstudante);