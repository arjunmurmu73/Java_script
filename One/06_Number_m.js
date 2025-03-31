const score = 444
// console.log(score);


const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // fixed number .00 (prasion value)

const otherNumber = 23.98789

// console.log(otherNumber.toFixed(2))
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

//*********************************************MATHEMATICS**************************** *//
//Math himself object , []
// console.log(Math);
// console.log(Math.abs(-66)); //abs -> negative convert +Ve and +ve is +ve

// console.log(Math.round(4.3));  // 4.1 -> 4 & 4.8 -> 5
// console.log(Math.ceil(4.2)); //thoda sa jayda hoa ta top value chose : output : 5
// console.log(Math.floor(4.3)); //ground value : output : 4

// console.log(Math.sqrt(5625))

// console.log((Math.min(2,6,2,1,0)));
// console.log((Math.max(2,6,2,1,0)));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log((Math.floor(Math.random()*10) + 1));

//maximum and minimun value defind
const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

