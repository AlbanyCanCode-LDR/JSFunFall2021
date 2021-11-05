/**
 * Add all of the numbers in an array and return the sum.
 * @param {array} numbers an array of numbers
 * @return {number} the sum of all the numbers in an array
 *
 * @example add([1, 2, 3]); // 6
 */

const add = (numbers) => {
  // WRITE YOUR ANSWER HERE
  //I used the reduce method and used an arrow function
  let sum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  return sum;
};

let testArray = [1, 2, 55];
console.log(add(testArray));

// IGNORE THIS BELOW. It is for the tests.

export default add;
