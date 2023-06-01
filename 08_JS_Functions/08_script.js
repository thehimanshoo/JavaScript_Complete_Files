function printNumbers(startNumber,endNumber,increNumber) {
    let output = '';
    for(let i=startNumber; i<=endNumber; i += increNumber){
        output += `${i} `;
    }
    console.log(output);
    console.log(typeof output);
}
printNumbers(2,50,2);
printNumbers(10,500,10);
printNumbers(100,5000,100);

// Simple no argument function
function greet() {
    console.log('welcome to JS Functions');
}
greet();

// a function with parameters
function greetMe(name,age) {
    console.log(`Hello ${name} & You are ${age} Yrs Old`);
}
greetMe('John',40);

// a function with return statement
function sum(a , b) {
    let add = a + b;
    return add;
}
let result = sum(50,200);
console.log(result);

// object as a parameter
function printObject(obj) {
    console.log(obj);
}
let employee = {
    name : 'John',
    age : 40
};
printObject(employee);

let studentOne = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};
printObject(studentOne);

// an array as a parameter
function printArray(array) {
    let sortedArray = array.sort();
    console.log(sortedArray);
}
let colors = ['white','red','blue','orange'];
printArray(colors);

let technologies = ['html','css','javascript','jquery'];
printArray(technologies);

// Function Expression
let calc = function(a , b , operation) {
    let result = 0;
    if(operation === 'sum'){
        result = a + b;
    }
    else if (operation === 'mul'){
        result = a * b;
    }
    console.log(result);
};
calc(10,20,'sum');

// Function inside an Object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested Function
let outerFunc = function() {
  let innerFunc = function() {
    console.log('Iam from Inner Function');
  };
  innerFunc();
  console.log('Iam from Outer Function');
};
outerFunc();

// Arrow Function (ES6)
let calcNumbers = (a,b,c) => {
    let result = a + (b * c);
    console.log(result);
};
calcNumbers(10,20,30);
console.log(typeof calcNumbers);

