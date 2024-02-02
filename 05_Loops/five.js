// For each loop (mostly used) (also called Higher order)

const coading = ["js" , "ruby" , "jave" , "python" , "cpp" ]

coading.forEach( function (val) {                // call back function
    // console.log(val);
});


// or Arrow function 

coading.forEach ((val) => {
// console.log(val);
});


// or

function printme(item){
    // console.log(item);
}
coading.forEach(printme)


// forEach have a access of INDEX and list of ARRAY also

coading.forEach((item , index , arr) =>{
// console.log(item , index , arr);
})

// Array ke andar Object

const myCoading = [
{
    languageName: "Javascript",
    languageFileName: "js"
}, 
{
    languageName: "java",
    languageFileName: "java"
}, 
{
    languageName: "python",
    languageFileName: "py"
}, 
]
myCoading.forEach((item) => {
// console.log(item.languageFileName);
console.log(item.languageName);

})

