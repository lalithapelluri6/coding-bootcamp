var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up");

// console.log(data); // Data is undefined. Why?
setTimeout(function(){
	console.log(data);
}, 5000);