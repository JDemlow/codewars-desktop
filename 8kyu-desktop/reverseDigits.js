function digitize(num) {
  let myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  return myArr.reverse();
}

console.log(digitize(35231));

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript
