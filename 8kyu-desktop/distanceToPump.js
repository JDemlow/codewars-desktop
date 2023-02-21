// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump <= mpg * fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump <= mpg * fuelLeft ? true : false;

console.log(zeroFuel(50, 200, 2));

//https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript
