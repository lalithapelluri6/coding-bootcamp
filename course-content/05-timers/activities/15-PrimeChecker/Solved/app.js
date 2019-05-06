// Prime Checker: SOLUTION
// =======================

// Declare our primeCheck function
function primeCheck(number) {
  // Loop to check to see if a number has divisors other than one and itself.
  // Note: Loops from two to one less than the number we're checking.
  for (var i = 2; i < number; i++) {

    // If the number is evenly divisible
    // by a number between two and one less than itself,
    // then it is not prime.
    if (number % i === 0) {

      // So return false.
      console.log(number);
      return false;
    }
  }

  // A prime number has to be greater than one,
  // even if it has a divisor other than one and itself.
  return number > 1;
}



console.log(primeCheck(2)); //false
console.log(primeCheck(11)); // true
console.log(primeCheck(67)); // true
console.log(primeCheck(68)); //false


// var arrayOne = [8,6,7,5,3,0,9];//false
// var arrayTwo = [6,0,8,13,6];//true
// var arrayThree = ["kittens","cats","kitten","kittens"]

// function areDupsHash(array){
//   var tracker = {};
//   for(var i =0;i < array.length; i++){
//     if (tracker[array[i]]){
//       console.log("we found a duplicate!")
//       return true
//     }else{
//       tracker[array[i]] = "hello";
//     }
//   }
//   console.log("No dups here!")
//   return false
// };

// console.log(areDupsHash(arrayOne));
// console.log(areDupsHash(arrayTwo));











