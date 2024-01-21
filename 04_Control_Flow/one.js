// if 
// const isUserLoggedIn = true


// if ( 2 == "2" ) {
//     console.log("executed");
// }
// < , >, >= , <= , ==, !=, === , !==
// (===  strick equal, check DataType also)



// const temperature = 41

// if(temperature === 40){
//     console.log("less than 50");
// }else {
//     console.log("temperature is greater than 50");
// }


// short hand ( if -->without brackets)

// const balance = 1000; 
// if(balance > 500) console.log("test"), console.log("test2"); 

// ex
// const balance = 1000;
// if(balance < 500) {
// console.log("less than 500");
// }else if (balance < 750) {
// console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }


// ex 
// ||   <-- piped sign
// All condition should be true for executed code

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3) {      // one condition is false here 2 not equal to 3
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {     // or --> || if any one is true
console.log("User logged in");
}


