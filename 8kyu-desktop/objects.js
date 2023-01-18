let obj = {
  name: "dog",
  legs: 4,
  color: "white",
};

function animal() {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
}

console.log(animal(obj));

//https://www.codewars.com/kata/571f1eb77e8954a812000837/solutions/javascript
