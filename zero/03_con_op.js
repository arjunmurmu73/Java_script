let score = "33abc"

//console.log(typeof (score));
//console.log(score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); //NaN : not a number, NaN is a spical type
//console.log(typeof NaN); //NaN is a number

//is null
let score2 = null
//console.log(score2)
//console.log(typeof score2);

// null convert number

let valuenull = Number(score2)
//console.log(valuenull); // value come to zero
//console.log(typeof valuenull); //number type 

let score3 = undefined
//console.log(score3)
//console.log(typeof score3);

// null convert number

let valueundefind = Number(score3)
//console.log(valueundefind); // value come to zero
//console.log(typeof valueundefind);

let score4 = true
//console.log(score4)
//console.log(typeof score4);

// null convert number

let valuebool = Number(score4)
//console.log(valuebool); // value come to zero
//console.log(typeof valuebool);

// "33" => 33
//"33abc" => NaN
// true => 1
//false => 0

// next bool check
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let isLoggedInn = ""
let booleanIsLoggedInn = Boolean(isLoggedInn)
//console.log(booleanIsLoggedInn);

//1 => true , 0 => false
//" " => false
//"arjun" => true

let number = 33
//console.log([number, typeof (number)]);

let s_number = String(number)
//console.log([s_number,typeof(s_number)]);

// ***************************************** Operations **************************************************
let value = 3
let negValue = -value
//console.log(negValue);

//console.log([(2+2),(2-2),(2*2),(2**3),(2/3),(2%3)]);

let str1 = "hello"
let str2 = " Arjun"
let str3 = str1+str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2); //not response code
// console.log(1+2+"2"); //wrong type code write
// console.log(98/(2*(3+4))); //correct code writing style
//{not write this type code 
//write clear and understand code
// console.log(+true);
// console.log(+" ");

// let num1,num2,num3

// num1 = num2 = num3 = 2+2
// console.log(num1);
//}

//conversion resourse link (study): https://tc39.es/ecma262/#sec-type-conversion

let gameCounter = 100
//prefix = with operator before operand(ex: ++x) , postfix = with operator after operand (ex: x++)
gameCounter++;
console.log(gameCounter);
 //link of incremet and decrement (study): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment




