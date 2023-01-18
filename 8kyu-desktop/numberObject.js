function whatNumberIsIt(num) {
  if (num == Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (num == Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (num == Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (num == Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (Number.isNaN(num)) {
    return "Input number is Number.NaN";
  } else {
    return `Input number is ${num}`;
  }
}

console.log(whatNumberIsIt(100));

//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/solutions/javascript
