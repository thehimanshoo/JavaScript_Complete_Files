// String
let employeeName = 'John';
console.log(employeeName + " " + typeof employeeName); // ES5
console.log(`${employeeName} => ${typeof employeeName}`); // ES6

// Number
let empAge = 45;
console.log(`${empAge} => ${typeof empAge}`);

// Boolean
let isManager = true;
console.log(`${isManager} => ${typeof isManager}`);

// undefined
let a;
console.log(`${a} => ${typeof a}`);

// null
let dummyValue = null;
console.log(`${dummyValue} => ${typeof dummyValue}`);

// Re-assignment
let test;
console.log(test);

test = 'John';
test = 10;
test = true;
test = null;
console.log(test);


