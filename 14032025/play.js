const name = "Max";
let age = 23;
let hobbies = true;

age = 34;

console.log(name);

const summarizeUser = (usreName, userAge, userHobby) => {
  return (
    "Name is " + usreName + ",age is " + userAge + ",Userhobby " + userHobby
  );
};

console.log(summarizeUser(name, age, hobbies));
