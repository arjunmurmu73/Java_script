const coding = ["js","ruby","python","cpp","java"]

coding.forEach( function (item) {
    //console.log(item);
} )

coding.forEach( (item) => {
    //console.log(item);
})

// function printMe(item){
//     //console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item);
    // console.log(index);
    // console.log(arr);
    //console.log(item, index, arr); 
})


const myCoding = [
    {
        Lang : "JS",
        Lang_f : "javascipt"
    },
    {
        Lang : "j",
        Lang_f : "java"
    },
    {
        Lang : "cpp",
        Lang_f : "c"
    },
]

myCoding.forEach( (item) => {
    //console.log(item);
    console.log(item.Lang); // value property 
})

