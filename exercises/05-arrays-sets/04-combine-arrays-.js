let array1 = ["wolf", "fox"];
let array2 = ["lion", "leopard", "saber tooth tiger"];

/**
 * Create a constant called "newArray".
 * It should be equal to "array1" and "array2" combined.
 * Combine the arrays by using the spread operator.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const statuses = ["danger", "success"];

const newStatuses = [...statuses, "warning"];

console.log(newStatuses);
// [ "danger", "success", "warning" ];

const newArray = [...array1.concat(array2)];

console.log(newArray);
