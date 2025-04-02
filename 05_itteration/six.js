const coding = ["js","ruby","python","cpp","java"]

const values = coding.forEach( (item) => {
   // console.log(item);
   return item
})
//console.log(values);

let myNums = []
for (let i = 0; i <= 100; i++) {
    myNums.push(i)
}
//console.log(myNums);

//const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myNum = myNums.filter( (num) => num > 5)

// console.log(myNum);

// const newNums = myNums.filter( (num) => {
//     return num > 50
// })
// console.log(newNums);

// const myNum = myNums.filter( (num) => {
//     if(num > 50){
//         //console.log(num);
//         return num
//     }
// })

// console.log(myNum);

const newNums = [];

myNums.forEach( (num) => {
    if(num > 50) {
        newNums.push(num);
    }
});

//console.log(newNums);


//EXAMPLE : 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter((bk) => bk.genre === 'Science')
  //console.log(userbook);

let userbooky = books.filter((bk) => bk.publish >= 2000)
//console.log(userbooky);
userbooky = books.filter((bk) => {return bk.publish >= 2000})
//console.log(userbooky);

let user_b_his = books.filter((bk) => {return bk.publish >= 1900 && bk.genre === 'History' || bk.genre === 'Science'})
console.log(user_b_his);


  




