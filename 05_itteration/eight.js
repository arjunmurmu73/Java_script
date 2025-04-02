//reduce()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const arr1 = [1,2,3,4];

const intitial = 0;

const sumWithInt = arr1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    intitial
)
//console.log(sumWithInt);

const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc, curval) {
    //console.log(`acc : ${acc} and curval : ${curval}`);
    
    return acc+curval
},2) //2 initial
//console.log(myTotal);

const mytot = myNums.reduce((acc,curval) => (acc+curval), 2)
//console.log(mytot);

const shoppingCart = [
    {
        itemName : "Js Course",
        price : 2999
    },
    {
        itemName : "Mobile Delopment",
        price : 5999
    },
    {
        itemName : "App Devlopment",
        price : 1999
    },
    {
        itemName : "Software Devlopment",
        price : 12999
    },
]

const total_price = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(total_price);



