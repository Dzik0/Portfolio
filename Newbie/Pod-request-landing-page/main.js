const inputElement = document.querySelector('.js-input');
const btnElement = document.querySelector('.js-btn');
const messageElement = document.querySelector('.js-msg');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function submitForm () {

  if (emailPattern.test(inputElement.value)) {
    inputElement.value = 'Request Sent!';
    inputElement.classList.remove('error');
    messageElement.classList.remove('shown');
  } else {
    inputElement.classList.add('error');
    messageElement.classList.add('shown');
  }

}



//Clickable button
btnElement.addEventListener('click', () => {
  submitForm();
});