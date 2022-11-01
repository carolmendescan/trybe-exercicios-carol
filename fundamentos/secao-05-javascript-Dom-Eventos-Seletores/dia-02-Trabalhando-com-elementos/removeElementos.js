const pai = document.getElementById('pai');
const todosOsFilhos = pai.childNodes; //retorna a lista de filhos do pai

for (let index = todosOsFilhos.length - 1 ; index >= 0 ; index -= 1);{
    const filhoAtual = todosOsFilhos[index];
    if (filhoAtual !== elementoOndeVoceEsta){
        filhoAtual.remove()
    }
}
const segundoEUltimoFilho = document.getElementById('segundoEUltimoFilho');
segundoEUltimoFilhoDoFilho.remove()