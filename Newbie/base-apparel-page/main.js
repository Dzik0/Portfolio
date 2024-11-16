const btnElement = document.querySelector('.js-btn');
const errorElement = document.querySelector('.js-error-msg');
const errorLogo = document.querySelector('.js-error-logo');

function validateEmail(email) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
}

btnElement.addEventListener('click', function sub() {
  const inputElement = document.querySelector('.js-input');
  const email = inputElement.value;

  if (!validateEmail(email)) {
    errorElement.classList.remove('hidden');
    errorLogo.classList.remove('hidden');
  } else if (validateEmail(email)) {
    inputElement.value = 'Subscibed!'
    errorElement.classList.add('hidden');
    errorLogo.classList.add('hidden');
    btnElement.removeEventListener('click', sub);
    inputElement.readOnly = true;
  }
})