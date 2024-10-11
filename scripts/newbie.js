//IMPORTED
import { challenge } from "../data/NewbieChallenges.js";

//FUNCTION THAT TAKES YOU TO THE PROPER CHALLENGE
function goPage (challengeId) {
  let matchingItem = challenge.find(item => item.id === challengeId);
  
  window.location.href = `${matchingItem.pageLink}`
}

// Stored html
let displayedHTML = '';


//Looping through all challenges data
challenge.forEach((challenge) => {
  displayedHTML += `
    <button class="${challenge.css} js-btn id-${challenge.id}" data-page-id="${challenge.css}">${challenge.name}</button>
  `
});

//Displaying on page
document.querySelector('.btn-container-js')
  .innerHTML = displayedHTML;

//Making btns interactive
document.querySelectorAll('.js-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const buttonId = button.dataset.pageId;
    const challengeId = buttonId;
    
    goPage(challengeId);
  });
});