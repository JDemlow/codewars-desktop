function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }

  return [odd, even];
}

console.log(pickIt([10, 20, 30, 33]));

//https://www.codewars.com/kata/5721a78c283129e416000999/solutions/javascript
