// date detalish more link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
/*
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight
 at the beginning of January 1, 1970, UTC (the epoch).
 */

let myDate = new Date()
// console.log("date : ",myDate);
// console.log("date to string : ",myDate.toString());
// console.log("date to date string: ",myDate.toDateString());
// console.log("date to ISOS String: ",myDate.toISOString());
// console.log("date to JSON : ",myDate.toJSON());
// console.log("date to LocaleDateString: ",myDate.toLocaleDateString());
// console.log("date to LocaleTimeString: ",myDate.toLocaleTimeString());
// console.log("date toTimeString : ",myDate.toTimeString());
// console.log("date to UTCString : ",myDate.toUTCString());

// type of date

//console.log("Type of date : ",typeof myDate);
//console.log("Type of date : ",typeof Date());

let myCreatedDate = new Date(2025, 1, 23) //JS Date month starting from 0 , ex : 0 - jan, 1 - feb, 2- march.. 11- dec
//console.log(myCreatedDate.toDateString());

let myDateCreate = new Date("2025-02-22") //JS when you (yyyy-mm-dd) write date then count the 1 like 1-jan,2-feb...
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myind_date = new Date("02-02-2025")
//console.log(myind_date.toDateString());
//console.log(myind_date.toLocaleString());


// time stamps , time stamp meaning : a record in printed or digital form that shows the time at which something happened or was done: 
// A timestamp may also be used to verify digital signatures. A Postal Service time stamp shows it was mailed at 9:01 AM.

let myTimeStamp = Date.now() //date are come mili second value
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let new_date = new Date()

// console.log(new_date);
// console.log(new_date.getDay());
// console.log(new_date.getHours());
// console.log(new_date.getMonth() + 1);

// `` -> backstick

console.log(new_date.toLocaleDateString('default',{
    weekday: "long"
}))













