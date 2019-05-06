
//solution

//brute force  
//sort the array and then check adjacent elements
function countPairsBruteForce(arr) {
  arr = arr.sort(function (a, b) { return a - b });
  // Q: What are you going to do? 
  // A: assign the value of the input array sorted to the variable `arr`
  // Q: How are you going to do it? 
  // A: using an assignment operator, and the arr sort function
  // Q: Why are you going to do it? 
  // A: to ensure that we have a sorted array
  var count = 0;
  // Q: What are you going to do? 
  // A: Instantiate a variable `count` and assign it an initial value of 0.
  // Q: How are you going to do it? 
  // A: with an assignment operator
  // Q: Why are you going to do it? 
  // A: to start an initial count; to start counting how many times we see a value
  for (var i = 0; i < arr.length - 1; i++) {
    // Q: What are you going to do? 
    // A: Iterate through every element of the input array 
    // Q: How are you going to do it? 
    // A: with a for loop
    // Q: Why are you going to do it? 
    // A: to examine every element 
    if (arr[i] === arr[i + 1]) {
      // Q: What are you going to do? 
      // A: check to see if proximate values are of equal value
      // Q: How are you going to do it? 
      // A: conditional check, comparison operator, and array bracket notation
      // Q: Why are you going to do it? 
      // A: To see how many times we see a value in a sorted array
      count++;
      i++;
      // Q: What are you going to do? 
      // A: increment count and increment `i`, index - if we have seen some matching then skip to the next value pairs.
      // Q: How are you going to do it? 
      // A: ++ operator
      // Q: Why are you going to do it? 
      // A: to skip to the next pair. 
    }
  }
  return count
  // Q: What are you going to do? 
  // A: Return count value
  // Q: How are you going to do it? 
  // A: return statement
  // Q: Why are you going to do it? 
  // A: we have iterated through the entirety of the array and counted all pairs - return final value
}

//optimal
//use object to keep a track of visited elements
//O(n)
var test = [1, 2, 1, 3, 2, 4, 2, 3, 3, 1] // 3

function countPairs(arr) {
  var obj = {};
  // Q: What are you going to do? 
  // A: Instantiating an empty object 
  // Q: How are you going to do it? 
  // A: assignment operator and curly braces 
  // Q: Why are you going to do it? 
  // A: to create an object to count the occurrences each element appears
  var pairs = 0;
  // Q: What are you going to do? 
  // A: create a variable `pairs` with an initial value of 0.
  // Q: How are you going to do it? 
  // A: assignment operator
  // Q: Why are you going to do it? 
  // A: to count the number of pairs we have counted
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      // Q: What are you going to do? 
      // A: Iterate through every element of the input array 
      // Q: How are you going to do it? 
      // A: with a for loop
      // Q: Why are you going to do it? 
      // A: to examine every element and check to see if arr[i] exists as a key on 'obj'
      obj[arr[i]] = 0;
      // obj[arr[i]] = false;
      // Q: What are you going to do? 
      // A: if arr[i] exists as a key on the `obj` with a truthy value, then set the key of arr[i] on `obj` to have an associated value of `0` (falsey).
      // Q: How are you going to do it? 
      // A: With an assignment operator array and bracket notation
      // Q: Why are you going to do it? 
      // A: to assign a falsey value to the key of arr[i] - this will allow us to toggle the times we see a pair
      pairs++;
      // Q: What are you going to do? 
      // A: Increment the pair count
      // Q: How are you going to do it? 
      // A: with the ++ operator
      // Q: Why are you going to do it? 
      // A: to increment the pair count
    } else {
      obj[arr[i]] = true;
      // Q: What are you going to do? 
      // A: if a look up on the obj for the key of arr[i] returns false, then set the associated value to `true`.
      // Q: How are you going to do it? 
      // A: with an assignment operator array and bracket notation
      // Q: Why are you going to do it? 
      // A: to assign a truthy value to the key of arr[i] - this will allow us to toggle the times we see a pair
    }
  }
  return pairs
  // Q: What are you going to do? 
  // A: return `pairs`
  // Q: How are you going to do it? 
  // A: return statement
  // Q: Why are you going to do it?  
  // A: We have iterated through all values in the input array - we will not return the number of pairs counted
}


