// Spread Operator
let numbers = [10,58,5,58,105,650,65065,16,16,32,35,3,0,6,1,18];
let min = numbers[0];
for(let num of numbers){
    if(num < min){
        min = num;
    }
}
console.log(`Min : ${min}`);

// Spread Operator
min = Math.min(...numbers);
console.log(`Min : ${min}`);

// spread operator to merge two or more array elements
let array1 = [10,20,30];
let array2 = [40,50,60];
let array3 = [...array1,...array2];
console.log(array3);

// spread operator to create a copy of an array array.slice()
let colors1 = ['white','orange','red','blue'];
//let colors2 = colors1.slice();
let colors2 = [...colors1];
console.log(colors2);


