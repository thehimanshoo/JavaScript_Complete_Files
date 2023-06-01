let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        street : 'Jubilee Hills',
        city : 'Hyderabad',
        state : 'TS'
    }
};

// access the object with Destructuring
let {name , age , course} = student;
console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}`);

// Access the nested Objects with Destructuring
let {street, city, state} = student.address;
console.log(`STREET : ${street}
             CITY : ${city}
             STATE : ${state}`);