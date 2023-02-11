function sumOfMinimums(nestedList) {
  let sum = 0;
  for (let i = 0; i < nestedList.length; i++) {
    let row = nestedList[i];
    let minValue = Math.min(...row);
    sum += minValue;
  }
  return sum;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);

//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/solutions/javascript
