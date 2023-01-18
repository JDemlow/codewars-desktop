let arr = [];

function giveMeFive(obj) {
  for (let key in obj) {
    if (key.length === 5) arr.push(key);
    if (obj[key].length === 5) arr.push(obj[key]);
  }
  return arr;
}

console.log(giveMeFive({ Pears: "than", apple: "sweet" }));

//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/solutions
