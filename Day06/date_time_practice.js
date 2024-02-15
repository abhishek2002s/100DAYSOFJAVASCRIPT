//****practice time */
// let x = new Date("2019-07-31,11:12:21");

// //set date and time *****
// x.setMinutes(2);
// x.setFullYear(2020);
// console.log(x);


//get time and date *****
// console.log(x.getTime()); //time in millisecond
// console.log(x.getMonth());
// console.log(x.getMinutes());
// console.log(x.getSeconds());
// console.log((x.getDay())); //0-6 where o is sunday
// // /* 0-11 , january is 0 and december is 11


//appliaction(what days after 50 days)
// let x = new Date("2019-07-31,11:12:21");
// // let y =  new Date("2019-07-31,11:12:21");
// y.setDate(x.getDate() +50);
// console.log(x);
// console.log(y);


//comapre dates
let x = new Date("2019-07-31,11:12:21");
let y =  new Date("2019-07-31,11:12:21");

if(x>y){
    console.log("X is future date");
}
else if(x<y){
    console.log("x is past date");
}
else{
    console.log("x is same date");
}