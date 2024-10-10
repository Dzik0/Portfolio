import { courses } from "../data/Courses.js";

//Function to transfer you to correct challenge level page
function goPage (page) {
  if (page === 'Newbie') {
    window.location.href = 'newbie.html';
  } else {
    alert('Coming soon!');
  }
}

//CONTAINS ALL ELEMENTS
let coursesDisplayed = '';

//LOOPS THROU ALL COURSES
courses.forEach((course) => {
  coursesDisplayed += `
    <button class="${course.class} btn-js course-${course.id}" data-page-name="${course.name}">${course.name}</button>
  `
});

//DISPLAYS COURSES ON WEBSITE
document.querySelector('.btn-container-js')
  .innerHTML = coursesDisplayed;


//MAKES BTNS INTERACTIVE
document.querySelectorAll('.btn-js').forEach((button) => {
  button.addEventListener( 'click', () => {
    const pageName = button.dataset.pageName;
    goPage(pageName);
  });
});