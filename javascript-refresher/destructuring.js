const person = {
  name: "max",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const { name, age } = person;
console.log(name, age); // max, 29

const hobbies = ["Sports", "Cooking"];
const [hobi1, hobi2] = hobbies;
console.log(hobi1, hobi2); // Sports Cooking
