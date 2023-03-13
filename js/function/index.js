// regular function
function sayHello() {
  console.log('Hello!');
}

// expression function

const sayHelloExpFunc = function () {
  console.log('Hello ');
};

// arrow function

const sayHellowArrowFunc = () => {
  console.log('Hello');
};

// sayHello();
// sayHelloExpFunc();
// sayHellowArrowFunc();

// passed by reference and by value

// passed by value
function changeUsername(usernameNew) {
  console.log(usernameNew);
  usernameNew = 'new';
  console.log(usernameNew);
}

let usernameOld = 'old';
changeUsername(usernameOld);
console.log(usernameOld);

// passed by reference
const user = {
  username: 'old',
  pass: '1234',
  ID: '12',
};
console.log(user.username);

function changeUsernameInObj(user) {
  console.log(user.username);
  user.username = 'new';
  user.pass = '5678';
  console.log(user.username);
}

changeUsernameInObj(user);
console.log(user.username);

let str = 'abc';
let str2 = str;
console.log(str, str2);
str2 = 'def';
console.log(str, str2);

console.log(user);
const user2 = user;
user2.username = 'very new';
console.log(user);

console.log('##############~~~Recursive~~~##########');
// recursive

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

function print(number) {
  if (number == 0) {
    return;
  }

  print(number - 1);
  console.log(number);
}

print(5);

// function print(number) {
//     if (number == 6) {
//       return;
//     }
//     console.log(number);
//     print(number + 1);
//   }

//   print(1);

// function retryConnection() {
//     // connecting to server
//     // coding
//     // retry
//     retryConnection()
// }

/* Closusre */
console.log('###########~~~~~~~Closure~~~~~~~#########');

function outerFunction() {
  let ID = 1;

  function innerFunction() {
    console.log(ID);
    ID++;
  }

  return innerFunction;
}

const genID = outerFunction();

genID();
genID();
genID();
genID();
genID();
