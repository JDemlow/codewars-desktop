function filter_list(list) {
  let filtered = list.filter((el) => typeof el === "number");
  return filtered;
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
