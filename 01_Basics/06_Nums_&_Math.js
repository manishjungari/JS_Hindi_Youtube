// **************************************Numbers***********************************************

const score = 400
// console.log(score);

 const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// decimal roundoff 
// console.log(balance.toFixed(5));
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

// Precision value 
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(1));

// , in numbers (10,000,00)
const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// console.log(hundreds.toLocaleString('en-IN'));



// **********************************************Maths*********************************************************************

console.log(Math);

// absolute value -4 to 4
console.log(Math.abs(-4));

// decimal round off
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// ceil (decimal top value can taken)
console.log(Math.ceil(8.2));

// floor (decimal low value can taken)
console.log(Math.floor(8.3));

// min max value in array
console.log(Math.min(4 , 3 ,  6 , 7  , 9 , 10));

console.log(Math.max(4 , 3 ,  6 , 7  , 9 , 10));


// Random value (values comes in between 0 & 1) 

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log("Hello world");

console.log(Math.random()*10)

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



