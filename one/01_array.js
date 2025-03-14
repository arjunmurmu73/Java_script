// Introduction of array
//console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

//console.log(Array.of());
// Expected output: Array []

// array is very intresting 

const myarr = [1,2,"arjun","jaga","node"] 
//console.log("array print: ",myarr[2]);

const heros = ["sri ram","saktiman","hanuman","krish","robot"]
//console.log(heros[3]);

const myarr2 = new Array(1,2,3,4)
//console.log(myarr2[2]);

//ARRAY Methods

myarr2.push(9)
//console.log(myarr2);

myarr2.pop()
//console.log(myarr2)

myarr2.unshift(9)  //[ 9, 1, 2, 3, 4 ]
myarr2.shift()     //[ 1, 2, 3, 4 ]

console.log(myarr2);

//console.log(myarr2.includes(8));  //[ 1, 2, 3, 4 ]  false

//console.log(myarr2.indexOf(9));   //-1

const myarray = myarr.join()

console.log(myarray);

//different between :  slice, splice

//link : https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/

console.log("A",myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("A",myarr);


// REVESION :
const myArr = [1,2,3,"arjun",true,false,4+3]
// console.log(myArr)
// console.log(myArr[4])
myArr.push(10)
myArr.push("jaga")
//console.log(myArr)
myArr.pop()
//console.log(myArr)
myArr.unshift(9)
//console.log(myArr)
myArr.unshift("murmu")
//console.log(myArr)
myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(7))

const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof newArr)

//DIFFERENT BETWEEN 
// slice, and splice

console.log("Original array A:  ",myArr);

//const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("After use slice array B : ",myArr)

const myn2 = myArr.splice(1,3)

console.log("Org : ",myn2)
console.log("after use splice array C: ",myArr)
