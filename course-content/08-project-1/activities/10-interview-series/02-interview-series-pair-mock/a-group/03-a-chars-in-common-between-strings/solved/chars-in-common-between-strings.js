
// Solution

function common(str1, str2) {
  var obj = {};
  // Q: What are you going to do? 
  // A: Instantiate an empty object

  // Q: How are you going to do it? 
  // A: with an assignment operator

  // Q: Why are you going to do it? 
  // A: to create a holding container for values we have seen before with unique values

  var commonStr = '';
  // Q: What are you going to do? 
  // A: Instantiate an empty string

  // Q: How are you going to do it? 
  // A: with an assignment operator

  // Q: Why are you going to do it? 
  // A: to create a string that will consist of characters that are common between str1 and str2

  for (var i = 0; i < str1.length; i++) {
    // Q: What are you going to do? 
    // A: Iterate through the input string (str1)

    // Q: How are you going to do it? 
    // A: with a for loop

    // Q: Why are you going to do it? 
    // A: to examine every element of string 1 (str1)

    obj[str1[i]] = true;
    // Q: What are you going to do? 
    // A: set the value of the element at index 'i' of str1 with a value of true

    // Q: How are you going to do it? 
    // A: with object bracket notation and assignment operator

    // Q: Why are you going to do it? 
    // A: to set a key value pair on object to track values we have seen
  }
  for (var i = 0; i < str2.length; i++) {
    // Q: What are you going to do? 
    // A: Iterate through the input array

    // Q: How are you going to do it? 
    // A: with a nested for loop

    // Q: Why are you going to do it? 
    // A: to examine every element of string 2 (str2)

    if (obj[str2[i]]) {
      // Q: What are you going to do? 
      // A: check to see if we have seen this element on str1

      // Q: How are you going to do it? 
      // A: with object bracket notation and a conditional

      // Q: Why are you going to do it? 
      // A: to see if we have seen that element / value on str1

      commonStr += str2[i];
      // Q: What are you going to do? 
      // A: Add / concatenate each element to commonStr

      // Q: How are you going to do it? 
      // A: with a += operator

      // Q: Why are you going to do it? 
      // A: to add each element from the str2 to the commonStr - these are the elements we have had in common

      obj[str2[i]] = false;
      // Q: What are you going to do? 
      // A: set the value of the element at index 'i' of str2 with a value of false 

      // Q: How are you going to do it? 
      // A: With object bracket notation and assignment operator

      // Q: Why are you going to do it? 
      // A: to toggle that we have that element in common in case we see it again - to track repeated elements
      //example:
      //var str1 = aabc
      //var str2 = baa
      //returns => aab  
    }
  }
  return commonStr;
  // Q: What are you going to do? 
  // A: return the final commonStr variable

  // Q: How are you going to do it? 
  // A: with our explicit return statement

  // Q: Why are you going to do it? 
  // A: to return the final solution string consisting of characters that are common between str1 and str2
}

console.log(common('aabbaa', 'abc'))
console.log(common('','abc'))

