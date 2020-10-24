/*
Objective

In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

Task

Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string. 
*/

function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

/*
Objective

Complete the getLetter(s) function in the editor. It has one parameter: a string, S , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
*/

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s.charAt(0)):
      letter = "A";
      break;
    case "bcdfg".includes(s.charAt(0)):
      letter = "B";
      break;
    case "hjklm".includes(s.charAt(0)):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s.charAt(0)):
      letter = "D";
      break;
  }
  return letter;
}
