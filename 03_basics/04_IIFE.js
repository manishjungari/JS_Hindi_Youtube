// (IIFE) Immediately Invoked Function Expression --> ()() defination and execution
// global scope ke varibles ke pollution ko hatane ke liye aapn IIFE use krte hai


(function chai(){
console.log(`DB Connected`);   // ; is imp after end of iife
})();

(function aurcode() {
    // Name iife
    console.log(`DB Connected Two`);
})();



(() => {
    // unnamed IIFE 
    console.log(`DB CONNECTED THREE`);
})();


// OR 

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED FOUR ${name}`);
})('Manish')