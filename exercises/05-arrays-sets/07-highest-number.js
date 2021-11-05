/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

const highestNumber = (numbers) => {
  // WRITE YOUR ANSWER HERE

  console.log(numbers);

  //This sorts the number from lowest to highest
  let sortedNumbers = numbers.sort((a, b) => a - b);

  console.log(sortedNumbers);

  //This realizes that the highest number will always be at the end of the array
  let highestNumber = sortedNumbers[sortedNumbers.length - 1];

  console.log(highestNumber);

  //This returns the highest number so I can console.log outside of the function to test it
  return highestNumber;
};





// IGNORE THIS BELOW. It is for the ess.

export default highestNumber;
