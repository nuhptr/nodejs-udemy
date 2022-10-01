const person = {
  names: "max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.names);
  },
};

console.log(person);
person.greet();
