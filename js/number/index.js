let numberStr = '5';

// let number = Number(numberStr);
let number = Number.parseFloat(numberStr);
// let number = Number.parseInt(numberStr);

console.log(number, typeof number, Number.isInteger(number));
console.log(number.toString());

let bigNumber = -1 / 0;
console.log(bigNumber, Number.isFinite(bigNumber));

let wrongNumber = Number('1e8'); // not a number
console.log(wrongNumber);
if (Number.isNaN(wrongNumber)) {
  console.log('Please input valid number!');
}

let aNumber = 20 / 3;
console.log(aNumber);
console.log('Round: ', Math.round(aNumber));
console.log('Ceil: ', Math.ceil(aNumber));
console.log('Floor: ', Math.floor(aNumber));
console.log('toFixed(2):string ', aNumber.toFixed(2));
console.log('trick: ', Math.round(aNumber * 100) / 100);

// random ()

console.log('math.random() -> [0->1)', Math.random());
console.log('[0-100) <=> math.random()*100', Math.floor(Math.random() * 100));

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
console.log('Random from(15, 20): ', randomFromTo(15, 20));
