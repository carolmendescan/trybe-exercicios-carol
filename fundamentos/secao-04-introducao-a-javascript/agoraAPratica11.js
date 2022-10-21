
let aliquotINSS;
let aliquotIR;

const salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  aliquotINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotINSS = salarioBruto * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalarial = salarioBruto - aliquotINSS;

if (baseSalarial <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalarial <= 2826.65) {
  aliquotIR = (baseSalarial * 0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
  aliquotIR = (baseSalarial * 0.15) - 354.80;
} else if (baseSalarial <= 4664.68) {
  aliquotIR = (baseSalarial * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalarial * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalarial - aliquotIR));
