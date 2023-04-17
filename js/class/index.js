// class
class Animal {
  constructor(name) {
    this.name = name;
    // this.walk = this.walk.bind(this);
  }

  //   walk() {
  //     console.log(this.name + ' walking');
  //   }

  //   walk = function () {
  //     console.log(this.name + ' walking');
  //   }.bind(this);

  walk = () => {
    console.log(this.name + ' walking');
  };
}

const animal1 = new Animal('Pi');
const animal2 = new Animal('Pi2');

animal1.walk();
// animal2.walk();

function doSomething(cb) {
  console.log('Done! => ');
  cb();
}

let walk2 = animal1.walk;
walk2();
// doSomething(walk2);
// doSomething(animal2.walk);

// const animal1Walk = animal1.walk.bind(animal1);
// animal1Walk();

// function process() {
//   console.log('Data', this.data);
// }
// process();

// const processBinded = process.bind({ data: 'Hai' });
// processBinded();
// process();

class Person {
  constructor(name, age, privateKey) {
    let _privateKey = privateKey;
    this.name = name;
    this.age = age;

    this.setPrivate = function (privateKey) {
      _privateKey = privateKey;
    };
    this.getPrivate = function () {
      return _privateKey;
    };
  }

  walk = () => {
    console.log(this.name + ' walking....');
  };
}

class Employee extends Person {
  constructor(name, age, privateKey, gender) {
    super(name, age, privateKey);
    this.gender = gender;
  }

  walk = () => {
    console.log(this.name + ' walking ver2 ....');
  };
}

const em1 = new Employee('John', 20, 'secret', 'male');

em1.walk();
em1.name = 'Marry';
console.log(em1.name);
console.log(em1._privateKey);

// em1._privateKey = 'dat';
// console.log(em1._privateKey);
