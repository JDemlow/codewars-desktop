function XO(str) {
  let arr = [];
  let split = str.split("");
  let filtered = split.filter((char) => {
    char.includes("x") ? arr.push(char) : false;
  });
  console.log(filtered);
}

console.log(XO("xxxxpjooklf"));

//https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions
