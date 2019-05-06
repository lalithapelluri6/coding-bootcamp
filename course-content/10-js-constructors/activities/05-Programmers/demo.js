

var Arrray = function(){
	this.arr = [];
	this.forEvery = function (cb) {
		cb(this.arr)
	};
	this.push = function(elm){
		this.arr[this.arr.length] = elm
	};
	....
}

var arr = new Array;

arr.push("value");

