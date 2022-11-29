const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, key, valor) => {
  objeto[key] = valor;
}
adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

const retornaKeys = (objeto) =>
Object.keys(objeto);

console.log(retornaKeys(lesson2));

const tamanhoObj = (objeto) => Object.keys(objeto).length;
console.log(tamanhoObj(lesson1));

const valoresObj = (objeto) => Object.values(objeto);
console.log(valoresObj(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const getNumberOfStudents = (objeto) => {
  let totalEstudantes = 0;
  const keys = Object.keys(objeto);
  for(index in keys) {
  totalEstudantes += objeto[keys[index]].numeroEstudantes;
  }
  return totalEstudantes;
}
console.log(getNumberOfStudents(allLessons));