//console.log(countPairs([1,2,1,3,2,4,2,3,3,1,3,3]))
console.log('countPairsBruteForce: ')
console.log(countPairsBruteForce([1, 2, 1, 3, 2, 4, 2, 3, 3, 1, 3, 3]))

function countPairsMod(arr) {
  var pairTracker = {};
  // Q: What are you going to do? 
  // A: Instantiate an empty object 
  // Q: How are you going to do it? 
  // A: with an assignment operator and curly braces 
  // Q: Why are you going to do it? 
  // A: to create an object to count the occurrences each element appears
  var pairCount = 0;
  // Q: What are you going to do? 
  // A: Create a variable `pairCount` with an initial value of 0.
  // Q: How are you going to do it? 
  // A: assignment operator
  // Q: Why are you going to do it? 
  // A: to count the number of pairs we have counted
  for (var i = 0; i < arr.length; i++) {
    if (pairTracker[arr[i]]) {
      // Q: What are you going to do? 
      // A: Iterate through every element of the input array 
      // Q: How are you going to do it? 
      // A: with a for loop
      // Q: Why are you going to do it? 
      // A: to examine every element and check to see if arr[i] exists as a key on our pairTracker object
      pairTracker[arr[i]] += 1;
      // Q: What are you going to do? 
      // A: if it arr[i] does exists on the pairTracker Object then increment the count
      // Q: How are you going to do it? 
      // A: with a += operator
      // Q: Why are you going to do it? 
      // A: to increment the count to reflect the number of occurrences we have seen that element
    }
    else {
      pairTracker[arr[i]] = 1;
      // Q: What are you going to do? 
      // A: if arr[i] does not exists on the `pairTracker` object then assign it as a key with an initial count value of `1`.
      // Q: How are you going to do it? 
      // A: Using an 'else' conditional to add the current array value at index 'i' as a key to pairTracker in bracket notation.
      // Q: Why are you going to do it? 
      // A: to begin the count for that element
    }

  }
  //note - we have now iterated through the entire input array
  var keysArray = Object.keys(pairTracker)
  // Q: What are you going to do? 
  // A: assign the value of an array of all keys to the variable `keysArray`
  // Q: How are you going to do it? 
  // A: with an assignment operator and the Object.Keys Method - The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
  // Q: Why are you going to do it? 
  // A: To get an array of all keys in the pairTracker Object
  for (var i = 0; i < keysArray.length; i++) {
    // Q: What are you going to do? 
    // A: Iterate through every element of the keysArray
    // Q: How are you going to do it? 
    // A: with a for loop
    // Q: Why are you going to do it? 
    // A: to examine every element
    var countVal = pairTracker[keysArray[i]];
    if (countVal % 2 !== 0) {
      // Q: What are you going to do? 
      // A: check to see if the value of associated with the key of keysArray[i] is odd
      // Q: How are you going to do it? 
      // A: modulo operator, array and object bracket notation, conditional `if`, and comparison operator 
      // Q: Why are you going to do it? 
      // A: see if the count is odd
      countVal -= 1
      // Q: What are you going to do? 
      // A: If odd, decrement by 1
      // Q: How are you going to do it? 
      // A: with the -= operator
      // Q: Why are you going to do it? 
      // A: to make the count even to get an accurate count of pairs - we do not care about odd counts

    }

    pairCount += countVal / 2
    // Q: What are you going to do? 
    // A: Divide the number of occurrences by 2 - to get the number of pairs
    // Q: How are you going to do it? 
    // A: += operator and `/` operator
    // Q: Why are you going to do it? 
    // A: to increment the pairCount by the number of pairs
  }
  return pairCount;
  // Q: What are you going to do? 
  // A: Return the pairCount
  // Q: How are you going to do it? 
  // A: return statement
  // Q: Why are you going to do it? 
  // A: to return the final `pairCount`
}
console.log('countPairsMod: ')
console.log(countPairsMod([1, 2, 1, 3, 2, 4, 2, 3, 3, 1, 3, 3]))
