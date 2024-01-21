// Truthy value:- Without any comparasion we consider the value is true

// const userEmail = "manish@gmail.com";
// const userEmail = ""
const userEmail = []

if(userEmail){                                       // without any condition or comparision we consider its true value
    console.log("LoggedIn with user email");

}else {
    console.log("User Email is not Avaliable");
}

// notes 
// Falsy values

// false , 0 , -0, BigInt , 0n , "", null , undefined , NaN


// Truthy values 
// "0" , 'false' , " ", [], {}, function(){}


// Array ko check krne ka tarika ( empty hai ke nhi)

// if(userEmail.length === 0){
// console.log("Array is Empty");
// }


// Object ko check krne ka tarika ( empty hai ke nhi)

// const emptyObject = {}

// if (Object.keys(emptyObj).length === 0) {
// console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): ( null , Undefined ) (mostly use for error handeling)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary Operator (?)
// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");