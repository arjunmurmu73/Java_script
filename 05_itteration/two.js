// while loop

let index = 0
while (index <= 10) {
    //console.log(`Value of index : ${index}`);
    index++; 
}

let Girls_std = ["jaylamxi","samiskhya","Jharana","sital","banita","bulbul","tapaswini"]
//console.log(Girls_std.length);
Girls_std.push("Swapnarani")
let Boys_std = ["Dipti","Subham","Adarsh","Karan","Rudra","Bhimsen"]
//console.log(Boys_std.length);

const myStudents = [...Girls_std,...Boys_std]
//console.log(myStudents);

let arr = 0
while(arr < myStudents.length){
    //console.log(`Stundent name ${arr} : ${myStudents[arr]}`);
    arr = arr + 1;
}


//do while loop

let score = 11
do{
    console.log(`Score is : ${score}`);
    score++;
} while ( score <= 10);
