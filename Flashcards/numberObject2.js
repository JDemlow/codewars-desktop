// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24), 2)

function howManySmaller(arr, n) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i].toFixed(2));
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));

console.log(123);

//https://www.codewars.com/kata/57256064856584bc47000611/solutions/javascript
