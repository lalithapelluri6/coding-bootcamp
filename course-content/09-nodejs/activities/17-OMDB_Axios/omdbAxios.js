// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy")
.then(
  function(response) {
    console.log("The movie's rating is: " , response);
  }
);




