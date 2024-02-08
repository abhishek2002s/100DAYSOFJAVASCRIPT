// comment(//)= console is used to show output::
// console.log('hello  world');

//alert is use to show alert popup in chrome window.

// document.getElementById("h").innerHTML = "abhihsek"
// document.write("Abhishek");

//variable  var,let and constant(valid _,$,letter)
//constant is fixed value which value does not change
var digit1 = 5;
digit1 = 10;
console.log(digit1)

let x =6, y= "jhon";
console.log(x+y);

//operator in javascript
//assignment operator
let a = 10;
let b = 4;
b =a;
console.log(b);
//arithmetic +,-,*,/,%,** power,++,--;
//bitwise  AND OR NOT;
//comaparsion ==,!=,>,<,>=,<=,===;
let c =30;
c+=2;
console.log(c ** 2);

//DATA type:
//nuumerb,string,boolean,null,undefined,object,symbol,array;
let num =99;
let str = "ab\"hi";
console.log(str);
let bool = true;
let nullval = null;
let undefVal = undefined;
let obj = {name:"abhi",age:'28'};
let sym =Symbol();
let array = ["abhi","soni","28"];

let data = typeof("10"+"20");
console.log(data);

//template literal
let name = "abhishek";
alert(`hello ${name}`)