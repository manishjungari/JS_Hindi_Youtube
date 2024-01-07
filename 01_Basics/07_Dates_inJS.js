// Dates 

let myDates = new Date()
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());
console.log(typeof myDates);

// Month start in JS from "0"

let mycreateDate = new Date(2023, 0 , 12)
console.log(mycreateDate.toDateString());

let mycreateDate1 = new Date(2024, 11 , 12)
console.log(mycreateDate1.toDateString());

// date with time
let mycreateDate2 = new Date(2023 , 2, 11, 5 , 3)
console.log(mycreateDate2.toLocaleString());

// DD/MM/YY MM/DD/YY YY/MM/DD
// let mycreateDate3 = new Date("2024-01-14")
let mycreateDate3 = new Date("01-13-2023")
console.log(mycreateDate3.toLocaleString());


// Time Stamp (in milli seconds)

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreateDate3.getTime());

console.log((Date.now()/1000));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);

console.log(newDate.getDay());
console.log(newDate.getFullYear());

// String interpolation
console.log(`${newDate.getDay()} and the time is `)

newDate.toLocaleString('default',{
    weekday:"long",
})








