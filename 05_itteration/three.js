// for of
//array specific loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for(const num of arr){
    //console.log(num);  
}

const name = "arjun murmu"
for(const n of name){
    if(n == " "){
        continue;
    }
    //console.log(n);
}

// map:
const map = new Map()

map.set('IN', "India")
map.set('USA',"United State of America")
map.set('Fr',"Franch")
map.set('IN',"India")

//console.log(map );  //object throw output

//for use map

for(const key of map){
    //console.log(key); //individual array output
}

for(const [key,value] of map){
    //console.log(key); //only key output like : IN USA Fr
    //console.log(value); //only value output
    //console.log(key ,':->', value); 
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for(const [key,value] of myObj){
    //console.log(key); //TypeError: myObj is not iterable 
}

