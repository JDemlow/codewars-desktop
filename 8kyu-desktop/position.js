function position(letter){
 let alphabet = "abcdefghijklmnopqrstuvwxyz"
 let alphaSplit = alphabet.split('').findIndex((el) => letter === el)
 return `Position of alphabet: ${alphaSplit + 1}`
}

console.log(position("c"))

// https://www.codewars.com/kata/5808e2006b65bff35500008f/solutions/javascript