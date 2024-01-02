let score= 33 ;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// conversion
/* "33" ==> 33
   "33abc" ==>NaN
    true = 1 
    false = 0
*/


// conversion number into boolean  

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 ==> true; 0 ==> false
// "" ==> false
// "manish" ==> true

// conversion of number into string 

let someNumber = 53;

let stringNumber = String(someNumber);
console.log(stringNumber);stringNumber