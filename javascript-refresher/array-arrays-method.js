const hobbies = ["sports", "cooking", 1, true, { names: "adi", age: 23 }];
for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies[4].names); // adi

const hobi = ["race", "pray"];
console.log(
  hobi.map((hobi) => {
    return "hobbies " + hobi;
  })
);

// [ 'hobbies race', 'hobbies pray' ]