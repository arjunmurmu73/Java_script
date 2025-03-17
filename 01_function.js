//Function 
//function create :
function Say_Myname(){
    console.log("A");
    console.log("r");
    console.log("j");
    console.log("u");
    console.log("n");
}

// Say_Myname() //execution
// Say_Myname //reference

//add two number :
//METHOD 1
// function add_two_no(){
//     let a = 5;
//     let b = 10;
//     console.log(a+b);
// }

// add_two_no()
//METHOD 2
// function add_two_number(number1, number2){   
//     console.log(number1+number2);
// }
// add_two_number(45,3)
// add_two_number(4,"3")
// add_two_number(45,"a")
// add_two_number(45,null)

//METHOD 3
function sum_two_no(number1, number2){
    let result = number1 + number2;
    return result;
   // console.log("Arjun");
    
}
const result = sum_two_no(3,4)
// console.log("Result : ",result);

//METHOD 4
function sum_two_num(number1, number2){
    console.log("ARJUN.");
    
    let result = number1 + number2;
    return result;
}
//const results = sum_two_num(3,4)
//console.log("Result : ",results);

//METHOD 5

function sum_two_number(num1,num2){
    return num1+num2
}
const sum = sum_two_number(9,8)
// console.log("Two number sum : ",sum);

function loginUser_M(username){
    return `${username} just logged in`
}

// console.log(loginUser_M("arjun"))
// console.log(loginUser_M(""))
//console.log(loginUser_M()) //undefined just logged in

//introduction if
// function login_user(username){
//     if (username === undefined){
//         console.log("Please enter a usrname.");
//         return 
//     }
//     return `${username} just loggin in`
// }

// console.log(login_user());

function login_user(username){
    if (!username){
        console.log("Please enter a usrname.");
        return 
    }
    return `${username} just loggin in`
}
//console.log(login_user());
function login_user(username = "jaga"){
    if (!username){
        console.log("Please enter a usrname.");
        return 
    }
    return `${username} just loggin in`
}
// console.log(login_user());
// console.log(login_user("ARJUN MURMU"))

function calculation_number(...num1){
    return num1;
}
//console.log(calculation_number(123,234,12));

//  Object with arrau
const user = {
    username : "Arjun",
    price : 299
}

//object pass in function
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user) //username is Arjun and price is 299
// handleObject({
//     username : "arjun",
//     price : 766
// }) //username is arjun and price is 766

//array pass function

const myNewArray = [200,400,900]

function ReturnSoouendValue(getArry){
    return getArry[1]
}

// console.log(ReturnSoouendValue(myNewArray));
// console.log(ReturnSoouendValue([200,400,500,600]));


//scope
