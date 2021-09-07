////////1.Explore Differences Between the var and let Keywords
/*
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
 return quote = catName + " says Meow!";

}
console.log(catTalk());
*/

////////2.Declare a Read-Only Variable with the const Keyword

/*
function printManyTimes(str) {

    // Only change code below this line
  
    var sentence = str + " is cool!";
    for (var i = 0; i < str.length; i+=2) {
      console.log(sentence);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");
  */

////////3.Declare a Read-Only Variable with the const Keyword
/*
function printManyTimes(str) {

    // Only change code below this line
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");
  */

/////4.Mutate an Array Declared with const
/*
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();
console.log(s)
*/

/////5.Mutate an Array Declared with const

/*
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  */

  