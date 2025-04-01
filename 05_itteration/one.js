//for loop

for (let i = 0; i < 11; i++) {
    const element = i;
   // console.log(element);
    
}
for (let i = 0; i < 11; i++) {
    const element = i;
    if(element == 7){
       // console.log("lucky number.");
    }
    // else{
    //     console.log("y");
        
    // }
   // console.log(element);
    
}

for(let i = 0; i<= 10;i++){
    //console.log(`Outer loop value: ${i}`);
    
    for(let j = 1;j<= 3;j++){
       // console.log(`Inner loop value j :  ${j} and inner loop i : ${i}  `);
        
    }
}

//multiplication table :
for(let i = 0; i<= 10;i++){
    //console.log(`Multiplication table : ${i}`);
    
    for(let j = 1;j<= 10;j++){
         //console.log(i + '*' + j + '=' + i*j);
    }
}

//array work : 

let myBro_Sis = ["abinash murmu","arjun murmu","uttam kumar murmu","biduty kumar murmu","nabin murmu","Subhalaxmi murmu","Pratysha priyadarshani murmu"]
//console.log("length : ",myBro_Sis.length);

for (let index = 0; index < myBro_Sis.length; index++) {
    const element = myBro_Sis[index];
    //console.log(element);
}

//keywords : break and continue

for (let index = 1; index <= 20; index++){
    // if(index == 5){
    //     break;
    // }
    //console.log(`Value of i is : ${index}`); 
}

for (let index = 1; index <= 20; index++){
   // console.log(`Value of i is : ${index}`);
    // if(index == 5){
    //     break;
    // }
    
}

for (let index = 1; index <= 20; index++){
    //console.log(`Value of i is : ${index}`);
     if(index == 5){
       // console.log("Detected 5.");
         continue;
     }
     
 }

 for (let index = 1; index <= 20; index++){
    if(index == 5){
        //console.log("Detected 5.");
         continue;
     }
   // console.log(`Value of i is : ${index}`); 
 }

 for (let index = 1; index <= 20; index++){
    if(index == 5 , index == 15){
       // console.log("Detected 5.");
         continue;
     }
   // console.log(`Value of i is : ${index}`); 
 }

