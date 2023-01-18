function minSum(arr) {
  arr.sort();
  let largeNum = arr.slice(1).reduce((a, b) => a + b, 0);
  arr.reverse();
  let smallNum = arr.slice(1).reduce((a, b) => a + b, 0);

  console.log(largeNum + smallNum);
}

minSum([5, 4, 2, 3]);

// function minSum(arr) {
//     return arr.sort( (a,b) => a-b )
//               .slice(0, arr.length/2)
//               .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
//   }

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/solutions
