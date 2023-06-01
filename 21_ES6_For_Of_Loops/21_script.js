let colors = ['white','black','blue','red','orange','yellow'];

// Normal For-loop
let output = '';
for(let i=0; i<colors.length; i++){
    output += `${colors[i].toUpperCase()} `;
}
console.log(output);

// for-in loop ES5
output = '';
for(let index in  colors){
    output += `${colors[index].toUpperCase()} `;
}
console.log(output);

// for-of ES6
output = '';
for(let color of colors){
    output += `${color.toUpperCase()} `;
}
console.log(output);

// forEach with normal function
output = '';
colors.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// forEach with Arrow function
output = '';
colors.forEach(color =>  output += `${color.toUpperCase()}`);
console.log(output);
