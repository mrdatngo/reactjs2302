// if
// if today is sunny, I will hang out with my love
const todayIsSunny = false;
const todayisRainning = true;
const gotMoney = false;
const loverMoney = true;

const todayIsValentine = false;
//todayisRainning == false <=> !todayisRainning
if (!todayisRainning && (gotMoney || loverMoney)) {
  // console.log('I will hang out with my love');
} else if (todayIsValentine) {
  // console.log('I will hang out with my love 2');
} else {
  // console.log('Stay at home');
}

let number = 0;
// !! convert to boolean
if (!!number) {
  // implicity conversion
  // console.log('Number');
} else {
  // console.log('No number');
}

// switch case
const month = 1;
// if (month == 1 || month == 2 || month == 3) {
//   console.log('Spring');
// } else if (month == 4 || month == 5 || month == 6) {
//   console.log('Summer');
// } else if (month == 7 || month == 8 || month == 9) {
//   console.log('Autumn');
// } else if (month == 10 || month == 11 || month == 12) {
//   console.log('Winter');
// } else {
//   console.log('Unknown!');
// }

switch (month) {
  case 1:
  case 2:
  case 3:
    // console.log('Spring');
    break;
  case 4:
  case 5:
  case 6:
    console.log('Summer');
    break;
  //...
  default:
    console.log('Unknown');
}

/* for loop */
// for (let count = 1; count <= 10; count++) {
//   console.log('I love you!', count);
// }
// array: [item1, item2, ....]
for (let index = 0; index < 10000; index++) {
  if (index == 100) {
    console.log('She/he love you back!');
    break;
  }
  console.log('I love you!', index + 1);
}

/* while loop */
let index = 0;
while (index < 10) {
  // console.log('I love you!', index + 1);
  index++;
}

/* do while */
index = 11;
do {
  // instruments
  // console.log('I love you!', index + 1);
  index++;
} while (index < 10);

// break in loop

/* function (method) */

// const lang = 'EN';

function sayHello(lang, userName) {
  // return true/false
  // console.log(lang);
  // {
  //   lang = 'CHN';
  //   {
  //     lang = 'JPN';
  //   }
  // }

  switch (lang) {
    case 'EN':
      console.log('Hello world,', userName);
      break;
    case 'VN':
      console.log('Xin chào!', userName);
      break;
    case 'CHN':
      console.log('Ni hao', userName);
      break;
    case 'JPN':
      console.log('Konbanwa!', userName);
      break;
    default:
      return false;
  }
  return true;
}

let en = 'EN';
const sayHelloStatus = sayHello(en, 'Anna');
if (!sayHelloStatus) {
  console.log('Unknown language!');
}

// sayHello('VN');
// pass arguments by value and reference
// func expression & arrow function
// closure
