/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 *
 * @example
 * const obj1 = { firstName: "Clark" }
 * const obj2 = { lastName: "Kent" }
 * combineObjects(obj1, obj2); // { firstName: "Clark", lastName: "Kent" }
 */

const combineObjects = (obj1, obj2) => {
  // WRITE YOUR ANSWER HERE
  let combinedObject = {};
  for (let key in obj1) {
    combinedObject[key] = obj1[key];
  }
  for (let key in obj2) {
    combinedObject[key] = obj2[key];
  }
  return combinedObject;

};
console.log(combineObjects({ a: "hello" }, { b: "world" }));

// IGNORE THIS BELOW. It is for the tests.

export default combineObjects;
