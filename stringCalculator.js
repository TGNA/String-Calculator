function calculate(operation) {

  var separatedOperation = operation.split('');

  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[2]);
  var mathOperator = separatedOperation[1];

  var operators = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "*": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
  };

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return NaN;
  }else{
    return (operators[mathOperator](firstOperand, secondOperand));
  };
}



// TO DO LIST

/*
	1. "" => 0
	2. " " => 0
	3. "1+1" => 2
	4. "1/1" => 1
	5. "10-2" => 8
	6. "3*2" => 6



  
*/