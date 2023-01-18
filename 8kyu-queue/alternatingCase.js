String.prototype.toAlternatingCase = function () {
  let str = "";
  if (this.toLowerCase() === this) {
    return "The string is lowercase";
  } else {
    return "The string is not lowercase";
  }
  return str;
};

console.log("hello world".toAlternatingCase);

//https://www.codewars.com/kata/56efc695740d30f963000557/solutions
