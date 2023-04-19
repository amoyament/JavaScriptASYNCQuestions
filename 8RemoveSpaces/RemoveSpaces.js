// 8. Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes.

// Define my string. Use let incase we want to change the value of this string.
let myStrng = 'Hello, welcome to my RemoveSpaces challenge!';

//Define removeSpaces and use replaceAll to take out spaces (To remove every instance of the letter a, you could use .replaceAll('a', '') or to replace all instances of the letter a with the letter b, you could use replaceAll('a', 'b'))
const removeSpaces = myStrng.replaceAll(' ', '');

console.log(removeSpaces);//Output: Hello,welcometomyRemoveSpaceschallenge!


// Or this can be done without creating the removeSpaces variable and implementing the methon inside the console.log

console.log(myStrng.replaceAll(' ', ''));//Output: Hello,welcometomyRemoveSpaceschallenge!

//Or this can be done with a function
let funStrng = 'Hello, welcome to my RemoveSpaces challenge using a function!'

function rmvSpaces(funStrng) {
    return funStrng.replaceAll(' ', '');
  }

//call function with console.log to display in console
console.log(rmvSpaces(funStrng));//Output: Hello,welcometomyRemoveSpaceschallengeusingafunction!'
