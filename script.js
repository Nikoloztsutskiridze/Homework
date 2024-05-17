//Exercie 1
function exercise(a, b) {
  if (a == b) {
    return "Equal";
  } else {
    return "Not equal";
  }
}
console.log(exercise(4, 8));
console.log(exercise(8, 8));

//exercise 2
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
console.log(fahrenheitToCelsius(52));

// exercise 3
function calculate(a, operation, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  }
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        return false;
      }
      result = a / b;
      break;
  }
  return result;
}

console.log(calculate(9, "+", 14));
