import { inputs } from "./data.js";

renderInputs();

//MAIN RENDER FUNCTION
function renderInputs () {
  const documentElement = document.querySelector('.five-inputs-js');
  

  inputs.forEach(input => {
    documentElement.innerHTML += `
      <div class="input-container">
        <input type="${input.type}" placeholder="${input.placeholder}" class="${input.id}-js ${input.id}">
        <img src="images/icon-error.svg" alt="" class="icon-error ${input.id}-error-image hidden">
        </div>
        <div class="text-error ${input.id}-error-text hidden">
          ${input.error}
        </div>
    `
  });
}

//VERIFY FUNCTION INPUTS
function verify () {
  let approve = true;

  inputs.forEach(input => {
    const inputElement = document.querySelector(`.${input.id}-js`);
    const errorText = document.querySelector(`.${input.id}-error-text`);
    const errorImage = document.querySelector(`.${input.id}-error-image`);

    //CHECKS IF VALUE IS EMPTY TO SHOW ERROR
    if (inputElement.value === '') {
      showError(inputElement, errorText, errorImage);
      approve = false;
    } else {
      resetError(inputElement, errorText, errorImage);
    }

    //CHECKS IF EMAIL VALUE IS FORMATED PROPERLY
    if(inputElement.classList.contains('mail-id') && !validateEmail(inputElement.value)) {
      showError(inputElement, errorText, errorImage, true)
      approve = false;
    }

  });

  //COUNTS IF EVERYTHING ABOVE IS GOOD
  if (approve) {
    document.querySelector('.button-js').innerHTML = 'CLAIMED';
    clearInputs();
    removeEvent();
  }
}

//VALIDATE EMAIL FUNCTION
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//ERROR RESET FUNCTION 
function resetError (inputElement, errorText, errorImage) {
  inputElement.classList.remove('red-border', 'red-font', 'focus');
  if (errorText) errorText.classList.add('hidden');
  if (errorImage) errorImage.classList.add('hidden');
}

//SHOW ERROR
function showError (inputElement, errorText, errorImage, isMail = false) {
  inputElement.classList.add('red-border', 'focus');
  errorText.classList.remove('hidden');
  errorImage.classList.remove('hidden');
  if(isMail) inputElement.classList.add('red-font');
}

//CLEARS ALL INPUTS
function clearInputs () {
  inputs.forEach(input => {
    const inputElement = document.querySelector(`.${input.id}-js`)
    inputElement.value = '';
  });
}

//REMOVIES BTN TO BE INTERACTIVE
function removeEvent () {
  btnElement.removeEventListener('click', verify);
}


//MAKES CLAIM YOUR FREE TRAIL BTN INTERACTIVE
const btnElement = document.querySelector('.button-js');
btnElement.addEventListener('click', verify);