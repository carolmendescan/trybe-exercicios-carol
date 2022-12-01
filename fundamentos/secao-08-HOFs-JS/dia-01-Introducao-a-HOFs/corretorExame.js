const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const contadorDePontos = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  let pontuacaoFinal = 0;
  for(let index = 0; index < RIGHT_ANSWERS.length; index +=1) {
  const retornoDaCallback = callback(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
  pontuacaoFinal += retornoDaCallback;
  }
  return pontuacaoFinal;
};
console.log(contadorDePontos(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
