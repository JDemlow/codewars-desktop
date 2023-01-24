function evalObject(value) {
  let result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

console.log(evalObject({ a: 1, b: 1, operation: "/" }));

//https://www.codewars.com/kata/55c933c115a8c426ac000082/solutions/javascript
