/////1. While
/*
var myArray = [];
var i = 5;
while (i >= 0){
  myArray.push(i);
  i--;
}
*/

/////2. Iterate with JavaScript For Loops
/*
// Setup
var myArray = [];

// Only change code below this line
for(let i = 1; i <= 5; i++) {
  myArray.push(i);
}
*/

/////3. Iterate Odd Numbers With a For Loop

/*
// Setup
var myArray = [];
for (let i = 1; i <= 9; i +=2){
  myArray.push(i);
}
// Only change code below this line
*/

/////4. Count Backwards With a For Loop

/*
// Setup
var myArray = [];
for(let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
// Only change code below this line
*/

/////5. Iterate Through an Array with a For Loop

/*
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = myArr.length - 1; i >= 0; i--) {
  total += myArr[i];
}
// Only change code below this line
*/

/////6. Nesting For Loops
/*

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for(let i=0; i < arr.length; i++) {
      for(let j=0; j < arr[i].length; j++){
        product *= arr[i][j]
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  */

///// 7. Iterate with JavaScript Do...While Loops
/*
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
/*
do{
  myArray.push(i);
  i++;
}while (i < 10) ;
*/

//8. Replace Loops using Recursion
/*
function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }

*/
