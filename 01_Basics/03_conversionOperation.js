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
console.log(stringNumber);

// ****************************************Operations*************************************************************

// -ve value 

let value =3 
let negValue = -value
console.log(negValue);

// basics math operations 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// combine string 

let str1 = "Hello"
let str2 = " Hitesh"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 3);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);



console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// ***********************************************************************************************

// comparasion operator 

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02"> 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Strict Check (===)

console.log("2" === 2);

