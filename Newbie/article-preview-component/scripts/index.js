renderPage();


function renderPage () {
//Making btns interactive
  const btnElement = document.querySelector('.share-js');
  
  btnElement.addEventListener('click', () => {
    const blueBtn = document.querySelector('.blue');
    const whiteBtn = document.querySelector('.white');
    const shareContainer = document.querySelector('.share-container-js');
    const containerElement = document.querySelector('.main-container');


    if (shareContainer.classList.contains('hidden')) {
      shareContainer.classList.remove('hidden');
      blueBtn.classList.add('hidden');
      whiteBtn.classList.remove('hidden');
      

    } else {
      shareContainer.classList.add('hidden');
      blueBtn.classList.remove('hidden');
      whiteBtn.classList.add('hidden');
    }

  })
}