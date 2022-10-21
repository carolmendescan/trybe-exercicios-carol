const a =90;
const b = 70;
const c = 110;

const somaDosAngulos = a + b + c;

const todosPositivos = a>0 && b>0 && c>0;

if(todosPositivos){
  if (somaDosAngulos == 180){
  console.log('true');
}
  else {
    console.log('false');
};
}
else {
console.log('Ângulo Inválido');
}