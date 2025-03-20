//Immediately Invoked Function Expressions (IIFE)

//DB Syntax : ()()
//Why use DB/IIFE : Global scope main kuch problem ku solve karne kiliye


// (function one(){
//      name IFEE
//     console.log(`DB CONNECTED`);   
// })(); //semicolon is mandotory

// ( function one() {
//     console.log(`DB CONNECTED Two`);   
// } )();

// ( () => {
//     console.log(`DB CONNECTED Three`);   
// } )();

//Two IIFEE Execution time use the semicolon

( (name) => {
    //Simple IIFE
    console.log(`DB CONNECTED Three ${name}`);   
} )("Arjun Murmu") //DB CONNECTED Three Arjun Murmu



