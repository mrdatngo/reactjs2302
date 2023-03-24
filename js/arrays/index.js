/*
    Given a number: number
    Check if it is a prime number ( a prime number is a number have only two 'uoc' are 1 and itself - except 1)
*/

// rule: 10^8 unit of operation in 1s

console.log('Start');

let number = 1000000000;

// solution 1:
// let numberOfDivisor = 0

// for (let i = 1; i <= number; i++) { // complexity: O(n)
//     if (number % i == 0) {
//         // console.log(i)
//         numberOfDivisor++
//     }
// }

// if (numberOfDivisor == 2) {
//     console.log("YES")
// } else {
//     console.log("NO")
// }

// solution 2: complexity: O(n)
number = 4;

// let isPrime = true
// if (number <= 1 ) {
//     isPrime = false
// } else if (number == 2) {
//     isPrime = true
// } else {
//     for (let i = 3; i <= Math.sqrt(number); i+= 2 ) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// log <=> binary algorithm
let isPrime = true;
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log('YES');
} else {
  console.log('NO');
}

console.log('########## Arrays #############');

const fruits = ['apple', 'orange', 'mango'];
// const fruits = new Array('apple', 'orange', 'mango');
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 'apple', 'orange'];
console.log(numbers);

const arr2D = [
  [1, 2, 3, 4, 5],
  ['apple', 'orange'],
  [{ username: 'John' }],
  'just a string',
  4,
];

console.log(arr2D);
console.log('fisrt fruit: ', fruits[0]);
console.log(arr2D[0][2]);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < arr2D.length; i++) {
  // index common use: i, j, k, u, v, t
  let data = arr2D[i];
  if (Array.isArray(data)) {
    // fruit instanceof Array
    for (let j = 0; j < data.length; j++) {
      console.log(data[j]);
    }
  } else {
    console.log(data);
  }
}

fruits.forEach((item, idx) => {
  console.log(item, idx);
});

const fruit = 'orange';
let found = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] == fruit) {
    found = true;
    break;
  }
}
console.log('found: ', found);

found = false;
fruits.forEach((item) => {
  if (item === fruit) {
    found = true;
  }
});
console.log('found: ', found);

console.log('############ Methods ##############');
// push, pop, shift, unshift
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
let data = stack.pop();

console.log(stack, data);

stack.push(4);
stack.push(5);
console.log(stack);

let firstData = stack.shift();
console.log(stack, firstData);

stack.unshift(0);
console.log(stack);

// indexOf, lastIndexOf
console.log(stack.indexOf(10));
stack.push(4);
console.log(stack);
console.log(stack.indexOf(4));
console.log(stack.lastIndexOf(4));

let person1 = {
  username: 'John',
};

let person2 = {
  username: 'Marry',
};

stack.push(person1);
stack.push(person2);
console.log(stack);

console.log(stack.indexOf({ username: 'John' })); // new object => compare object never equal
console.log(stack.indexOf(person1));
// let a = {};
// let b = {};
// console.log(a == b); // never equal because of different address

// reverse
console.log(stack);

// let copyStack = [];
// stack.forEach((item) => copyStack.push(item));
// copyStack.reverse();

let copyStack = stack.slice(0, 5).reverse(); // shadow copy <=> deep copy

console.log(stack);
console.log('reverse: ', copyStack);

const removes = copyStack.splice(0, 2, 6, 5);
copyStack.splice(3, 2, 3, 2, 1, 0, -1, -2);
console.log(removes);
console.log(copyStack);

// join, toString()
console.log(copyStack.toString());
console.log(copyStack.join('||')); // seperator

// find, filter, map
let list = [
  { username: 'Tung' },
  { username: 'Nhung' },
  { username: 'Hue' },
  { username: ' Khanh' },
  [{ username: 'Hai' }, { username: 'Cuc' }],
];

const foundItem = list.find((item) => {
  return item.username.trim()[0] == 'K';
});

list = [
  { username: 'Tung' },
  { username: 'Nhung' },
  { username: 'Hue' },
  { username: ' Khanh' },
];

const existedNcharacterStudents = list.filter((item) => {
  //   if (Array.isArray(item)) {
  //     return true;
  //   }
  return item.username.includes('n');
});
console.log(existedNcharacterStudents);
// console.log(list.indexOf(2));

// const foundItem = list.find((item) => {
//   console.log(item, typeof item);
//   if (typeof item == 'object') {
//     return item.username == 'Hue';
//   }
// });

// console.log('foundItem: ', foundItem);

const listStudents = [
  {
    firstName: 'Gia',
    lastName: 'Khanh',
  },
  {
    firstName: 'Ngoc',
    lastName: 'Nhung',
  },
  {
    firstName: 'Nham',
    lastName: 'Hue',
  },
];

// studentFullnames: ["Gia Khanh", "Ngoc Nhung", "Nham Hue"]

let studentFullnames = listStudents.map((item) => {
  //   return item.firstName + ' ' + item.lastName;
  return { fullname: item.firstName + ' ' + item.lastName };
});

// let studentFullnames = [];
// for (let i = 0; i < listStudents.length; i++) {
//   studentFullnames.push(
//     listStudents[i].firstName + ' ' + listStudents[i].lastName
//   );
// }
console.log(studentFullnames);

// reduce
const listNumber = [1, 2, 3, 4, -5, 6, 7];
// let total = 0;
// listNumber.forEach((item) => (total += item));
console.log(listNumber);
let total = listNumber.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);
console.log(total);

console.log(listNumber.concat(listStudents));

// every => check
const check = listNumber.every((item) => {
  return item > 0;
});
console.log(check);

// sort => homework => giang vao hom sau

const uNumbers = [2, 4, 2, 52, 325, 3];
const oNumbers = uNumbers.sort((number1, number2) => {
  return number2 - number1;
});
console.log(uNumbers, oNumbers);

const students = [
  {
    name: 'A',
  },
  {
    name: 'C',
  },
  {
    name: 'B',
  },
];

students.sort((s1, s2) => {
  if (s1.name > s2.name) {
    return -1;
  } else if (s1.name < s2.name) {
    return 1;
  }
  return 0;
});

console.log(students.reverse());
