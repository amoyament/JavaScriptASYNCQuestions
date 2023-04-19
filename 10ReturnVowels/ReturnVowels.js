//10. Return the number of vowels in a string
//Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.


let str = 'Hello, Aubrey, do you know how many vowels are in this sentence?';
// const vowels = /[aeiou]/gi; 
// const found = str.match(vowels);

// // //Logs what vowels are found in what order but does not give the number of...
// console.log(found);//Output: Will list the vowels found in order of when they were found

//With a function we can count the number
function vowelCount(str) {
    var vowelsF = str.match(/[aeiou]/gi);//g tells the code to keep going after finding the first occurance of a vowel. i tells the code to look for upper and lower case instances of aeiou

    // If no vowels are found value is null and return with result
    if (vowelsF == null) { //If no vowels are found, value will be null and user will be notified
      return 'Sorry, no vowels were found.'; 
      // The .length method will return the number of vowels found, not just log their occurance like the previous code
    } else if (vowelsF.length > 0) { //If the amount of vowels (.length) is greater than 0, the code will return a meassage stating how many vowels were found.
        return 'There were ' + vowelsF.length + ' vowels found in this sentence!';
    }
  }

console.log(vowelCount(str));// str can be relpaced with any string and the function still works.
//Output: There were 20 vowels found in this sentence!

  