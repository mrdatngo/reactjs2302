// agruments

function sayHello() {
  const params = Array.from(arguments);
  console.log(params);
}

sayHello('Class', 'School');

// try - catch
// catch from async - await (previous lesson)

try {
  // do somethings....
  let data;
  if (data) {
    console.log(data.username);
  }
} catch (err) {
  console.log(err);
} finally {
  console.log('HIHI');
}

// function throwAExampleException() {
//   throw Error('Just a example');
// }

// throwAExampleException();

// function total(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     throw Error('Type Error!');
//   }
//   return a + b;
// }

// console.log(total(5, 'asdf'));
const oClockElm = document.querySelector('.js-oclock');

function updateClockTimer(hours, minutes, seconds) {
  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secondsStr = seconds.toString().padStart(2, '0');
  oClockElm.innerText = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  updateClockTimer(hours, minutes, seconds);
}, 1000);

// import - export
// import sum from './math.js';
// import { minus } from './math.js';
// import { multiply } from './math.js';
// import sum, { minus, multiply } from './math.js';

// console.log('Caltotal: ', sum(4, 5));
// console.log('Minus: ', minus(5, 1));
// console.log('Mutiply: ', multiply(4, 5));

// import *
import sum, * as math from './math.js';

console.log(math.multiply(5, 3));
console.log('Sum: ', sum(5, 6));
