function getCount(str) {
  let vowels = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowels.push(i);
    }
  }
  return vowels.length;
}

console.log(getCount("pizza pie"));

//https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript
