function calculate(operation) {

  if(operation.indexOf("+") > -1){
    return add(operation);
  }else if(operation.indexOf("-") > -1){
    return subtract(operation);
  }else if(operation.indexOf("*") > -1){
    return multiply(operation);
  }else if (operation.indexOf("/") > -1){
    return divide(operation);
  }else{
    return NaN;
  }

}

function add (operation) {
  var separatedOperation = operation.split('+');
  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[1]);
  function name(a, b) { return (a + b); }
  return name(firstOperand, secondOperand);
}

function subtract (operation) {
  var separatedOperation = operation.split('-');
  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[1]);
  function name(a, b) { return (a - b); }
  return name(firstOperand, secondOperand);
}

function multiply (operation) {
  var separatedOperation = operation.split('*');
  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[1]);
  function name(a, b) { return (a * b); }
  return name(firstOperand, secondOperand);
}

function divide (operation) {
  var separatedOperation = operation.split('/');
  var firstOperand = parseInt(separatedOperation[0]);
  var secondOperand = parseInt(separatedOperation[1]);
  function name(a, b) { return (a / b); }
  return name(firstOperand, secondOperand);
}