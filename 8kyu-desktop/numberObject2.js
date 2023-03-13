function howManySmaller(arr, n) {
  for (num of arr) {
    console.log(num.toFixed(2));
  }
}

console.log(howManySmaller([1.234, 1.235, 1.228]));

// Solution

function howManySmaller(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i].toFixed(2));
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

//https://www.codewars.com/kata/57256064856584bc47000611/solutions/javascript
