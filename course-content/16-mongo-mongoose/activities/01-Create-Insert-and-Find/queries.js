// Query 1 - Creating dbs, inserting data and finding data
// Start up a new database by switching to it.
// NOTE: The db does not exist until you create a collection:


use lessondb


// Show the current db by running db:

db


// Insert data into the lessondb database with this command.

// NOTE: This will create the collection automatically.

// ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:


db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]})


db.places.insert({"continent": "North America", "country":"Belize", "majorcities": ["Belize City", "San Ignacio", "Orange Walk"]})
db.places.insert({"continent": "North America", "country":"Mexico", "majorcities": ["Mexico City", "Guadalajara", "Puebla City"]})


db.places.insert({"continent": "South America", "country":"Argentina", "majorcities": ["Buenos Aires", "La Plata", "Mendoza"]})


// Observe where the data was entered in the MongoDB instance (in mongod).

// Find all data in a Collection with `db.[COLLECTION_NAME].find()`.

// NOTE: the MongoDB _id was created automatically.

// This id is specific for each doc in the collection:


db.places.find()


// Adding .pretty() makes the data more readable:


db.places.find().pretty()


// Find specific data by matching a field:


db.places.find({"continent": "Africa"})
db.places.find({"country": "Morocco"})

db.places.find({"majorcities": "Belize City"})

db.placesiWantToGoToThere.find({"continent": "North America"}).pretty()

// Find specific data by matching an _id:


db.places.find({_id:[COPY AN OBJECTID FROM THE PREVIOUS FIND RESULTS]})


// Example: `db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")})`
