function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix]);
  }
  return sum;
}

//https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/solutions/javascript
