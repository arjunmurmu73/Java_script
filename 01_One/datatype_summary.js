/*
JavaScript is a dynamically typed language, 
but TypeScript is a statically typed language. 
Longer answer: In dynamically typed languages 
all type checks are performed in a runtime, 
only when your program is executing
*/

//how to store memory and defined the data

//Two type of datatye

// 1.primitive DataType : 
// 7 types : string, number,boolan,,null,undefind,symbol,BigInt
const score = 100
const scoreValue = 10.5
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const Id = Symbol("123")
const anotherId = Symbol("123")

//console.log(Id === anotherId);
//console.log(["Id: ",Id],["another Id: ",anotherId]); //[ 'Id: ', Symbol(123) ] [ 'another Id: ', Symbol(123) ]

const bigNumber = 8232289234422122313n
// console.log(typeof bigNumber);

// 2.Reference (non-primitive) DataType : 
// Array, Objects, Function
//Array
const heros = ["hanuman","shiva","durga maa"]
//console.log(heros)

//Objects
let myObj = {
    name : "Arjun",
    age : 21
}
//console.log(myObj);

//Function
const myFunction = function(){
    console.log("Hello Function");
}

//console.log();
// myFunction();
// console.log(myFunction()); 

// console.log(("Types of data type : "),["Score : ",typeof score],["Score Value : ",typeof scoreValue],["isLoggedIn : ",typeof isLoggedIn],
//     ["Outside Temp: ",typeof outsideTemp],["ID: ",typeof Id],["anotherId: ",typeof anotherId],["Big Number: ",typeof bigNumber],
//     ["Heros : ",typeof heros],["myObj: ",myObj],["Myfunction: ",typeof myFunction])



// Link of study The type of Operator : https://262.ecma-international.org/5.1/#sec-11.4.3


//****************************Memory**************************************
//Two Type of memory : stack, heap
//1. stack : (primitive) -> variable copy value
//2. heap : (non primitve) -> reference and original value

//Example: 
let myytname = "a murmu creation."
let myytname2 = myytname
// console.log(myytname2);
myytname2 = "jaga bhai vlog."
// console.log("Myytname : ",myytname);
// console.log("Myytname2 : ",myytname2);

let user1 = {
    name : "arjun murmu",
    upi : "arjun@upi.in"
}
console.log("userone : ",user1);
let user2 = user1;
console.log("user two : ",user2);
user2.name = "Jaga murmu";
console.log("userone : ",user1);
console.log("user two : ",user2);