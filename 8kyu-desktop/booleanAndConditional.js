let a = 1,
  b = 2,
  c = 1;
function trueOrFalse(val) {
  if (val == false || val === null || val === undefined) return "false";
  else return "true";
}

console.log(trueOrFalse(null));

//https://www.codewars.com/kata/571f832f07363d295d001ba8/solutions/javascript
