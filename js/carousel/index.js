const arrowLeftElem = document.querySelector('.arrow-left');
const arrowRightElem = document.querySelector('.arrow-right');

const imageShowerElems = document.querySelectorAll(
  '.image-wrapper .image-shower'
);

let activeIndex = 0;
let running = false;
const totalImageShower = imageShowerElems.length;
imageShowerElems[activeIndex].classList.add('active');

function moveToLeft() {
  if (running) {
    return;
  }
  running = true;
  // let nextIndex = activeIndex + 1;
  // if (nextIndex >= totalImageShower) {
  //   nextIndex = 0;
  // }
  let nextIndex = (activeIndex + 1) % totalImageShower;
  imageShowerElems[activeIndex].classList.add('active-move-to-left');
  imageShowerElems[nextIndex].classList.add('next-active-move-to-left');
  setTimeout(() => {
    imageShowerElems[activeIndex].classList.remove('active');
    imageShowerElems[activeIndex].classList.remove('active-move-to-left');
    imageShowerElems[nextIndex].classList.remove('next-active-move-to-left');
    imageShowerElems[nextIndex].classList.add('active');
    activeIndex = nextIndex;
    running = false;
  }, 500);
}

function moveToRight() {
  if (running) {
    return;
  }
  running = true;
  // let nextIndex = activeIndex - 1;
  // if (nextIndex < 0) {
  //   nextIndex = totalImageShower - 1;
  // }
  let nextIndex = (activeIndex - 1 + totalImageShower) % totalImageShower;
  imageShowerElems[activeIndex].classList.add('active-move-to-right');
  imageShowerElems[nextIndex].classList.add('next-active-move-to-right');
  setTimeout(() => {
    imageShowerElems[activeIndex].classList.remove('active');
    imageShowerElems[activeIndex].classList.remove('active-move-to-right');
    imageShowerElems[nextIndex].classList.remove('next-active-move-to-right');
    imageShowerElems[nextIndex].classList.add('active');
    activeIndex = nextIndex;
    running = false;
  }, 500);
}

arrowLeftElem.addEventListener('click', () => {
  moveToLeft();
});

arrowRightElem.addEventListener('click', () => {
  moveToRight();
});

setInterval(() => {
  moveToRight();
}, 3000);
