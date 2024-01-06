const name = "Manish";
const repoCount = 50

// console.log(name + repoCount + " Value"); 

// instead of above use `` backticks (called as string interpolation)

console.log(`My name is ${name} and the my repocount is ${repoCount}`);

// write a string in another way

const gameName = new String('hiteshhh')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

// substring 

const newString = gameName.substring(0 , 4 )
console.log(newString);

// slice (able to give negative value also)

const anotherString1 = gameName.slice(-7 , 2)
console.log(anotherString1)

// trim 
const newStringOne = "  Manish  "
console.log(newStringOne);
console.log(newStringOne.trim())

// reverse 

const news =  [1 , 2 , 3 , 4 , 5]
let reverse1 = news.slice().reverse()
console.log(reverse1);

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedArray = myArray.slice().reverse();
console.log(reversedArray);

// Replace 

const url = "https://www.co.linkden.in/%20mnj"
console.log(url.replace('%20' , '_'))


// includes (check its available or not)

console.log(url.includes('hiteshhh'))
console.log(url.includes('Manish'))

// split 
console.log(gameName.split('_'));