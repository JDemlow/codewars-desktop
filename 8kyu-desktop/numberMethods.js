function colorOf(r, g, b) {
  r = parseInt(r).toString(16).padStart(2, "0");
  g = parseInt(g).toString(16).padStart(2, "0");
  b = parseInt(b).toString(16).padStart(2, "0");
  return "#" + r + g + b;
}

console.log(colorOf(1, 2, 3));

console.log(colorOf(0, 111, 0));

//https://www.codewars.com/kata/57238ceaef9008adc7000603/solutions/javascript
