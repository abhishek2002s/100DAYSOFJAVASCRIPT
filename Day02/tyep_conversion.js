//implicit type conversion

let num = 5+null;
console.log(typeof(num)); //number

let type = "5" + 2;
console.log(typeof(type)); //string

//explicit type conversion

let age = 18;
console.log(typeof(age));

let newage = String(age);
console.log(typeof(newage));

let greet = "hello";
let greetno = Number(greet);
console.log(typeof(greetno));
console.log(greetno); // Nan => not a number 

let res = 0;
let newres = Boolean(res);
console.log(typeof newres);