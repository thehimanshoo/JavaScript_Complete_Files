// block scoping
let a = 10;
{
    let b = 20;
}
console.log(a);

// if condition with scoping
let course = 'Engineering';
if(course === 'Engineering'){
    let job = 'Software';
}
console.log(course);
// console.log(job); // RE :  ReferenceError: job is not defined

// for loop with scoping
for(let i=0; i<=10; i++){

}
//console.log(i); //  ReferenceError: i is not defined

// functions with scoping
let greet = function() {
  let message = 'Good Morning';
  return message;
};
// console.log(message); // ReferenceError: message is not defined

let output = greet();
console.log(output);

// Nested Functions with Scopes
let x = 10;
let outerFn = () => {
    let x = 20;
    let innerFn = () => {
        let x = 30;
        console.log(x);
    };
    innerFn();
};
outerFn();
