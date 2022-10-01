const person = {
  name: "max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const hobbies = ["Sports", "Cooking"];

// many other method can view in MDN
hobbies.push("Proggraming");
console.log(hobbies);
