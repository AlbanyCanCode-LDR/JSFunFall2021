let firstName = "Bill"; // e.g.
let letter = "i"; // e.g.

/**
 * Create a variable or constant called "characterPosition".
 * It should be equal to the first index (position) of "letter" within the string "firstName".
 *
 * @example
 * let firstName = "Bill";
 * let letter = "i"; // e.g.
 * The answer should be 1. (JavaScript starts counting with 0).
 *
 * @example
 * let firstName = "Briana";
 * let letter = "a"; // e.g.
 * The answer should be 3. (JavaScript starts counting with 0).
 *
 * Your answer should still work when "firstName" and "letter" are equal to different values than they are above.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let characterPosition = firstName.indexOf(letter);

console.log(characterPosition);

// this works because indexOf starts looking for the character reperesented by the variable "letter" beginning at index[0], when it finds the string
// it notes the index position of that string and stores that value as in integer. This value can then be used for other functions.
