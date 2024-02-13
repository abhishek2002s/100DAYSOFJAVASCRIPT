const name = "abhishek"
const repocount = 50

console.log(name.split('-'));
// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is  ${repocount}`);


const gameName  = new String("abhishek");
console.log(gameName.__proto__);


//toUpperCase , charAt
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


//substring
console.log(gameName.substring(0,4));


//slice
const anotherString = gameName.slice(-7,4);
console.log(anotherString);


const msg = " hello ";
console.log(msg)
console.log(msg.trim());

const url = "https://abhi.com/abhi%20soni";
console.log(url.replace('%20','-'));
console.log(url.includes("soni"));
console.log(url.split('-'));


