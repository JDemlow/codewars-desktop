function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

console.log(hero(7, 4));

//https://www.codewars.com/kata/59ca8246d751df55cc00014c/solutions/javascript
