// singleton

const JsUser = {
    name : "Arjun Murmu",
    age : 21,
    location : "Balasore",
    email : "murmuarjun98@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// access of the object :

//console.log(JsUser.email)
//other type access:

//console.log(JsUser["email"]); // why this type use ?
// answer : let suppose one object key is " " write then how to fix it ..
//Example : 
const JsObj = {
    name : "Arjun",
    "full name" : "Arjun Murmu"
}
//this time not possible console.log "full name" print so that use this type array

//console.log(JsObj["full name"]);

// symbol used :

const mySym = Symbol("Key1")

const symbol_key = {
    name : "Symbol used.",
    [mySym] : "MyKey1"
}
console.log(typeof(symbol_key[mySym]));

