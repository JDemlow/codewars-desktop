function removeEveryOther(arr) {
  let filtered = arr.filter((e, idx) => idx % 2 === 0);
  return filtered;
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/javascript
