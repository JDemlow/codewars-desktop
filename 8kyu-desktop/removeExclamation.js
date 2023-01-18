function remove(string) {
  const newString = string.replace(/!$/, "");
  return newString;
}

console.log(remove("Hi! Hi!"));

//https://www.codewars.com/kata/57fae964d80daa229d000126/solutions/javascript

// To remove an exclamation point that is at the end of a string, you can use the replace() method in combination with the $ character, which is a special character in regular expressions that matches the end of a string.

// Here is an example of how you could use the replace() method and the $ character to remove an exclamation point from the end of a string:

// const str = "Hello World!";
// const newStr = str.replace(/!$/, "");
// // newStr = "Hello World"

// In this example, the regular expression /!$/ will match any exclamation point that is at the end of the string. The replace() method will then replace that exclamation point with an empty string, effectively removing it from the string.

// Note that this regular expression will only match an exclamation point that is at the very end of the string. If there is an exclamation point that appears earlier in the string, but not at the very end, it will not be removed by this regular expression.
