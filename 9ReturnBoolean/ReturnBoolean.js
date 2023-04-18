//9. Return a Boolean if a number is divisible by 10
//Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

let num = 100;
let isDivisible10 = (number % 10 == 0);

console.log(isDivisible10);

//Using a function

var isDiv10 = function(num = 100) {

    if (num % 10 == 0) {
          return true;  
      }
      else {
          return false;    
      }
  };

  console.log(isDiv10);




// (function() {
//     /*
//      * isEven(n)
//      * @args number n
//      * @return boolean returns whether the given number is even
//      */
//     jQuery.isEven = function(number) {
//         return number % 2 == 0;
//     };

//     /* isOdd(n)
//      * @args number n
//      * @return boolean returns whether the given number is odd
//      */
//     jQuery.isOdd = function(number) {
//         return !jQuery.isEven(number);
//     };
// })();​