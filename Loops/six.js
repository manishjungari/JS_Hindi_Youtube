// forEach loop not return anything

// const coading = ["js" , "ruby" , "jave" , "python" , "cpp" ]

// const values = coading.forEach ((item) => {                   // variable not return any thing
// console.log(item);
// return item
// })
// console.log(values);
// *****************************************************************

// Filters 

const myNums = [ 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// or 

const newNums = myNums.filter( (num) => {
    return num > 4                                    // return value under scope
})
// console.log(newNums);


// or (by using forEach)

const newNums1 = []

myNums.forEach((num) => {
    if (num > 4){
        newNums1.push(num)
    }
})
// console.log(newNums1);



// ex:-- 

const books = [
{ title: 'Book one' , genre: 'Fiction' , publish: 1981, edition: 2004 },
{ title: 'Book two' , genre: 'Non-Fiction' , publish: 1982, edition: 2005 },
{ title: 'Book three' , genre: 'History' , publish: 1983, edition: 2006 },
{ title: 'Book two' , genre: 'Non-Fiction' , publish: 1984, edition: 2007 },
{ title: 'Book four' , genre: 'Science' , publish: 1985, edition: 2008 },
{ title: 'Book five' , genre: 'Fiction' , publish: 1986, edition: 2009 },
{ title: 'Book six' , genre: 'History' , publish: 1987, edition: 2010 },
{ title: 'Book seven' , genre: 'geography' , publish: 1988, edition: 2011 },
{ title: 'Book eight' , genre: 'Math' , publish: 1989, edition: 2012 },
{ title: 'Book nine' , genre: 'social' , publish: 1990, edition: 2013 },
{ title: 'Book ten' , genre: 'Alzebra' , publish: 1991, edition: 2014 },

];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
 userBooks =books.filter( (bk) => bk.edition >= 2005)
//  or 
userBooks = books.filter( (bk) =>{ return bk.edition >= 2005})

// or 

userBooks = books.filter( (bk) => {
    return bk.publish >= 1984 && bk.genre === 'History'     // apply two conditions at a time by using &&
})
console.log(userBooks)


userBooks = books.filter( (bk) => {
    return bk.edition <=2005 && bk.genre === 'Non-Fiction' 
})
console.log(userBooks)