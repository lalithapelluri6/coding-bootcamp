//Starting with Mongo JS

//Instructions

//Use the command line to create a classroom database.

//Insert entries for yourself and the people in your row in a students collection.

//Each document should have:

// 1. A field of name with the person's name.

// 2. A field of rownumber which will contain the row number that they are in.

// 3. A field of os which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc

// 4. A field of hobbies with an array of the hobbies the person likes to do.

   // Example:
  
  
use classroom

db.students.insert({name: 'Halina', row:3, os:'Mac', hobbies:["reading"] })

db.students.insert({name: 'Melanie', row:1, os:'mac', hobbies:['Coding', 'Music', 'Cats'] })

db.students.insert({name: 'Liam', row:1, os:'Windows', hobbies:['Coding', 'Reading', 'Hiking'] })

db.students.insert({name: 'Thor', row:3, os:'mac', hobbies:['Coding', 'Concerts', 'Sailing'] })

// Use find commands to get:

// 1. A list of everyone in your row.


db.students.find({row:3})


// 2. An entry for a single person.


db.students.find({name:'Halina'})


// 3. The entries for all the Mac users in your row.


db.students.find({row:3, os:'Mac'})


// ### Bonus

// * If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.


db.students.find({"hobbies": {$in: ["Coding"]}})

