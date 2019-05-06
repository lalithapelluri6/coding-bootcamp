var orm = require("./config/orm.js");

var myCallBack = function(arg){
	console.log(arg)
}
// Call orm method, passing in the anonymous function(with "res") as the callback.
orm.selectWhere("parties", "party_type", "grown-up", function(result) {
  var data = result;
  console.log(data);
});


// Call orm method, passing in the anonymous function(with "res") as the callback.
// orm.selectWhere("parties", "party_type", "grown-up", myCallBack);
