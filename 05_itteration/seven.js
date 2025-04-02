const myNumbers = [1,2,3,4,5]

const newNum = myNumbers.map((num) => num+10)
//console.log(newNum);
const newNumb = myNumbers.map((num) => {return num+10} )
//console.log(newNumb);

//Caining Method 

const newNumbs = myNumbers
                        .map((num) => num*10 )
                        .map((num) => num + 1)
                        .filter((num) => num >= 30 )
console.log(newNumbs);



