// function longest(s1, s2) {
//   let sorted1 = s1.split("").sort().join("");
//   let sorted2 = s2.split("").sort().join("");
//   let conCatStr = sorted1 + sorted2;
//   return conCatStr;
// }

// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// let str = "I like iron man but not super man but i like";

// let set = new Set();
// let words = str.toLowerCase().split("");
// words.forEach((e) => {
//   set.add(e);
// });

// console.log(set);

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions

function longest(s1, s2) {
  let str = new Set([...s1, ...s2]);
  return [...str].sort().join("");
}
