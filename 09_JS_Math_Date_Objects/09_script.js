/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
console.log(Math.PI);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(10,798,481,894,69846,181,68,46,16,19,18,91,981);
console.log(min);

// find the Max of 4 numbers
let max = Math.max(10,798,481,894,69846,181,68,46,16,19,18,91,981);
console.log(max);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`2 ^ 4 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Get Current Time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// get USA Date & Time
let options = {timeZone : 'America/New_York'};
let usaDate = new Date().toLocaleDateString('en-US',options);
console.log(usaDate);

let usaTime = new Date().toLocaleTimeString('en-US',options);
console.log(usaTime);

// get full day of the week using switch statement
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

// Display a Digital Clock on the web page
let calcUSATime = () => {
    let options = {timeZone : 'America/New_York'};
    let usaTime = new Date().toLocaleTimeString('en-US',options);
    console.log(usaTime);
};
//setInterval(calcUSATime,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let num1 = Number(100);
console.log(num1);

let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let posInfi = Number.POSITIVE_INFINITY;
console.log(posInfi);

let negInfi = Number.NEGATIVE_INFINITY;
console.log(negInfi);

let num2 = Number(500.15);
console.log(`value : ${num2} type ${typeof num2}`);

let str = num2.toString();
console.log(`value : ${str} type ${typeof str}`);

let newNum = Number.parseFloat(str);
console.log(`value : ${newNum} type ${typeof newNum}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

let msg = String('Good Morning');

// uppercase
console.log(msg.toUpperCase());

// lowercase
console.log(msg.toLowerCase());

// length
console.log(msg.length);

// partial String
console.log(msg.substr(0,4)); // Good
console.log(msg.substr(5)); // Morning

// charAt
console.log(msg.charAt(0)); // G

// Char Code At (ASCII Code)
console.log(msg.charCodeAt(0)); // 71


