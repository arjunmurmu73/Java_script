const name = "arjun murmu";
const age = 21;
//console.log(`Hello, my name is ${name} and my age is ${age}`); // ` (breackt) -> this defiend { }

// String Method ... you resoure him self

const gameName = new String('Arjun-jaga') //[[Prototype]]
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'))

//slaise
const newString = gameName.substring(10, 2) //this is a substring division
console.log(newString)

const anotherString = gameName.slice(-10, 2) //slice are possible give negetive value
console.log(anotherString)

const newStringOne = "   arjun   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim use for removing un-nesessary space 
console.log(newStringOne.trimEnd()); //trimStart(),trimEnd()
// Trim link for study : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

//replace 

const url = "https://arjun.com/arjun%21murmu";
console.log(url.replace('%21', '_'));
const passwordp = "arjun_murmu";
console.log(passwordp.replace(passwordp,'***'))

console.log(url.includes('mama')) //include string use for the keyowrd present or not i the string

console.log(passwordp.split('_'))

console.log(url.split('/'))
