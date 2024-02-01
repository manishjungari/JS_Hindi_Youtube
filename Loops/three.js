// for of loop

// ["", "", ""]        string in array
// [{}, {}, {}]        objects in array

// format of ForOf loop 

// for (const iterator of object) {
    
// } 

// ex:- 

const arr =[1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}


// Maps ( Maps can mantain unique values and orders also )

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United state of america")
map.set('FR' , "France")

// console.log(map);

//Apply for of loop on map
for (const [key , value] of map) {
    console.log(key , ':-' , value);
}


// Objects are not iterable in map (myObject is not iterable)

const myObject = {
    'game1': 'GtaviceCity',
    'game2': 'Sipderman'
}

for (const [key , value] of myObject) {
    //console.log(key , ':-', value);
    
}