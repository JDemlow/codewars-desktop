function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Cheese", "Milk", "Chocolate"));

//https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/solutions/javascript
