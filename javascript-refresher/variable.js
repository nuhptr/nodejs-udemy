const names = "max";
let age = 29;
const hasHobies = true;

// let still can change the value
age = 30;

// const cannot change the value

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(names, age, hasHobies));
// name is max, age is 29, and the user has hobbies: true
