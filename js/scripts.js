var unit = prompt("What would you like to convert your temperature to? Type 'C' for celsius or 'F' for Fahrenheit");

var tempInput = parseInt(prompt("Enter the temperature value to convert:"));

var toC = function (input) {
	return (input - 32) / 1.8;
}

var toF = function(input) {
	return input * 1.8 + 32;
}

var convert = function(convertToUnit, input){
	if(convertToUnit.toLowerCase() === 'c'){
  	return toC(input) + " degrees Celsius";
  }
  else if(convertToUnit.toLowerCase() === 'f'){
  	return toF(input) + " degrees Fahrenheit";
  }
  else {
  	return "Try again, " + convertToUnit + " is not accepted."
  }
}

alert(convert(unit, tempInput));
