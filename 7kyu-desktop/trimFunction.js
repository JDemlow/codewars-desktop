// function trim(str, size) {
//   let arr = str.split("");
//   let sliced = arr.slice(0, size);
//   return sliced;
// }

function trim(str, size) {
  if (str.length <= size) {
    return str;
  } else if (size <= 3) {
    return str.slice(0, size) + "...";
  } else {
    return str.slice(0, size - 3) + "...";
  }
}

console.log(trim("Creating kata is fun", 14));

//https://www.codewars.com/kata/563fb342f47611dae800003c/solutions/javascript
