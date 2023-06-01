// Creation of  functions in JavaScript
// 1) Normal Function
// 2) Function Expression
// 3) Arrow Function

// 1) Normal Function
function greetNF(name,age) {
    let message = '';
    message = `Hello ${name} , You are ${age} Yrs Old`;
    return message;
}
let result = greetNF('John',40);
console.log(result);

// Function Expression
let greetFE = function(name,age) {
    let message = '';
    message = `Hello ${name} , You are ${age} Yrs Old`;
    return message;
};
result = greetFE('John',40);
console.log(result);

// Arrow Function
let greetAF = (name,age) => {
    let message = '';
    message = `Hello ${name} , You are ${age} Yrs Old`;
    return message;
};
result = greetAF('John',40);
console.log(result);

// Limitation of an Arrow function with an Object
let student = {
    firstName : 'Arun',
    lastName : 'Reddy',
    fullName : () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());


