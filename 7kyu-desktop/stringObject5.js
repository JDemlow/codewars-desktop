function decode(str) {
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++)
    chars[i] = String.fromCharCode(chars[i].charCodeAt() - 1);
  return chars.join("");
}

function encode(str) {
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++)
    chars[i] = String.fromCharCode(chars[i].charCodeAt() + 1);
  return chars.join("");
}

let pass = "abcde";
pass = encode(pass);
console.log(encode(pass));
console.log(decode("abcde"));

// Challenge

function topSecret(file) {
  let chars = file.split("");
  for (let i = 0; i < chars.length; i++)
    chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
  return chars.join("");
}

console.log(topSecret("Pb qdph lv Mrkq"));
console.log(topSecret("Khoor Zruog!"));
