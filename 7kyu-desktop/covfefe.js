function covfefe(str) {
  if (str.includes("coverage")) {
    return str.replace(/coverage/g, "covfefe");
  } else if (!str.includes("coverage")) {
    return str + " covfefe";
  }
}

console.log(returnCovfefe("covfefe"));

//https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/solutions/javascript
