// Assignment operator =
let test = 10;
console.log(test);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Div : ${num1 / num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let sum = 10;
sum = sum + (a + b); // 10 + 10 + 20 = 40
sum += (a + b); // 40 + 10 + 20 = 70
console.log(sum);

// Conditional operators < , > , <= , >= , !==
let marks= 36;
if(marks <= 35){
    console.log('You Failed the Exam');
}
else{
    console.log('You Cleared the Exam');
}

a = 10;
b = 20;
if(a > b){
    console.log(`The Bigger value is ${a}`);
}
else{
    console.log(`The Bigger value is ${b}`);
}

// Unary Operator ++ , -- (incre / decre by 1)
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical operators AND && , OR ||
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents agreed');
}

// String Concatenation Operator (+)
let y = 10 + 20 + '10' + 10 + 20;
console.log(y);

let name = 'John';
let age = 40;
console.log(name + " " + age); // es5
console.log(`${name} ${age}`); // es6

// Ternary operator (? :)
marks= 25;
(marks <= 35) ? console.log('You Failed the Exam'):console.log('You Cleared the Exam');

// Type of operator
let empName = 'Wilson';
console.log(`value : ${empName} Type : ${typeof empName}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else {
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else {
    console.log('Both are NOT Equal');
}