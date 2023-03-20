function howManySmaller(arr, n) {
  for (num of arr) {
    console.log(num.toFixed(2));
  }
}

console.log(howManySmaller([1.234, 1.235, 1.228]));

// Solution

function howManySmaller(arr, n) {
  total = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) total++;
  }

  return total;
}

//https://www.codewars.com/kata/57256064856584bc47000611/solutions/javascript
