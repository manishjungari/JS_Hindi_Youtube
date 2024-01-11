// let a = 10
// const b = 20
// var c = 30 
// console.log(a ,b ,c);
// console.log(a);
// console.log(b);
// console.log(c);


// Scope in js 

let a = 300;     // global scope

if(true){
    let a =200;             // block scope   
    const b = 120
    console.log("innner:" , a)  

}
console.log(a)


// Nested Function(closer function) (function ke andar function)(child function can take a variable access of parent function)

function one(){
const username = "hitesh"

function two(){
const website = "youtube"
console.log(username);

console.log(website);
}

two()

}

one()



// ex nested fun with if else loop (with error)

if(true){
const username ="Hitesh"
if(username=== "Hitesh"){
    const website = " Youtube"
    console.log(username + website);
}
// console.log(website);
}
// console.log(username);


// or (correct)

if(true){
const username ="Hitesh"
if(username=== "Hitesh"){
    const website = " Youtube"
    console.log(username + website);
    console.log(website);
}
console.log(username);
}

// ***************************Interesting**************************************
// function declaration

function addone(num){
    return num +1
}

console.log(addone(5))

// Function declaration with hold in variable

 const addtwo = function(num){
    return num +2
}

console.log(addone(5))