function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
  // this.firstHobby = hobbyOne;
  // this.secondHobby = hobbyTwo;
  // this.thirdHobby = hobbyThree;
  this.hobbies = [hobbyOne, hobbyTwo, hobbyThree];
}

const testObj = new hobbies("reading", "drawing", "cooking");
console.log(testObj);

module.exports = hobbies;
