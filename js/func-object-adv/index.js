// object destructering
const person = {
  lastName: 'Nhan',
  firstName: 'Nguyen',
  walk: () => {
    console.log('Walking...');
  },
  hands: {
    leftHand: 'left',
    rightHand: 'right',
  },
  legs: {},
};

// const lastName = person.lastName;
// const firstname = person.firstName;
// => destructering
const { lastName, firstName } = person;

console.log(firstName, lastName);

// spread operator, rest operator
// ...person <=> lastName: 'Nhan', firstName: 'Nguyen',
const newPerson = { ...person }; // spread operator ( shadow copy )

console.log(person, newPerson);
// newPerson.walk();
person.hands.leftHand = 'Left';
console.log(person, newPerson);

// deep copy
const newPerson2 = JSON.parse(JSON.stringify(person));

// rest operator
function print({ walk, ...data }, ...rest) {
  //   console.log(lastName, firstName);
  console.log(data);
  console.log(rest);
  //   doAnotherThing(data);
}

print(person, 'second', 'third', 1, 2, 3);

function unlimitedParams(...arrPrams) {
  console.log(arrPrams);
}
unlimitedParams(1, 2, 3, 4, 2, 34, 3, 2, '234', 123);

function max(...arr) {
  return arr.sort((i, j) => j - i)[0]; // O(nlog(n))
}

console.log(max(2, -1));

const arr = [1, 4, 4, 4, 5, 67, 29];
arr.splice(1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7);
console.log('arr: ', arr);

Array.prototype.max = function () {
  let arr = this;
  if (arr && arr.length == 0) {
    return undefined;
  }
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) [(maxValue = arr[i])];
  }
  return maxValue;
};

console.log(arr.max());
console.log([4, 5, 7, 1].max());

Object.prototype.love = function () {
  console.log('Love');
};

let x = {};
x.love();
[].love();

var username = 'ABC';

// call, bind, apply
function talk() {
  console.log(this.username + ' is talking...');
}

//talk(); <=> unclear this

// talk.bind({ username: 'XYZ' })();
let newTalk = talk.bind({ username: 'XYZ' }); // assign this = { username: 'XYZ' }
newTalk();

talk.bind({ username: 'Hai' })();

const dog = {
  name: 'meo',
  bark: function () {
    console.log(this.name + ' is barking...');
  },
};

const dogBark = dog.bark.bind(dog);
dogBark();

// function cb(cbF) {
//   console.log('Do something');
//   cbF();
// }

// // dog.bark();
// cb(dog.bark);

// apply, call

function talkNew(topic1, topic2) {
  console.log(this.username + ' is talking about ' + topic1 + ' ' + topic2);
}
talkNew.call({ username: 'Chuot' }, 'Cheese', 'Cat');
talkNew.apply({ username: 'Chuot' }, ['Cheese', 'Cat']);
