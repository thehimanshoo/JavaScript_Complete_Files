// Callback functions
let sum = function(a , b){
    return a + b;
};

let mul = function(a , b){
  return a * b;
};

let sub = function(a , b){
    return  a - b;
};

let calculate = function (a , b , callback) {
    let result = 0;
    result = callback(a , b);
    return result;
};

let output = calculate(10,20,sum);
console.log(output);

output = calculate(10,20,mul);
console.log(output);

output = calculate(10,20,(a , b) =>{
    return  a - b;
});
console.log(output);