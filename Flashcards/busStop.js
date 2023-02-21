const number = function (busStops) {
  let totalPeople = 0;
  for (i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/javascript
