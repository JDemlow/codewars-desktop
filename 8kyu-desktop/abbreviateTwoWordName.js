// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  let arr = name.split(" ").map((w) => w[0].toUpperCase());
  return arr[0] + "." + arr[1];
}

console.log(abbrevName("sam harris"));

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
