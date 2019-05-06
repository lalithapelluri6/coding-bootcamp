var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "sanFrancisco"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readColleges();
});

function readColleges() {
  connection.query("SELECT name FROM colleges", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    // console.log(res);
    console.log("************");
    for(var i=0; i< res.length;i++){
      console.log("Univeristy Name: " + res[i].name)
    }
    console.log("************");
    connection.end();
  });
}
