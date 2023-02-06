function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-z]/gi, "");
}

console.log(reverseLetter("ultr53o?n"));
