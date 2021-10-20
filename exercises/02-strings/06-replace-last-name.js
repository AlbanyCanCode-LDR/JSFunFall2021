let fullName = "Joe Fernandes"; // e.g.
let newLastName = "Washington"; // e.g.

/**
 * A person just got married and they need their last name replaced. You will change the value of "fullName" below. Replace the last name in "fullName" with "newLastName".
 *
 * @example
 * let fullName = "Emily Rose";
 * let newLastName = "Smith";
 * The new value for "fullName" should result in "Emily Smith".
 *
 * @example
 * let fullName = "Joe Fernandes";
 * let newLastName = "Washington";
 * The new value for "fullName" should result in "Joe Washington".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

console.log(fullName);
//this substring starts at the beginning index and cuts everything after the index value of "Full Name" at the first occurrence of quotes
fullName = fullName.substring(0, fullName.indexOf(" ")) + " " + newLastName;

console.log(fullName);
