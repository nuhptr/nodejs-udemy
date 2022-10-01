const hobbies = ["sports", "cooking"];

const coppiedArray = [...hobbies];
console.log(coppiedArray); // [ 'sports', 'cooking' ]

const person = {
  name: "max",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const coppiedPerson = { ...person };
console.log(coppiedPerson);
// { name: 'max', age: 29, greet: [Function: greet] }

// spread operator in argument
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3)); // [1, 2, 3]
