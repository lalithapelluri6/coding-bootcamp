// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder and inquirer NPM packages
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");
var weather = require("weather-js");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "5hHNxmQcnPeJmRUWqxbqnX6ZadVQIi6W"
};

var geocoder = NodeGeocoder(options);


// Prompt the user to provide location information.
inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  // console.log(location.userInput);

  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.userInput, function(err, data) {

    console.log(JSON.stringify(data, null, 2));
    inquirer.prompt([

  {
    type: "confirm",
    name: "weatherConfirm",
    message: "would you like to see the weather for " + location.userInput + " ?"
  }

// After the prompt, store the user's response in a variable called location.
	]).then(function(weatherResponse) {
		console.log(weatherResponse) 
			if(weatherResponse.weatherConfirm){

			var address = data[0];

			  // Depending on what information is available for an address, build formatted search
			  var search = "";

			  if (address.city) {
			    search += address.city;
			  }

			  if (address.stateCode) {
			    search += ", " + address.stateCode;
			  }

			  if (address.zipcode) {
			    search += " " + address.zipcode;
			  }

			  if (address.countryCode) {
			    search += " " + address.countryCode;
			  }

			weather.find({ search: search, degreeType: "F" }, function(err, result) {
		   		if (err) {
			      console.log("\r\n\r\n\r\n");

			      console.log("Sorry we don't have enough data on that location! Try somewhere else.");

			      console.log("\r\n\r\n\r\n");

			      return;
			    }

				// console.log(result)
				console.log("\r\n\r\n\r\n");

			    console.log("Weather Forecast for: " + search);

			    console.log("Current Temperature: " + result[0].current.temperature + "° F");

			    console.log("Sky: " + result[0].current.skytext);

			    console.log(
			      "Tomorrow's Forecast: Low of " +
			        result[0].forecast[1].low +
			        "° F | High of " +
			        result[0].forecast[1].high +
			        "° F"
			    );

			    console.log("\r\n\r\n\r\n");
		    
		  	});
			//
		}

	});
 });
//end 
});
