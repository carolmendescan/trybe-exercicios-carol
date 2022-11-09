// window.onload = function () {
// const botaoEnviar = document.getElementById('submit-btn');
// botaoEnviar.addEventListener('click', (event) => {
//   event.preventDefault();
// });

//   const clearFormulario = document.querySelector('#clear-btn');
//   clearFormulario.addEventListener('click', clearFields);
// };

// function clearFields () {
//   const formularioInputs = document.querySelectorAll('input');
//   const textArea = document.querySelector('#text-area');
//   for (let index = 0; index < formularioInputs.length; index += 1) {
//     const userInput = formularioInputs[index];
//     userInput.value = '';
//     userInput.checked = false;
//   }
//   textArea.value = '';
// };
// ================================================================
function botaoEnviar(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('#text-area');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
};

function textInputValidation() {
  const email = document.querySelector('#e-mail').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#nomeCompleto').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#text-area').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', botaoEnviar);
  const agree = document.querySelector('#agreement');
  agree.addEventListener('change', enableSubmit);
};
// ====================================================================

// Não entendi bem a parte do prevent default no exemplo do botão enviar.
// Ver a diferença de fazer arrow function no codigo comentado acima.
// Porque a parte da validation entrou dentro da função botão enviar? Tem alguma coisa a ver com o preventDefault?