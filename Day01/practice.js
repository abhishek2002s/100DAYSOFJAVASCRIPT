//primitive data type
//7 types: string,number,boolean,null,undefined,symbol,BigInt;

const score = 100;
const scorevla = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);
console.log(typeof id);

const bigNumber = 234809238408294n;
console.log(typeof bigNumber);

//Reference type (Non primitive)
//Array , Objects,Functions

// aaray
const person = ['Rahul','abhi','satyam'];
console.log(typeof person);

//obj
let myobj = {
    name : "abhishek",
    age:22,
}
console.log(typeof myobj);

//function
const myfun = function(){
    console.log("Hello world");
}