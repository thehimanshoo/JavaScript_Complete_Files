// If Else condition Example
let time = -5;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time');
}

// Switch Statement Example
let day = new Date().getDay();
let today = 'Today is ';
switch(day) {
    case 0:
        today += 'SUNDAY';
        break;
    case 1:
        today += 'Monday';
        break;
    case 2:
        today += 'Tuesday';
        break;
    case 3:
        today += 'Wednesday';
        break;
    case 4:
        today += 'Thursday';
        break;
    case 5:
        today += 'Friday';
        break;
    case 6:
        today += 'Saturday';
        break;
    default:
        today += 'no - day';
        break;
}
console.log(today);

// For loop Example to display from 0 - 10 values
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for loop to print 20 - 0 diff 2
output = '';
for(let i = 20; i >= 0; i -= 2){
    if(i >= 2){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// to print 5 starts in triangle
output = '';
let number = 5;
for(let i = 1; i<= number; i++){
    for(let j=1; j<=i; j++){
        output += '*';
    }
   output += '\n';
}
console.log(output);

// Print Numbers in Triangle
output = '';
number = 9;
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        output += `${j}`;
    }
    output += `\n`;
}
console.log(output);

// Print Same Numbers in Triangle
output = '';
number = 9;
for(let i=1; i<=number; i++){
    for(let j=1; j<=i; j++){
        output += `${i}`;
    }
    output += `\n`;
}
console.log(output);

/*
    1) 1
       12
       123
       1234

    2) 4
       43
       432
       4321

    3) 1
       22
       333
       4444

    4) 4
       33
       222
       1111

    5) 4321
       432
       43
       4


 */

console.log('------------------------ While Loop -----------------------');

// While loop Example to display from 1 - 10 values
output = '';
let i=0;
while(i<=10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// while loop to print 20 - 0 diff 2
output = '';
i = 20;
while(i >= 0){
    if(i >= 2){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i -= 2
}
console.log(output);

// to print 5 starts in triangle
output = '';
number = 5;
i = 1;
while(i<= number){
    let j=1;
    while(j<=i){
        output += '*';
        j++
    }
    output += '\n';
    i++
}
console.log(output);

// Print Numbers in Triangle
output = '';
number = 9;
i = 1;
while(i<=number){
    let j=1;
    while(j<=i){
        output += `${j}`;
        j++
    }
    output += `\n`;
    i++;
}
console.log(output);

// Print Same Numbers in Triangle
output = '';
number = 9;
i = 1;
while(i<=number){
    let j=1;
    while(j<=i){
        output += `${i}`;
        j++
    }
    output += `\n`;
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
console.log("------------------------- Do While -------------------");

output = '';
i=0;
do{
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
while(i<=10);
console.log(output);

// while loop to print 20 - 0 diff 2
output = '';
i = 20;
do{
    if(i >= 2){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i -= 2
}
while(i >= 0);
console.log(output);

// to print 5 starts in triangle
output = '';
number = 5;
i = 1;
do{
    let j=1;
    do{
        output += '*';
        j++
    }
    while(j<=i);
    output += '\n';
    i++;
}
while(i<= number);
console.log(output);

// Print Numbers in Triangle
output = '';
number = 9;
i = 1;
do{
    let j=1;
    do{
        output += `${j}`;
        j++;
    }
    while(j<=i);
    output += `\n`;
    i++;
}
while(i<=number);
console.log(output);

// Print Same Numbers in Triangle
output = '';
number = 9;
i = 1;
do{
    let j=1;
    do{
        output += `${i}`;
        j++;
    }
    while(j<=i);
    output += `\n`;
    i++;
}
while(i<=number);
console.log(output);



