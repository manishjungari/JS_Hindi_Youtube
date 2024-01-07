//Arrays

const myArr = [0, 1 , 2 , 3 , 4 , 5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 , 2 , 3 , 4 )
console.log(myArr2[0]);
console.log(myArr2[1]);
console.log(myArr2[2]);
console.log(myArr2[3]);

// Arrays methods 
// 1)Push:-Add Value in array 
myArr.push(6)
myArr.push(7)
console.log(myArr);

// 1)Pop:-Remove Value in array 
myArr.pop(7)
console.log(myArr);

// unshift (Add value in first position)

myArr.unshift(9);
console.log(myArr);

// shift (remove added value)
myArr.shift(9);
console.log(myArr);

// includes (value present or not check)
console.log(myArr.includes(9));
console.log(myArr.indexOf(4))

// join (convert array into string)

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice , splice 

console.log("A " , myArr);
const myn1 = myArr.slice(1 , 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1 , 3)
console.log("C ", myArr);
console.log(myn2);

// ***********************************************************************************************
// Arrays02

 const marvel_heros = ["thor", " Ironman", "Spiderman"]
 const dc_heros = ["Superman", "flash", "batman"]

// // push (join two arrays)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat (join two arrays)
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// *Spread operator (advance method to join array)

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

//Another array ex:-all combine value in one array

const another_array = [1 , 2 , 3 ,[4 , 5 , 6], 7 , [6 , 7 ,[4 , 5 ]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Is array  (check type)
 
console.log(Array.isArray("Manish"));

// From array
console.log(Array.from("Manish"));

console.log(Array.from({name: "Manish"})); // interesting

//  Of array

let score1 = 100
let score2 = 200
let score3 =300 

console.log(Array.of(score1, score2, score3));