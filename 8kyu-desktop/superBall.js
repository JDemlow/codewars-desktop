class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);

//https://www.codewars.com/kata/53f0f358b9cb376eca001079/solutions/javascript
