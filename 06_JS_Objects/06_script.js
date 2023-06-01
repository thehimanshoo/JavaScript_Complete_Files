// Create an Object
let employee = {
    name : "John",
    age : 40,
    salary : 85000,
    desg : 'Manager'
};
console.log(employee);

// Access the properties of an Object
console.log(employee.name); // John

// Add a property to an object
employee.location = "Hyderabad";
console.log(employee);

// access the non existing property
console.log(employee.company);

// diff between dot notation , [] notation
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    memory : '16GB',
    price : 35000
};
console.log(mobile);

// Access the properties with dot , []
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);

// access the dynamic properties
let prop = 'price';
console.log(`Prop : ${mobile.prop}`);
console.log(`Prop : ${mobile[prop]}`);

// Nested Objects
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Road No: 15 , Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};

console.log(student);

// access the nested Object
console.log(student.address);

// access the nested Object's Prop
console.log(student.address.street);

// add prop to nested Objects
student.address.country = 'India';
console.log(student.address);

// CRUD with Objects

// Create Operation
let laptop = {};
laptop.brand = 'HP';
laptop.color = 'White';
laptop.price = 56000;
laptop.ramSize = '12GB';
console.log(laptop);

// READ operation
console.log(`Brand : ${laptop.brand}`);
console.log(`Color : ${laptop.color}`);

// UPDATE operation
laptop.ramSize = '16GB';
console.log(laptop);

// DELETE Operation
delete laptop.ramSize;
console.log(laptop);
