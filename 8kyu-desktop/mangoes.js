function mango(quantity, price) {
  quantity = Math.trunc(quantity / 3) * 2 + (quantity % 3);
  return quantity * price;
}

console.log(mangoes(5, 3));

//https://www.codewars.com/kata/57a77726bb9944d000000b06/solutions/javascript
