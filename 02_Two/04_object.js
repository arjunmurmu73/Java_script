const tinderUser = new Object() //singlton Object
const TinderU = {
    //Literals Object.
}
//console.log(tinderUser) // Empty Folder show 
//value declare singleton
tinderUser.id = "22020AC123";
tinderUser.name = "Subhalaxmi Murmu";
tinderUser.isLoggedIn = false;
tinderUser.email_id = "subhalaxmi23@gmail.com";

//console.log(tinderUser)

//(object->(object))

const regularUser = {
    email_id : "Smurmu@gmail.com",
    full_name : {
        user_full_name : {
            first_name : "Subhalaxmi",
            last_name : "Murmu"
        }
    }
}

//console.log(regularUser.email_id)
//console.log(regularUser.full_name)
//console.log(regularUser.full_name.user_full_name)
//console.log(regularUser.full_name.user_full_name.first_name) // output: subhalaxmi
//console.log(regularUser.first_name) // output : undefined


// object combine
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"c"}

//const obj3 = {obj1,obj2}
//console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

// object combine method 1
//object assign
//object assign syntax : 
/*Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2,
*/
//link object assign : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

//const obj4 = Object.assign(obj1,obj2)
// console.log(obj4);
//console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }
const obj5 = Object.assign({},obj1,obj2)
//console.log(obj5);
//console.log(obj1); //{ '1': 'a', '2': 'b' }

// object combine method 2
const obj6 = {...obj1,...obj2}

//console.log(obj6);

//database value use

const users =[
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "r@gmail.com"
    }
]

users[1].email
//console.log(users)
//console.log(tinderUser);

//intresting method

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
// console.log(tinderUser.hasOwnProperty('isLogged')) //false

//more object detalish or method google->inspect and learn more 






//--------------------object last video ---------------------

const course = {
    course_name : "Js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor)

//Object destructure : 
const {courseInstructor : Instructor} = course

console.log(Instructor);
//prop
// const navbar = ({company}) => { //object destructing 

// } 

// navbar(company = "hitesh") 

// {
//     "name" : "hitesh",
//     "price" : "freee"
//     "coursename" : "js in hindi"
// }

// [
//     {},
//     {},
//     {},
// ]

//Api Study : 
//link random user api : https://randomuser.me/
//link json formmater : https://jsonformatter.org/#google_vignette