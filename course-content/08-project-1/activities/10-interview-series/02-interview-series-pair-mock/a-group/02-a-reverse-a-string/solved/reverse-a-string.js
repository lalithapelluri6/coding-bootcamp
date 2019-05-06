//solution

function reverse(str) {
  var rtnStr = '';
  // Q: What are you going to do? 
  // A: Instantiate an empty string

  // Q: How are you going to do it? 
  // A: With an assignment operator

  // Q: Why are you going to do it? 
  // A: To create a holding container for the solution - the reversed string

  for (var i = str.length - 1; i >= 0; i--) {
    // Q: What are you going to do? 
    // A: Iterate through the input str from the end to the start

    // Q: How are you going to do it? 
    // A: for loop with 'i' starting at the end index

    // Q: Why are you going to do it? 
    // A: To examine every element

    rtnStr += str[i];
    // Q: What are you going to do? 
    // A: add / concatenate each element to rtnStr

    // Q: How are you going to do it? 
    // A: += operator

    // Q: Why are you going to do it? 
    // A: To add each element from the end to start (in reverse)
  }
  return rtnStr;
  // Q: What are you going to do? 
  // A: Return the final rtnStr variable

  // Q: How are you going to do it? 
  // A: With our explicit return statement

  // Q: Why are you going to do it? 
  // A: To return the final solution str with the input string in reverse.
};
var str = "apple"
console.log(reverse(str)); // "elppa"


// OR

function reverse(str) {
  var rtnStr = [];
  // Q: What are you going to do? 
  // A: Instantiate an array

  // Q: How are you going to do it? 
  // A: With assignment operator

  // Q: Why are you going to do it? 
  // A: To create a holding container for the final solution - the reversed string

  if (!str || typeof str != 'string' || str.length < 2) return str;
  // Q: What are you going to do? 
  // A: Check for edge cases: is the input a string? Is it less than two characters? 

  // Q: How are you going to do it? 
  // A: Conditional statement, using the logic gates: OR ||, comparison operator, less than operator. Then use a return statement

  // Q: Why are you going to do it? 
  // A: To check if the input is a string, longer than 2 characters - if it is not the return out of the functions / just return the string

  for (var i = str.length - 1; i >= 0; i--) {
    // Q: What are you going to do? 
    // A: Iterate through the input str from the end characters to the beginning characters

    // Q: How are you going to do it? 
    // A: for loop with 'i' starting at the end index

    // Q: Why are you going to do it? 
    // A: To examine every element

    rtnStr.push(str[i]);
    // Q: What are you going to do? 
    // A: Add / push each element to rtnStr

    // Q: How are you going to do it? 
    // A: With the Array built in method, push

    // Q: Why are you going to do it? 
    // A: To create rtnStr as an array containing characters from str in reverse.
  }
  return rtnStr.join('');
  // Q: What are you going to do? 
  // A: Return the final string in reverse

  // Q: How are you going to do it? 
  // A: Using the Array built in method, Join which takes in an argument of what to join on - join on nothing
  
  // Q: Why are you going to do it? 
  // A: To join together all elements of the rtnStrArr
}

var str = "apple"
console.log(reverse(str)); // "elppa"

//Bonus
function reverseInPlace(str) {
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
  // Q: What are you going to do? 
  // A: Separate the string of words and reverse each word in place:
  // Return the output of the following built in methods (method chaining) - .split(' ').reverse().join(' ').split('').reverse().join('')

  // Q: How are you going to do it? 
  // A: Using the .split(' ').reverse().join(' ').split('').reverse().join('')

  // Q: Why are you going to do it? 
  // A: To split the string into an array of multiple elements, reverse the order of those elements, join them back into a string such that we can split them again into letters that we can reverse. 
  // to .split(' ').reverse().join(' ').split('').reverse().join('') the input string
}

console.log(reverse('doggie')); // "eiggod"
console.log(reverseInPlace('I am the good boy')); // "I ma eht doog yob"

