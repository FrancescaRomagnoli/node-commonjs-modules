const generateHobbies = require("./hobbies.js");
const generateFullName = require("./names.js");

const getPerson = () => {
  const { hobbies } = generateHobbies("cooking", "reading", "singing");
  const { firstName, lastName } = generateFullName("Mario", "Rossi");

  return {
    firstName,
    lastName,
    hobbies,
  };
};

const person = getPerson();

console.log(person);
