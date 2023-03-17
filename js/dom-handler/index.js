// Given block, and button. Change color to green when click to btn

const blockElem = document.querySelector('.block');
const changeColorBtn = document.querySelector('.change-color-btn');
// console.log(blockElem, changeColorBtn);

changeColorBtn.addEventListener('click', () => {
  blockElem.style.backgroundColor = 'green';
});
