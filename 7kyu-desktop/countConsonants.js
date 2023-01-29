function consonantCount(str) {
  const vowels = str
    .split("")
    .filter((char) => !"aeiouAEIOU!@#$%^&*()1234567890_ ".includes(char));
  return vowels.length;
}
console.log(consonantCount("helLo world"));

//https://www.codewars.com/kata/564e7fc20f0b53eb02000106/solutions/javascript
