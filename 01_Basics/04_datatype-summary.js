// Data Types 

// Primitive 

// 7-TYPES:-String , Number , Boolean , Null, Undefined , Symbol , BigInt

// Reference (Non premitive data type)\

// Array , Objects, Functions

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 321547854587994498225656n


// Array 

const heros = ["Shaktiman", "Spiderman", "Batman"]


// objects 

let myobj = {

    name: "hitesh",
    age : "22",
    address: "Nagpur",
}


// Functions 

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof bigNumber );


// ************************************Memory*********************************************************************
// 1)Stack (Premitive)
// 2)Heap (Non-premative)
// ex:-


let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename;
anotherName = "chaiorcode"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
    }

    let userTwo = userOne

    userTwo.email = "hitesh@google.com"

    console.log(userOne.email);    
    console.log(userTwo.email);    
