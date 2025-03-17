// let a = 10
// const b = 20
// var c = 40
// console.log(a);
// console.log(b);
// console.log(c);
// this is not problem but when use scope {} var value scope se bahar bi cala jata hai
//example 
if(true){
    let a = 10
    const b = 20
    var c = 40
}
// console.log(a); //ReferenceError: a is not defined
//console.log(b);  //ReferenceError: b is not defined
//console.log(c); // 40 (this is the problem of var uses var scope ke ander se bi value leta hi jo ki thik nahi hai.)

//Nested Function
function one(){
    const username = "arjun"
    function two(){
        const website = "github"
        console.log(username);
    }
    //console.log(website); //ReferenceError: website is not defined
   // two()   //arjun
}
//one() //but this is not run/cexecution 
// one > two so that two access one but one does't access two

if(true){
    const username = "arjun"
    if(username === "arjun"){
        const website = "github"
        console.log(username + website);
    }
    //console.log(website); //ReferenceError: website is not defined
}
//console.log(username); //ReferenceError: username is not defined


//++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}
addone(5)


//addtwo(5) //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}

addtwo(5)
