let fullName = "John smith"; // e.g.

/**
 * You will change the value of "fullName" below. Capitalize the first letter of the the last name within "fullName". "fullName" below should be equal to your answer.
 *
 * @example
 * let fullName = "John smith"; // e.g.
 * The new value for "fullName" should result in "John Smith".
 *
 * Your answer should still work when "fullName" is equal to a different value.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

//start at finding the index of the space character +1 to represent the index value of the first letter of the last name

//use .toUppercase at the index value that consistently is the first letter of the last name by using get character by position notatiion

// fullName = fullName[fullName.indexOf(" ") + 1].toLocaleUpperCase();

// console.log(fullName);

//use multiple subfullNameings to peice it back together


fullName = fullName.substring(0,fullName.indexOf(" ")) + " " + fullName[fullName.indexOf(" ") + 1].toLocaleUpperCase() + fullName.substring(fullName.indexOf(" ") + 2);

console.log(fullName)





