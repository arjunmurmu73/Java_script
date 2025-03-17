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
    //  mySym : "MyKey1"
}
// console.log(typeof(symbol_key[mySym]));
// console.log(mySym)

const access = {
    email_id : "murmuarjun99@gmail.com",
    name : "jaga bhai"
}

access.email_id = "jagamurmu@gmail.com";
//console.log(access.email_id)

const frize_obj = {
    phone_no : '9556926152',
    gender : "male"   
}

// frize the object value :
Object.freeze(frize_obj)
//console.log(frize_obj);
frize_obj.phone_no = '8249128690'
//console.log(frize_obj);

//function : 
const fun_object = {
    name : "rajlaxmi Tudu",
    age : 19,
    contact_no : '8249127824'

}
fun_object.greeting = function(){
    console.log("hello function.")
}
fun_object.greetingTwo = function(){
    console.log(`I am second function, my name is : ${this.name}`);
}

console.log(fun_object.greeting)
console.log(fun_object.greeting())
console.log(fun_object.greetingTwo())
