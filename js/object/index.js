const car = {
  name: 'Fiat',
  model: 500,
  weight: 850,
  color: 'white',

  run: function () {
    console.log(this.name + ' running');
  },
};

console.log(car);
let property = 'name';
console.log('car.name', car.name, car[property]);

// update name
car.name = 'New Fiat';
console.log('car.name', car.name);

car.run();

console.log(Object.keys(car));
for (let item in car) {
  if (typeof car[item] != 'function') {
    console.log('item: ', item);
  }
}

// this, binding, applying, call

// practice
// define a person: firstName, lastName, getFullName()

const John = {
  firstName: 'John',
  lastName: 'Wick',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log('fullname: ', John.getFullName());
