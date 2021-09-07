//1. Replace Loops using Recursion
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

//1.Create a Module ScriptPassed

/*
<html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
*/

//2. Use export to Share a Code Block
/*
export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  export const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  */

//3.Reuse JavaScript Code Using import

/*

import {uppercaseString, lowercaseString} from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
*/

//4.Use * to Import Everything from a File
/*
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

*/

//5.Create an Export Fallback with export default
/*
export default function subtract(x, y) {
    return x - y;
  }
  */

//6.Import a Default Export

/*
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

*/
