// function sumOfIntegersInString(str) {
//   const integers = str.split("").filter((nums) => "1234567890".includes(nums));
//   return integers.reduce((acc, val) => acc + +val, 0);
// }

// console.log(
//   sumOfIntegersInString(
//     "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
//   )
// );

function sumOfIntegersInString(str) {
  let currentNumber = "";
  let sum = 0;
  for (const char of str) {
    if (!isNaN(char)) {
      currentNumber += char;
    } else {
      sum += +currentNumber;
      currentNumber = "";
    }
  }
  return sum + +currentNumber;
}

console.log(
  sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")
);
