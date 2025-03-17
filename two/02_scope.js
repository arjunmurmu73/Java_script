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
console.log(c); // 40 (this is the problem of var uses var scope ke ander se bi value leta hi jo ki thik nahi hai.)