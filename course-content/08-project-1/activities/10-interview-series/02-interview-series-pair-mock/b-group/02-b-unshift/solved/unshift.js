//solution

//Swap every element 
function unshiftOptimal(arr, num) {
    for (var i = arr.length; i >= 0; i--) {
        // Q: What are you going to do? 
        // A: Iterate through every element of the input array starting from the end and decrementing down and starting at index of arr.length (since we have to start outside of the array - we will be adding a new variable)
        // Q: How are you going to do it? 
        // A: for loop
        // Q: Why are you going to do it? 
        // A: to examine every element
        arr[i] = arr[i - 1];
        // Q: What are you going to do? 
        // A: Assign the value of the index with the value of i-1 (shift everything over one)
        // Q: How are you going to do it? 
        // A: assignment operator and array bracket notation
        // Q: Why are you going to do it? 
        // A: to shift values over one index
    }
    arr[0] = num;
    // Q: What are you going to do? 
    // A: after the for loop has concluded assign the value of the input num to the first position / indices 0
    // Q: How are you going to do it? 
    // A: with an assignment operator and array bracket notation
    // Q: Why are you going to do it? 
    // A: to assign the input value to the first index

    return arr;
    // Q: What are you going to do? 
    // A: Return the arr after unshifting
    // Q: How are you going to do it? 
    // A: using a return statement 
    // Q: Why are you going to do it? 
    // A: the for loop has completed - we have incremented through all characters/indices of the input array and placed the new value at index 0. Return the final arr
}

//creating new array
function unshiftDuplicateArr(arr, num) {
    var newArray = [num];
    // Q: What are you going to do? 
    // A: create a new array with the input value assigned to the 0 index
    // Q: How are you going to do it? 
    // A: with an assignment operator 
    // Q: Why are you going to do it? 
    // A: to create a new array with new value at index 0

    for (var i = 0; i < arr.length; i++) {
        // Q: What are you going to do? 
        // A: Iterate through every element of the input array 
        // Q: How are you going to do it? 
        // A: using a for loop
        // Q: Why are you going to do it? 
        // A: to examine every element
        newArray.push(arr[i]);
        // Q: What are you going to do? 
        // A: For each element, push it to the newly-created array
        // Q: How are you going to do it? 
        // A: with a built-in array method `push` and the array bracket notation
        // Q: Why are you going to do it? 
        // A: to add each and every element of the input array after the added value
    }

    return newArray;
    // Q: What are you going to do? 
    // A: Return the `newArray`
    // Q: How are you going to do it? 
    // A: using a return statement 
    // Q: Why are you going to do it? 
    // A: the for loop has completed - we have incremented through all characters/indices of the input array and placed the new value at index 0. Return the final `newArray`
}


console.log(unshiftOptimal([1, 30, 13, 3], 9))
// [9,1,30,13,3]

console.log(unshiftDuplicateArr([1, 30, 13, 3], 9))
// [9,1,30,13,3]



