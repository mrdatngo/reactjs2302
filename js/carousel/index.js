const arrowLeftElem = document.querySelector('.arrow-left');
const arrowRightElem = document.querySelector('.arrow-right');

const imageShowerElems = document.querySelectorAll(
  '.image-wrapper .image-shower'
);

let activeIndex = 0;
imageShowerElems[activeIndex].classList.add('active');

function moveToLeft() {
  let nextIndex = activeIndex + 1;
  imageShowerElems[activeIndex].classList.add('active-move-to-left');
  imageShowerElems[nextIndex].classList.add('next-active-move-to-left');
  setTimeout(() => {
    imageShowerElems[activeIndex].classList.remove('active');
    imageShowerElems[activeIndex].classList.remove('active-move-to-left');
    imageShowerElems[nextIndex].classList.add('next-active-move-to-left');
    imageShowerElems[nextIndex].classList.add('active');
    activeIndex = nextIndex;
  }, 500);
}

arrowLeftElem.addEventListener('click', () => {
  moveToLeft();
});

arrowRightElem.addEventListener('click', () => {
  alert('Right Click');
});
