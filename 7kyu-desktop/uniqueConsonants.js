function countConsonants(str) {
  let vowels = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  let arr = str.split("");
  const filtered = arr
    .filter((letter) => !vowels.includes(letter))
    .join("")
    .toUpperCase();
  return [...filtered].reduce((acc, curr) => {
    return acc.includes(curr) ? acc : acc + curr;
  }, "").length;
}

console.log(countConsonants("diAj7"));

function countConsonants(str) {
  str = str.toLowerCase();
  let uniqueConsonants = new Set();
  let consonants = "bcdfghjklmnpqrstvwxyz";

  for (let char of str) {
    if (consonants.includes(char)) {
      uniqueConsonants.add(char);
    }
  }

  return uniqueConsonants.size;
}

//https://www.codewars.com/kata/5a19226646d843de9000007d/solutions/javascript
