function strCount(str, letter) { 
 let count = 0
 let arr = str.split('')
 arr.map((el) => {
  if (el === letter) {
   count++
  }
 })
return count
}

console.log(strCount("pizza", 'z'))

//https://www.codewars.com/kata/5865918c6b569962950002a1/solutions/javascript