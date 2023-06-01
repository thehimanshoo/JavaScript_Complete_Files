// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Create an Array
let array = [10,'test',true,null,[10,20],{name : 'John'}];
console.log(array);

// access the elements existing
console.log(array[5]);

// access the elements NON existing
console.log(array[6]);

/*
Array Operations

shift() -> to remove the first element from an array
unshift() -> to add the first element
push() -> to add to the last element
pop() -> to remove the last element
sort() -> sort the elements
reverse() -> reverse the elements
splice() -> remove or replace in the middle
split() -> to convert a string to an array
join() -> to convert an array elements to string
slice() -> to create a new copy of an array
forEach() -> to loop an array with some condition
filter() -> to filter an array with some condition
 */

// Shift
let colors = ['white','black','orange','red','purple'];
console.log('------------------ shift() ------------------ ');
console.log(colors);
colors.shift();
console.log(colors);

// Un Shift
colors = ['white','black','orange','red','purple'];
console.log('------------------ unshift() ------------------ ');
console.log(colors);
colors.unshift('yellow');
console.log(colors);

// pop
colors = ['white','black','orange','red','purple'];
console.log('------------------ pop() ------------------ ');
console.log(colors);
colors.pop();
console.log(colors);

// push
colors = ['white','black','orange','red','purple'];
console.log('------------------ push() ------------------ ');
console.log(colors);
colors.push('Yellow');
console.log(colors);

// sort
colors = ['white','black','orange','red','purple'];
console.log('------------------ sort() ------------------ ');
console.log(colors);
colors.sort();
console.log(colors);

// reverse
colors = ['white','black','orange','red','purple'];
console.log('------------------ reverse() ------------------ ');
console.log(colors);
colors.reverse();
console.log(colors);

// Reverse Sort
colors = ['white','black','orange','red','purple'];
console.log('------------------ Reverse Sort ------------------ ');
console.log(colors);
colors.sort().reverse();
console.log(colors);

// splice(index) -> to remove all the elements from the given index
colors = ['white','black','orange','red','purple'];
console.log('------------------ splice(index) ------------------ ');
console.log(colors);
colors.splice(1);
console.log(colors);

// splice(index,no of elements) -> to remove the given no of elements from the index
colors = ['white','black','orange','red','purple'];
console.log('------------------ splice(index,no of elements) ------------------ ');
console.log(colors);
colors.splice(2,1); // orange is removed
console.log(colors);

// splice(index,1,replace element) -> to replace the given element at the index
colors = ['white','black','orange','red','purple'];
console.log('------------------ splice(index,1,replace element) ------------------ ');
console.log(colors);
colors.splice(2,1,'yellow');
console.log(colors);

// Join()=>to convert an array elements to string
colors = ['white','black','orange','red','purple'];
console.log('------------------ Join() ------------------ ');
console.log(colors);
let colorString = colors.join(' , ');
console.log(colorString);

// split()=>to convert a string to an array
console.log('------------------ split() ------------------ ');
console.log(colorString);
let newColors = colorString.split(' , ');
console.log(newColors);

// splice()=>remove or replace in the middle
//slice() -> to create a new copy of an array
console.log('------------------ slice() ------------------ ');
let array1 = [10,20,30,40,50,60];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// Loop from an array


// normal for-loop
let colorsArray = ['white','black','blue','orange','purple','gray'];
let output = '';
for(let i=0; i<colorsArray.length; i++){
    output += `${colorsArray[i].toUpperCase()} `;
}
console.log(output);

// for-in Loop ES5
colorsArray = ['white','black','blue','orange','purple','gray'];
output = '';
for(let index in colorsArray){
    output += `${colorsArray[index].toUpperCase()} `;
}
console.log(output);

// for-of loop ES6
colorsArray = ['white','black','blue','orange','purple','gray'];
output = '';
for(let color of colorsArray){
    output += `${color.toUpperCase()} `;
}
console.log(output);

// forEach function
colorsArray = ['white','black','blue','orange','purple','gray'];
output = '';
colorsArray.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// forEach with Arrow function
colorsArray = ['white','black','blue','orange','purple','gray'];
output = '';
colorsArray.forEach(color => output += `${color.toUpperCase()} `);
console.log(output);

// Real time Example
let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager',
        active : true
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Laura',
        age : 30,
        designation : 'Team Lead',
        active : false
    }
];

// get names of all employees
let empString = '';
for(let employee of employees){
    empString += `${employee.name.toUpperCase()} `;
}
console.log(empString);

// get all active employees
let activeEmps = [];
for(let employee of employees){
    if(employee.active){
        activeEmps.push(employee);
    }
}
console.log(activeEmps);

// filter =>to filter an array with some condition
let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

// inactive Employees
let inActiveEmployees = employees.filter((employee) => {
    return !employee.active;
});
console.log(inActiveEmployees);

// junior Employees
let juniorEmployees = employees.filter((employee) => {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// senior Employees
let seniorEmployees = employees.filter((employee) => {
    return employee.age > 30;
});
console.log(seniorEmployees);