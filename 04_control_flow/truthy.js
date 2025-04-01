//truthy and falsy value
const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//false value 
// false, 0, -0, BigInt 0n,"", null, undefined, NaN

// truthy values
// "0", 'false'," ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty.");
// }

// const emptyObj = {4 : "f"}
// // const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Empty object.");   
// }
// else{
//     console.log(`Object value ${emptyObj[4]}.`);
// }

//Nullish Coalescing Operator (??) : null undefind

let val1;

//val1 = 5 ?? 10
//val1 = null ?? 20
//val1 = undefined ?? 40
//var1 = undefined ?? 30 //undefind
//val1 == null ?? 30 ?? 40 //undefined
// val1 = null ?? 40 ?? 50
// console.log(val1);


// Terniary Opertor

//syntax : condition ? true : false

const icePrice = 100;
icePrice <= 80 ? console.log("less then 80") : console.log("more then 80");

 