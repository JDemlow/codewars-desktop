function DNAStrand(dna) {
  let sequence = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna.replace(/A|T|G|C/g, function (matched) {
    return sequence[matched];
  });
}

console.log(DNAStrand("ATTGC"));

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript
