/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE

  console.log(string);

  console.log(string.split(""));

  console.log(string.split("").reverse());

  console.log(string.split("").reverse().join(""));

  console.log(string.split("").reverse().join(""));
  if (string.split() == string.split("").reverse("").join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("car"));

// does not work for non, can be refactored to work for even and odd

// IGNORE THIS BELOW. It is for the tests.

export default isPalindrome;
