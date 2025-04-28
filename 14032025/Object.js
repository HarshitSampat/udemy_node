const person = {
  name: "Harshit",
  age: 25,
  greet() {
    console.log("Hi I am " + this.name);
  },
};

person.greet();

const hobbies = ["Sports", "Cooking"];

const printName = (person) => {
  console.log(person.name);
};

printName(person);

// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );

// for (let hobby in hobbies) {
//   console.log(hobbies[hobby]);
// }

// hobbies.push("Programming");
// console.log("hobbies: ", hobbies);

// const newHobbies = [...hobbies, "dance"];
// console.log("newHobbies: ", newHobbies);

// const copiedPerson = { ...person };
// console.log("copiedPerson: ", copiedPerson);

// const toArray = (...args) => {
//   return args;
// };
// console.log("toArray: ", toArray(1, 2, 3, 4));
// console.log(toArray(1, 2, 3, 4, 5, 6, 7, 8, 9))
