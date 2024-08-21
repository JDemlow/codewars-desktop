// DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// 3 10 meters 10 centimeters

function pillars(num, dist, width) {
  let totalDistance = (num - 1) * dist;
  let totalWidth = 2 * width;
  let distanceBetween = totalDistance - totalWidth;
  return distanceBetween * 100;
}

console.log(pillars(5, 15, 20));
