const user = {
    username : "arjun",
    price : 999,
    welcome_massage : function(){
        console.log(`${this.username} Welcome to the websites.`);
        // console.log(this);
        
    }
}
 //user.welcome_massage()
// user.username = "Arjun Murmu."
// user.welcome_massage()
//console.log(this); // Empty
//browser go inspect and click the console.log(this)

//this

// function chai(){
//     let username = "arjun"
//    // console.log(this);
//     console.log(this.username); //undefined
    
// }
// chai()

// const chai = function(){
//     let username = "arjun"
//    // console.log(this);
//     console.log(this.username); //undefined
    
// }
// chai()

// const chai = () => { //arrow function
//     let username = "arjun"
//    //console.log(this); //{}
//     console.log(this.username); //undefined
    
// }
// chai()

// syntax : () => {}

// const addtwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addtwo(9,3));

// const addtwo = (num1, num2) => num1+num2 //Implicite Return
// console.log(addtwo(9,3));

// const addtwo = (num1, num2) => (num1+num2) //Implicite Return
// console.log(addtwo(9,3));

const name = (username) => ({username : "Arjun"})

// console.log(name()); //{ username: 'Arjun' }

