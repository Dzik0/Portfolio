//MAKING BTN INTERACTIVE
document.querySelector('.js-btn').addEventListener('click', () => {
  verify();
});




//VERIFY FUNCTION
function verify () {
  const inputElement = document.querySelector('.js-input');
  const errorElement = document.querySelector('.js-error');
  const btnElement = document.querySelector('.js-btn');

  if (!validateEmail(inputElement.value)) {
    error(inputElement, errorElement);
  } else {
    removeError(inputElement, errorElement);
    subscribed(btnElement, inputElement);
  }
}


//ERROR
function error (input, error) {
    input.classList.add('red-border');
    error.classList.remove('hidden');
  }

//REMOVE ERROR
function removeError (input, error) {
  input.classList.remove('red-border');
  error.classList.add('hidden');
}

//SUB INFO
function subscribed (btn, input) {
  btn.innerHTML = 'Subscribed!';
  input.setAttribute('readonly', true);
}

//EMAIL VERIFICATION
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}