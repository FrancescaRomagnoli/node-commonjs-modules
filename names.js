function fullName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// const testName = new fullName("Mario", "Rossi");
// console.log(testName);

module.exports = fullName;
