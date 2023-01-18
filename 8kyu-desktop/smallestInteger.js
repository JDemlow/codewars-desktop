class SmallestIntegerFinder {
  findSmallestInt(arr) {
    let sorted = arr.sort((a, b) => a - b);
    return sorted[0];
  }
}

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript

// look up Math.min()
