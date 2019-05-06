// variables we are going to need
var number1 = [];
var number2 = [];
var result;
var operator;
var afterEqual = false;


// event listener on the numbers
$(".number").on("click", function() {
    var value = $(this).val();

    if (!afterEqual) {
        if (!operator) {
            number1.push(value);
            $("#first-number").text(number1.join(""));
        } else {
            number2.push(value);
            $("#second-number").text(number2.join(""));
        }
    };
});

// event listener on the operator
$(".operator").on("click", function() {
    var value = $(this).val();
    
    if (value === "plus") {
        operator = "+"
        $("#operator").text(operator);
    } else if (value === "minus") {
        operator = "-"
        $("#operator").text(operator);
    } else if (value === "divide") {
        operator = "/"
        $("#operator").text(operator);
    } else if (value === "times"){
        operator = "*"
        $("#operator").text(operator);
    } else if (value === "power"){
        operator = "^"
        $("#operator").text(operator);
    };
});

// event listener on the "="
$(".equal").on("click", function() {
    var num1 = parseInt(number1.join(""));
    var num2 = parseInt(number2.join(""));
    afterEqual = true;

    if (operator === "+") {
        result = num1 + num2;
        $("#result").text(result);
        console.log(result);
    } else if (operator === "-") {
        result = num1 - num2;
        $("#result").text(result);
    } else if (operator === "/") {
        result = num1 / num2;
        $("#result").text(result);
    } else if (operator === "*") {
        result = num1 * num2;
        $("#result").text(result);
    } else if (operator === "^") {
        result = num1 ** num2;
        $("#result").text(result); 
    }
});

// event listener on "clear"
$(".clear").on("click", function () {
    number1 = [];
    number2 = [];
    operator = "";
    result = "";
    $("#first-number").empty();
    $("#second-number").empty();
    $("#operator").empty();
    $("#result").empty();
    afterEqual = false;

});


