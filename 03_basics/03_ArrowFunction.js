const user = {
    username: "Hitesh",
    price:999,

    WelcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this)
    }
}

user.WelcomeMessage()
user.username = "sam"
// user.WelcomeMessage()

console.log(this);


// *************************************************************************************************

// function chai(){
//   let username = "Hitesh"
//   console.log(this.username)
// }

// chai()


// const chai = function () {
//     let username = "Hitesh"
//     console.log(this.username)
// }

// chai()

// Arrow Function 

// const chai = () => {
//     let username = "Hitesh"
//     console.log(this.username)
// }
// chai()


// const addTwo = (num1 , num2) => {
    // return num1 + num2 
// }

// console.log(addTwo(3 , 4))


// implicit return (we not use return keyword)
// Explicit return (we use return keyword)

// const addTwo = (num1 , num2) => (num1 + num2)
// or 
// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(5 , 9));

// object ko return karne ke liye palinthisis ( ) mai wrap krna padega.

// const addTwo =(num1 , num2 ) => {username: "Hitesh"} 
const addTwo =(num1 , num2 ) => ({username: "Hitesh"} )

// code for generate OTP

function generateOTP(length) {
    let otp ='';
    for(let i =0; i<length;i++){
otp += Math.floor(Math.random() * 10).toString();

    }
return otp;

}
console.log(generateOTP(4));