// var vs let
// var keyword does not support the block scoping concept , where 'let' does.
let course = 'Engineering';
if(course === 'Engineering'){
    var job = 'Software';
}
console.log(course); // Engineering
console.log(job); // Software

// for-loop with var vs let
for(var i=0; i<=10; i++){

}
console.log(i);

// let vs const
const appName = 'Js App';
// appName = 'TS App';
console.log(appName);

// const with an Object
const mobile = {
    brand : 'Apple',
    color : 'Silver',
    ramSize : '16GB',
    price : 35000
};
mobile.price = 45000;
// mobile = {};
console.log(mobile);

// Function Scope var , let , const
let greet = () => {
    var message_1 = 'Good Morning';
    let message_2 = 'Good Afternoon';
    const message_3 = 'Good Evening';
};
// console.log(message_1); ReferenceError: message_1 is not defined
// console.log(message_2); ReferenceError: message_2 is not defined
// console.log(message_3); ReferenceError: message_3 is not defined

// NOTE :

