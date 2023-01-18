function alienLanguage(str) {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    let lastChar = split[i].slice(-1);
    split[i] = split[i].toUpperCase().slice(0, -1) + lastChar.toLowerCase();
  }
  return split.join(" ");
}

console.log(alienLanguage("this is an example"));


//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/solutions/javascript