String.prototype.toAlternatingCase = function () {
  new_str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    } else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
};

console.log("hello world".toAlternatingCase);

//https://www.codewars.com/kata/56efc695740d30f963000557/solutions
