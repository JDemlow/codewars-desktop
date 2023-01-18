function reverseWords(str) {
  return str
    .split(/([^\d\.])/)
    .reverse()
    .join("");
}

console.log(reverseWords("double  spaced  words"));

//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions
