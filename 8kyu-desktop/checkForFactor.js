function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForFactor(6, 5));

//https://www.codewars.com/kata/55cbc3586671f6aa070000fb/solutions/javascript
