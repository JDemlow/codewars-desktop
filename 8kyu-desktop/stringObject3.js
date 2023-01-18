// function splitAndMerge(string, separator) {
//   return string.split("").join(separator);
// }

function splitAndMerge(str, sep) {
  // split the string into words by spaces
  const words = str.split(" ");
  // split each word into separate characters and join them back with the specified separator
  const newWords = words.map((word) => word.split("").join(sep));
  // join all the resulting "words" back into a sentence with spaces
  return newWords.join(" ");
}

console.log(splitAndMerge("My name is John", "-"));

//https://www.codewars.com/kata/57280481e8118511f7000ffa/solutions/javascript
