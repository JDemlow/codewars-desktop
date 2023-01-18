function getDivisorsCnt(num) {
  let result = 0;
  for (let i = num; i > 0; i--) {
    if (num % i == 0) {
      result++;
    }
  }
  return result;
}

console.log(getDivisorsCnt(4));

// https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/javascript
