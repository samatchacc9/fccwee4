//1.Use Destructuring Assignment to Extract Values from Objects
/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today);
*/

//2.Use Destructuring Assignment to Assign Variables from Objects
/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

*/

//3.Use Destructuring Assignment to Assign Variables from Nested Objects
/*
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

  */
//4. Use Destructuring Assignment to Assign Variables from Arrays
/*
let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];
*/

//5. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr); 
console.log(source);
*/
//6.Use Destructuring Assignment to Pass an Object as a Function's Parameters
/*
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  
  const half = ({ max, min }) => (max + min) / 2.0;

  */

//----------------basic data structure

//1.Copy an Array with the Spread Operator
/*
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
  newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  */

//2. Combine Arrays with the Spread OperatorPassed

/*
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment,"is", "fun"]
    return sentence;
  }
  
  
  
  console.log(spreadOut());
  */
