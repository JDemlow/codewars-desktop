function openOrSenior(data) {
  let result = [];
  data.forEach((e) => {
    if (e[0] >= 55 && e[1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}

console.log(
  openOrSenior([
    [104, -2],
    [57, 9],
    [90, 12],
  ])
);

//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions
