function firstToLast(str, c) {
  let firstIndex = str.indexOf(c);
  let lastIndex = str.lastIndexOf(c);
  if (str.includes(c)) {
    return lastIndex - firstIndex;
  } else {
    return -1;
  }
}

console.log(firstToLast("ababc", "a"));

//https://www.codewars.com/kata/57277a31e5e51450a4000010/solutions/javascript
