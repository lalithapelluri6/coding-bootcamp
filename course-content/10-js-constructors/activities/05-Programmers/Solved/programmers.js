// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();



//-----------------------------


//reuse it


function Animal(name, age) {
  this.name = name;
  this.age = age;
}

var printinfo = function() {
  console.log(this.name + "...Yeah...I'm amazing...👻");
};

Programmer.prototype.printAwesome = printinfo;

Animal.prototype.printAwesome = printinfo;

var farley = new Animal("Farley", 5);

console.log("-----")

farley.printAwesome();

console.log("-----")

bob.printAwesome();


