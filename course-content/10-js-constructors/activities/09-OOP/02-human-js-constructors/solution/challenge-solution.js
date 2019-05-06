// Create a `Human` constructor function that takes in a name 
// and creates an object with that `name` and an `age` of 0
// The `Human` object should also have a method called `birthday`
//
// `birthday` takes in a number and adds that many years to the `age` property
// and then console logs out a congratulatory message containing the name of
// the human and their new age
function Human(name){
  this.name = name;
  this.age = 0;
  this.birthday = function(years) {
    this.age += years;
    console.log(this.name + " is now " + this.age + " years old. Yay!");
  }
}

// Create a new Human object with a name of "asher" and store it inside
// the variable `asher`
var asher = new Human("Asher");

// Call on the `birthday` method of `asher` to increase their `age` by 1 
// and add a new method `talk` to `Human` by using the `prototype` property
//
// `talk` should be a function that takes in no arguments and console logs "Ma. Da."
asher.birthday(1);

Human.prototype.talk = function() {
  console.log("Ma. Da.");
}

// Call on the `talk` method of `asher`
asher.talk();

// Call on the `birthday` method of `asher` to increase their `age` by 1 
// and add a new method `walk` to `Human` by using the `prototype` property
//
// `walk` should be a function that takes in no arguments and console logs "asher walked!"
asher.birthday(1);
Human.prototype.walk = function() {
  console.log(this.name + " walked!");
}

// Call on the `walk` method of `asher`
asher.walk();

// Call on the `birthday` method of `asher` to increase their `age` by 1 
// Change the talk method of `Human` to console log "Hello, my name is " followed by their name
asher.birthday(1);


// Call on the `talk` method of `asher`
asher.talk();

// Call on the `birthday` method of `asher` to increase their `age` by 4
// Add a new property `school` to `asher` and set it to "elementary"
//
// Do not use `prototype` when you're changing the property of an instance of an object
asher.birthday(4);
asher.school = "elementary";

// Change the talk method of `asher` to console log 
// "Hello, my name is asher and I go to {school} school!"
// where {school} is the school property of `asher`
asher.talk = function() {
  console.log("Hello, my name is " + this.name + " and I go to " + this.school + " school!");
}

// Call on the `talk` method of `asher`
asher.talk();

// Create a new Human object with a name of "Yuvan" and store it inside
// the variable `yuvan`
var yuvan = new Human("Yuvan");

// Console log out the values of the `age` and `school` properties of `yuvan`
console.log("Yuvan's Age: ", yuvan.age);

yuvan.school = "Hogwarts Daycare";

console.log("Yuvan's School: ", yuvan.school);

// Call on the `walk` method of `yuvan`
yuvan.walk();

// Call on the `talk` method of `yuvan`
yuvan.talk();

// Why is the `talk` method different for `yuvan` than for `asher`?
/*
  Answer here:
  
  We didn't use the prototype property when redefining `talk` so it wasn't changed
  for every instance of the `Human` object.

*/