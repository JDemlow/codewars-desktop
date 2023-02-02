function returnCovfefe(str) {
  if (str.includes("coverage")) {
    return "covfefe";
  } else {
    return str;
  }
}

console.log(returnCovfefe("coverage"));
