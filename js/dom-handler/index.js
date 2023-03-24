// Given block, and button. Change color to green when click to btn

// const blockElem = document.querySelector('.block');
// const blockElem = document.getElementById('block');
// const blockElem = document.getElementsByTagName('div')[0];
const blockElem = document.querySelectorAll('div.block#block')[0];
const changeColorBtn = document.querySelector('.change-color-btn');
// console.log(blockElem, changeColorBtn);

const changeColorCb = () => {
  blockElem.style.backgroundColor = 'green';
  // blockElem.setAttribute('style', 'background-color: red;');
};

// way 1
changeColorBtn.addEventListener('click', changeColorCb);
// changeColorBtn.addEventListener('click', () => {
//   alert('Clicked!');
// });

// way 2
// changeColorBtn.onclick = changeColorCb;
// changeColorBtn.onclick = () => {
//   alert('Hello');
// };

// way 3: add directly to element

blockElem.addEventListener('mouseover', () => {
  blockElem.style.backgroundColor = 'red';
});

blockElem.addEventListener('mouseout', () => {
  blockElem.style.backgroundColor = 'white';
});

// container
const containerElem = document.querySelector('.container');
console.log(containerElem);

const h3Elem = document.createElement('h3');
h3Elem.innerText = 'Title';

const pElem = document.createElement('p');
pElem.innerText = 'Description';

containerElem.append(h3Elem);
// containerElem.appendChild(h3Elem);
// containerElem.append('Hello');
// containerElem.append(pElem);

containerElem.removeChild(h3Elem);

// containerElem.innerHTML = `<h3>Title</h3>`;
// containerElem.innerText = `<h3>Title</h3>`;

const btnContainer = document.querySelector('.btn-container');
btnContainer.addEventListener('click', () => {
  containerElem.style.display = 'block';
});

// class (className) - attribute
btnContainer.addEventListener('click', () => {
  // containerElem.classList.add('border-solid');
  // if (containerElem.classList.contains('border-solid')) {
  //   containerElem.classList.remove('border-solid');
  // } else {
  //   containerElem.classList.add('border-solid');
  // }

  containerElem.classList.toggle('border-solid');
});
