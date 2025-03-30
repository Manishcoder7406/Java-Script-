// dates are managed in milliseconds

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString ());

//  console.log(typeof mydate);     // type of date is OBJECT //


// let myCreatedDate = new Date(2023,0,23)

// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-10-2025")

//  console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)     // used to show the milliseconds from 1st jan 1970 to till now

//console.log(myCreatedDate.getTime());

// to convert in seconds
console.log(Date.now()/1000)   // ths will give answer in decimal form
// to overcome the decimal we use math.floor

console.log(Math.floor(Date.now()/1000));

// there are many methods which are used to get the hours , minutes, seconds, days , years etc 
// .get...()  like this 

