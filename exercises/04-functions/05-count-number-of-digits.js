/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let TEST = 22444;

const countNumberOfDigits = (digits) => {

return digits.toString().length;

}

console.log(countNumberOfDigits(TEST));
