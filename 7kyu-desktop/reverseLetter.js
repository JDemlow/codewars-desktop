function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-z]/gi, "");
}

console.log(reverseLetter("ultr53o?n"));

//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/solutions/javascript