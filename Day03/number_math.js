//number and math in javascript

//number
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
//output = [number : 100]

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.4687;
console.log(otherNumber.toPrecision(4));

const hunderds = 10000;
console.log(hunderds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324


//Math function

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

console.log(Math.min(4,3,5,6));
console.log(Math.max(4,3,5,6));

console.log(Math.random()); // generates a random number between 0 and 1;
console.log(Math.floor(Math.random()*10) + 1);


const min =10;
const max = 70;
console.log(Math.floor(Math.random() * (max - min + 1))+ min)