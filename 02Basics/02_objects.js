// Objects 
// Singleton (create constructor through)

//Objects Literals

//Symbol
// const mySym = Symbol("key1")

const JsUser = {
name:"Manish",
"full name":"Manish jungari",
[mySym]: "mySym1",
age: 18, 
location: "Jaipur",
email:"manishjungari@gmail.com",
isLoggedIn :false,
lastLoginDays: ["Monday" , "saturday"]

 }

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym])

 // change the object values
JsUser.email = "shubhamjungari@gmail.com"
console.log(JsUser.email);

// freeze the changes of objects
Object.freeze(JsUser)
JsUser.email = "priyajungari@gmail.com"
console.log(JsUser.email);

// print all objects value
console.log(JsUser);

//Functions

JsUser.greeting = function(){
    console.log("Hello js User");
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
console.log(`Hello JS user , ${this.name}`);
}
console.log(JsUser.greetingTwo());

