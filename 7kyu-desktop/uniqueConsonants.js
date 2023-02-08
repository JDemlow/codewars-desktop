function countConsonants(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  const filtered = arr.filter((letter) => !letter.includes(vowels[0]));
  return filtered;
}

console.log(countConsonants("dad"));
