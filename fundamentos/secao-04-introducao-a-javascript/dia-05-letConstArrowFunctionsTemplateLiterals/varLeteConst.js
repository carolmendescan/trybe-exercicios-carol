    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // var pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);


      var pessoa = {
        nome: 'Henri',
        idade: 20
      }
      pessoa.nome = 'Luana';
      pessoa.idade = 19;
      
      console.log('Nome:', pessoa.nome);
      console.log('Idade:', pessoa.idade);