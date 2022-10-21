const custo= 30;
const precoVenda = 80;


if (custo>=0 && precoVenda>=0){
    const valorCustoTotal = custo + (custo/100*20);
    const lucro= (precoVenda-valorCustoTotal)*1000;
    console.log(lucro);
} else {
    console.log("Valor negativo, digite outro valor");
};



// const custo= 30;
// const precoVenda = 80;

// const valorCustoTotal = custo + (custo/100*20);
// const lucro= (precoVenda-valorCustoTotal)*1000;


// console.log(lucro);