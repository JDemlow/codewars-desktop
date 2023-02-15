function findShort(str) {
  let arr = str.split(" ");
  let sorted = arr.sort((x, y) => x.length - y.length);
  return sorted[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript
