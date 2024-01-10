// FUNCTIONS 

function SayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

SayMyName()

// ADD two numbers by using function

// function addTwoNumbers(number1 , number2){ 
// console.log(number1 + number2);
// }
// addTwoNumbers(3 , 4)
// addTwoNumbers(3 , "4")
// addTwoNumbers(3 , "a")

// or

function addTwoNumbers(number1 , number2){

let result = number1 + number2; 
return result

}
const result = addTwoNumbers(3 , 5)
console.log("result: " , result)

// or 

function addTwoNumbers(number1 , number2){
return number1 + number2; 
}
const result1 = addTwoNumbers(3 , 5)
console.log("result1: " , result1)

// or Advance way of FUNCTION 

function loginUserMessage(username){
return `${username} just logged in`
}
console.log(loginUserMessage("Manish"))

// or Advance way of FUNCTION with If else condition

function loginUserMessage(username){

    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());  // not assign value (undefine)

// or 

function loginUserMessage(username){

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());  // not assign value (undefine)

// or 

function loginUserMessage(username ="Enter name"){

    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());  // not assign value (undefine)
console.log(loginUserMessage("manish"));  


// Rest operator (...)

function calculateCartPrice(...num1){
return num1

}
console.log(calculateCartPrice(200, 400, 500, 1000 ));

//or (val1=100 val2=400 rest is print ...)

function calculateCartPrice1(val1 , val2, ...num1){
return num1

}
console.log(calculateCartPrice1(200, 400, 500, 1000 ));


// pass object value in function

const user = {                           // object
    username: "Hitesh",
    Prices:199
}
function handleObject(anyObject){            // function
    console.log(`any name is ${anyObject.username} and price is ${anyObject.Prices}`);
}
// handleObject(user)
handleObject({
    username: "sam", 
    Prices: 399
})


// Pass array value in function 

const myNewArray = [200, 400 , 100 ,600 ]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
