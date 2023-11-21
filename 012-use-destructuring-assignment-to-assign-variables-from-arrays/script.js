// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [x, y] = [1, 2, 3, 4, 5, 6];

console.log(x, y);

// The console will display the values of x and y as 1, 2.

// The variable x is assigned the first value of the array, and y is assigned the second value of the array.

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [c, d, , , e] = [1, 2, 3, 4, 5, 6];

console.log(c, d, e);

// The console will display the values of c, d, and e as 1, 2, 5.

// TASK

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8;

let b = 6;

// Only change code below this line

[a, b] = [b, a];

console.log(a, b);
