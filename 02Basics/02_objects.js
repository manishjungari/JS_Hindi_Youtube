// Objects 
// Singleton (create constructor through)

//Objects Literals

//Symbol
// const mySym = Symbol("key1")

// const JsUser = {
// name:"Manish",
// "full name":"Manish jungari",
// [mySym]: "mySym1",
// age: 18, 
// location: "Jaipur",
// email:"manishjungari@gmail.com",
// isLoggedIn :false,
// lastLoginDays: ["Monday" , "saturday"]

//  }

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

 // change the object values
// JsUser.email = "shubhamjungari@gmail.com"
// console.log(JsUser.email);

// freeze the changes of objects
// Object.freeze(JsUser)
// JsUser.email = "priyajungari@gmail.com"
// console.log(JsUser.email);

// print all objects value
// console.log(JsUser);

//Functions

// JsUser.greeting = function(){
//     console.log("Hello js User");
// }
// console.log(JsUser.greeting())


// JsUser.greetingTwo = function(){
// console.log(`Hello JS user , ${this.name}`);
// }
// console.log(JsUser.greetingTwo());

// **************************************************************************************************

// const tinderUser = new Object()  // singleton object

 const tinderUser2 = {}  // non singleton objects

tinderUser2.id = "123abc"
tinderUser2.name = "sammy"
tinderUser2.isLoggEDIn = false

// console.log(tinderUser2)

// Object ke andar objects (Nesting)

// const regularUser = {
//     email: "Some@gmail.com",
//      fullname: {

//       userFullname:{

//         firstname: "Hitesh",
//         lastname: "chaudari"
// }
//     }
// }
// console.log(regularUser.fullname.userFullname.firstname)

// Combine objects 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

// const obj3 = {obj1 , obj2} 
// const obj3 = Object.assign(obj1 , obj2)
// const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3); 


console.log(tinderUser2);

// we can get keys and values from database

// 1)keys
console.log(Object.keys(tinderUser2))

//2)Values
console.log(Object.values(tinderUser2))

//3)entries 
console.log(Object.entries(tinderUser2))

// hasOwnProperty (Check this value present opr not (true/false))
console.log(tinderUser2.hasOwnProperty("isLoggEDIn"));
console.log(tinderUser2.hasOwnProperty("isLoggED"));


// **************************************************************************************************************
// Object Destructuring 

const course ={
    coursename: "JS in Hindi",
    price:"999",
    courseInstructor:"Manish"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course
const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);
 

// JASON Format (keys and value of jason in string format)

// {

// "firstname": "Hitesh",
// "lastname": "chaudari"
// "Address": "Nagpur"
// }
