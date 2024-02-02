const myNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// using map function 

// const newNums =myNumbers.map( (num) => num + 10 )
// or
// const newNums =myNumbers.map( (num) =>{ return num + 10} ) 
//  console.log(newNums);

// or by using forEach

 myNumbers.forEach( function(num) {
    // console.log(num + 10);
 })


 // *Chaining (use two function at a time)

 const newNums = myNumbers
                 .map( (num) => num * 10 )
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)
console.log(newNums);