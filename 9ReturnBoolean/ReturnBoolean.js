//9. Return a Boolean if a number is divisible by 10
//Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program should return a “false” answer.

//Define our number. Use let in case we want to change this value later
let num = 101;
let isDivisible10 = (num % 10 == 0); //The num % 10 == 0 is checking to make sure that when num is divided by 10, the remainder is 0.

console.log(isDivisible10); //Output: False

//Using a function:
let num1 = 100;
 
//create function
function divisible(number) {
    //use a conditional to return true or false
    if (number % 10 == 0) {
        return true;
      } else {
        return false;
      }
};

//call function with console.log to display in console
console.log(divisible(num1)); //Output: True