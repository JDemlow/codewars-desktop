function cutIt(arr) {
  let result = [];
  let shortestEl = arr.sort((x, y) => x.length - y.length);
  let shortLength = shortestEl[0].length;
  for (let e of arr) {
    result.push(e.slice(0, shortLength));
  }
  return result;
}

console.log(cutIt(["codewars", "javascript", "java"]));

//https://www.codewars.com/kata/57274562c8dcebe77e001012/solutions
