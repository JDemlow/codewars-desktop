function powersOfTwo(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i ** 2);
  }
  return arr;
}

console.log(powersOfTwo(2));

//https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions
