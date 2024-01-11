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
