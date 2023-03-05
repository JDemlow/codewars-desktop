// function mango(quantity, price) {
//   quantity = Math.trunc(quantity / 3) * 2 + (quantity % 3);
//   return quantity * price;
// }

function mango(quantity, price) {
  let freeMangos = Math.floor(quantity / 3);
  return (quantity - freeMangos) * price;
}

console.log(mango(5, 3));

//https://www.codewars.com/kata/57a77726bb9944d000000b06/solutions/javascript
